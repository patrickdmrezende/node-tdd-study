module.exports = (app) => {
  const findAll = (filter = {}) => {
    return app.db('users').where(filter).select();
  };

  const save = async (user) => {
    if (!user.name) return { error: 'Name is required' };
    if (!user.mail) return { error: 'Email is required' };
    if (!user.passwd) return { error: 'Password is required' };

    const userDb = await findAll({ mail: user.mail });
    if (userDb && userDb.length > 0) return { error: 'There is already exists a user with this email' };

    return app.db('users').insert(user, '*');
  };

  return { findAll, save };
};
