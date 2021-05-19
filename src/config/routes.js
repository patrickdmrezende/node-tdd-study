module.exports = (app) => {
  app.route('/users').get(app.routes.users.findAll);
  app.route('/user').post(app.routes.users.create);
};
