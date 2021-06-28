CONFIG = {};

const developmentUrl = require('../../config/index').development;
const testingUrl = require('../../config/index').local;
const productionUrl = require('../../config/index').production;
const dotenv = require('dotenv');
dotenv.config();

CONFIG.jwt_encryption 	= 'xIMEE1vdvlvTjac1tGyiJHZusIFBtl';

/** development */
// CLIENT_COMPANY_URL = 'http://3.6.40.92/company/'; //'http://3.6.40.92/company/';
// CLIENT_URL = 'http://3.6.40.92/';

/** testing env */
// CLIENT_COMPANY_URL = 'https://test.bluerang.com/company/'; //'http://3.6.40.92/company/';
// CLIENT_URL = 'https://test.bluerang.com/';

/** production env */
CLIENT_COMPANY_URL = ''; //'http://3.6.40.92/company/';
 CLIENT_URL = '';
GLOBAL_ADMIN_URL = '';

if(process.env.NODE_ENV == 'development'){
    CLIENT_COMPANY_URL = developmentUrl.CLIENT_COMPANY_URL;
    CLIENT_URL = developmentUrl.CLIENT_URL;
} else if(process.env.NODE_ENV == 'local'){
    CLIENT_COMPANY_URL = testingUrl.CLIENT_COMPANY_URL;
    CLIENT_URL = testingUrl.CLIENT_URL;
} else if(process.env.NODE_ENV == 'production'){
    CLIENT_COMPANY_URL = productionUrl.CLIENT_COMPANY_URL;
    CLIENT_URL = productionUrl.CLIENT_URL;
} 

module.exports = {
    clientBusinessUrl : CLIENT_COMPANY_URL, //localhost:4200/
    clientUrl : CLIENT_URL, //localhost:4200/
    per_page: 10,
    CONFIG
};

