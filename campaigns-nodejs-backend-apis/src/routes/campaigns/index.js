const promiseRouter = require('express-promise-router');
const router = promiseRouter();
const AdminAgencyOwnerController = require('./../../controllers').Campaigns;

router.get('/campaign', AdminAgencyOwnerController.ListCampaigns);

module.exports = router;