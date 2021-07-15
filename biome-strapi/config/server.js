module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: '/sitebiome-api',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3ce09c95cb32c554ea225b8c7e3703a5'),
    },
    url: 'http://localhost:1337/sitebiome-admin'
  },
});
