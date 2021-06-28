'use strict';
const Model = require('objection').Model;

class Campaigns extends Model {
    static get tableName() {
      return 'campaigns';
    }
  
    static get idColumn() {
      return 'campaigns_id';
    }
    // static relationMappings() {
    //     return {
    //         user: {
    //             relation: Model.BelongsToOneRelation,
    //             modelClass: __dirname+"/UserLogin",
    //             join:{
    //                 from:"agency_admin_comments_log.comment_by",
    //                 to:"user_login.user_id"
    //             }
    //         }
    //     }
    // }
}
module.exports = Campaigns;