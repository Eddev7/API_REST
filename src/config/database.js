require('dotenv').config();

// module.exports = {
//   dialect: 'mariadb',
//   host: process.env.DATABASE_HOST_MDB,
//   port: process.env.DATABASE_PORT_MDB,
//   username: process.env.DATABASE_USERNAME_MDB,
//   password: process.env.DATABASE_PASSWORD_MDB,
//   database: process.env.DATABASE,
//   define: {
//     timestamps: true,
//     underscored: true,
//     underscoredAll: true,
//     createdAt: 'created_at',
//     updatedAt: 'updated_at',
//   },
//   dialectOptions: {
//     timezone: 'America/Sao_Paulo',
//   },
//   timezone: 'America/Sao_Paulo',
// };

module.exports = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST_PG,
  port: process.env.DATABASE_PORT_PG,
  username: process.env.DATABASE_USERNAME_PG,
  password: process.env.DATABASE_PASSWORD_PG,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};
