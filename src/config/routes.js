module.exports = (app) => {
  app.route('/users').get(app.routes.usersRoute.findAll);
  app.route('/user').post(app.routes.usersRoute.create);
};
