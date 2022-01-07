module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2101f976cfdef4be79f8c5a9dcc1dfb2'),
  },
});
