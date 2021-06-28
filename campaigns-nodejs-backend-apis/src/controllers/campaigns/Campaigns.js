'use strict';
const { base64encode, base64decode } = require('nodejs-base64');
const globalCalls = require('../../settings/functions');
const globalConst = require("../../settings/constants");
const Campaigns = require('../../models/Campaigns');

const moment = require("moment");

const {
    transaction,
    raw
} = require('objection');


const ListCampaigns = async(req, res)=>{
    try 
    {           
        let page = req.query.page ? req.query.page : 1;
        let limit = req.query.limit ? req.query.limit : globalConst.per_page;
        let offset = req.query.offset ? req.query.offset : limit * (page - 1);
        let current_date=moment(new Date()).format('YYYY-MM-DD');
        
        let campaignsData = await Campaigns.query().select(
            "campaigns_id", "title", "total_amount", "backers_count", "end_date", "created_at"
            )
        .where((builder) => {
            if (req.query.status && req.query.status=='active' ) {
                builder.where("end_date", ">=", current_date);
                builder.where(function () {
                    this.whereRaw('created_at >= ?', [
                      moment(new Date()).subtract(1, 'month').format('YYYY-MM-DD')
                    ]);
                })
            }
            if (req.query.status && req.query.status=='closed') {
                builder.where("end_date", "<=", current_date);
                builder.where(function () {
                    this.whereRaw('created_at >= ?', [
                      moment(new Date()).subtract(1, 'month').format('YYYY-MM-DD')
                    ]);
                })
            }
        })
        .orderBy('total_amount','DESC')
        .offset(offset)
        .limit(limit);
        
        
        let totalCount = await Campaigns
        .query()
        .count('campaigns_id as count')
        .where((builder) => {
            if (req.query.status=='active') {
                builder.where("end_date", ">=", current_date);
                builder.where(function () {
                    this.whereRaw('created_at >= ?', [
                      moment(new Date()).subtract(1, 'month').format('YYYY-MM-DD')
                    ]);
                })
            }
            if (req.query.status=='closed') {
                builder.where("end_date", "<=", current_date);
                builder.where(function () {
                    this.whereRaw('created_at >= ?', [
                      moment(new Date()).subtract(1, 'month').format('YYYY-MM-DD')
                    ]);
                })
            }
        })
        .first();
        
        if(!campaignsData) {
        throw globalCalls.badRequestError("No campaigns found.");
        } else {

            let responseData = {
                campaignsData,
                total: totalCount.count
            };

            return globalCalls.okResponse(res, responseData, "");
        }
    } catch (error){
    throw globalCalls.badRequestError(error.message)
    }
}


module.exports = {
  ListCampaigns
}