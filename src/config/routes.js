module.exports = (app) => {
  app.route('/users').get(app.routes.usersRoute.findAll);
  app.route('/users').post(app.routes.usersRoute.create);
};
