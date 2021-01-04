const { Superhero } = require('../models');

module.exports.create = async (req, res, next) => {
  const { body } = req;
  console.log(body);
  try {
    const createdSuperhero = await Superhero.create(body);
    createdSuperhero
      ? res.status(201).send({ data: createdSuperhero })
      : res.status(400).send('Bad request');
  } catch (error) {
    next(error);
  }
};

module.exports.getMany = async (req, res, next) => {};

module.exports.getById = async (req, res, next) => {};

module.exports.updateById = async (req, res, next) => {};

module.exports.deleteById = async (req, res, next) => {};

module.exports.addImage = async (req, res, next) => {};
