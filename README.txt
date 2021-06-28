# campaigns-test

Create a Web API with the following functionality.
1. Add an endpoint to get a list of campaigns.
Make a call to external API https://localhost:3000/api/campaign to fetch the
campaigns and sort them by Total Amount in descending order and return the
campaigns. The result returned should contain the fields Title, Total Amount, Backers
Count and End Date.
2. Add an endpoint to get active campaigns that are created within the last 1 month.
Make a call to external API localhost:3000/api/campaign?status=active to fetch
campaigns and filter active campaigns. A campaign is active if the end date is greater
than or equal to today. Filter the list further to get the campaigns that are created within
the last 30 days.
3. Add an endpoint to get closed campaigns.
Make a call to external API localhost:3000/api/campaign?status=closed to fetch
campaigns and filter closed campaigns. A campaign is closed if the end

Developed In-
NPM 6.14.12
Node v12.22.1
Express 4.17.1
Query Builder - Knex
ORM(Object Relational Mapping) - Objection.js

path of Change Database users details
config/index.php

To run the backend code use
npm install(if linux run with sudo)
nodemon

.env
NODE_ENV=development
PORT=3000

#NODE_ENV=production
#PORT=3000

if getting mysql version error like "nodejs mysql ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client"
then login to mysql server(sudo mysql -u root -p) and use below cammand
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Year#2015';
flush privileges;
