module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '3.105.10.177'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'myshop'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', ';]c"yaRJRgkKE3%j'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
