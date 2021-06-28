const Users = require("../models/UserLogin");
const globalCalls = require("../settings/functions");

/**
 * checkuser
 * @param {*} req
 * @param {*} res
 */
const CheckUserVerified = async (req, res) => {
    try {
        let CheckUserQuery;
        CheckUserQuery = Users.query()
            .select(
                "user_id",
                "first_name",
                "last_name",
                "email_id",
                "user_type",
                "is_user_verified",
                "default_company",
                "profile_pic"
            )
            .where("user_id", req.user.user_id)
            .first();

        let userLogin = await CheckUserQuery;
        if (userLogin)
            return globalCalls.okResponse(res, userLogin, "Operation Successful");
    } catch (error) {
        console.log(error);
        throw globalCalls.badRequestError(error.message);
    }
};


module.exports =
{
    CheckUserVerified
}