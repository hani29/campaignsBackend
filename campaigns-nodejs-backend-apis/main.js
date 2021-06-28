const dotenv = require('dotenv');
dotenv.config();

const {
    server,
    io,
    app
  } = require('./src/settings/server');

  const Knex = require('knex');
  const knexConfig = require('./config/knex');
  const v1 = require('./src/routes/');

  const {
    Model
  } = require('objection');
  
  // Initialize knex.
const knex = Knex(knexConfig[process.env.NODE_ENV || 'development']);

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex method.
Model.knex(knex);

app.use(function (req, res, next) {
    req.io = io;
    next();
});

app.use('/api', v1);
// app.use('/api/v2', v2);

app.use((err, req, res, next) => {
  console.log(err)
    if (err) {
      
      res.status(err.statusCode || err.status || 500).send(err || {});
  
    } else {
      next();
    }
  });

  server.listen(process.env.PORT, function () {
    console.log('listening on *:', server.address().port);
    console.log(`Your port is ${process.env.PORT}`);
    console.log(`Your port is ${process.env.NODE_ENV}`);
  });
