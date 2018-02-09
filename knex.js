
  require('dotenv').config();
  const data = require('./data_access')

  const knex = require('knex')({
    client: 'postgresql',
    connection: {
      host     : process.env.DB_HOST,
      user     : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME,
      port     : process.env.DB_PORT,
      ssl      : process.env.DB_SSL
    },
  });

  const m = `
    SELECT * FROM markers
  `
  data.query(m, (err, result) => {
    if (err) {
      return console.error("error running query", err);
    }
    for(value of result.rows) {
     console.log(value.latitude, value.longitude)
   }
     process.exit();
  });

