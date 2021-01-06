module.exports = {
  development: {
    username: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'superheroes_db',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};

// (() => {
//   console.log('process>> ', process);
//   console.log('process.env>> ', process.env);
//   console.log('DB_PASSWORD>> ', process.env.DB_PASSWORD);
// })();
