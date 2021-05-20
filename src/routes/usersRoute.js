module.exports = (app) => {
  const service = app.services.usersService;

  const findAll = (req, res) => {
    service.findAll()
      .then((result) => res.status(200).json(result));
  };

  const create = async (req, res) => {
    const result = await service.save(req.body);
    res.status(201).json(result[0]);
  };

  return { findAll, create };
};
