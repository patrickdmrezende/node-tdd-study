module.exports = {
  test: {
    client: 'pg',
    version: '9.6',
    connection: {
      host: '192.168.0.107',
      user: 'postgres',
      password: 'postgresadmin',
      database: 'nodetddstudy',
    },
    migrations: {
      directory: 'src/migrations',
    },
  },
};
