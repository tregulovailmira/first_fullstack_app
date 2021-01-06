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

//GET http://localhost:5000/api/superheroes?page=2&item_on_page=3
module.exports.getMany = async (req, res, next) => {
  const {
    query: { page, item_on_page },
  } = req;

  try {
    const foundSuperheroes = await Superhero.findAll({
      attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
      limit: item_on_page,
      offset: (page - 1) * item_on_page,
    });
    res.status(200).send({ data: foundSuperheroes });
  } catch (error) {
    next(error);
  }
};

module.exports.getById = async (req, res, next) => {
  const {
    params: { superheroId },
  } = req;

  try {
    const foundSuperhero = await Superhero.findByPk(superheroId);
    foundSuperhero
      ? res.status(200).send({ data: foundSuperhero })
      : res.status(404).send('Superhero not found');
  } catch (error) {
    next(error);
  }
};

module.exports.updateById = async (req, res, next) => {
  const {
    body,
    params: { superheroId },
  } = req;

  try {
    const [updatedRowCount] = await Superhero.update(body, {
      where: { id: superheroId },
      returning: true, // for [updatedRowCount, [updatedSuperhero]], but not only updatedSuperhero
    });

    if (updatedRowCount) {
      return res.status(204);
    }
    body.id = superheroId;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports.deleteById = async (req, res, next) => {
  const {
    params: { superheroId },
  } = req;

  try {
    const deletedSuperheroRowCount = await Superhero.destroy({
      where: { id: superheroId },
    });
    deletedSuperheroRowCount
      ? res.status(204)
      : res.status(404).send('Superhero not found');
  } catch (error) {
    next(error);
  }
};

module.exports.addImage = async (req, res, next) => {
  const {
    params: { superheroId },
    file,
  } = req;

  try {
    const superHeroForUpdate = await Superhero.findByPk(superheroId);
    console.log('superHeroForUpdate>> ', superHeroForUpdate);
    if (superHeroForUpdate) {
      superHeroForUpdate.images.push(file.filename);
      const [updatedRowCount, [updatedSuperhero]] = await Superhero.update(
        superHeroForUpdate.get(),
        {
          where: { id: superheroId },
          returning: true,
        }
      );
      console.log('updatedRowCount>> ', updatedRowCount);
      return res.status(200).send({ data: updatedSuperhero });
    }
    res.status(404).send('Superhero not found');
  } catch (error) {
    next(error);
  }
};
