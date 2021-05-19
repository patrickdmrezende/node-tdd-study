module.exports = () => {
  const findAll = (req, res) => {
    const users = [
      { name: 'Mary Jane', mail: 'mary@mail.com' },
    ];
    res.status(200).json(users);
  };

  const create = (req, res) => {
    res.status(201).json(req.body);
  };

  return { findAll, create };
};
