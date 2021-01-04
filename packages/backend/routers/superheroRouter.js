const { Router } = require('express');
const { superheroController } = require('../controllers');


const superheroRouter = Router();

superheroRouter
  .route('/')
  .post(superheroController.create)
  .get(superheroController.getMany);

superheroRouter
  .route('/:superheroId')
  .get(superheroController.getById)
  .put(superheroController.updateById)
  .delete(superheroController.deleteById);

superheroRouter.post('/:superheroId/images');

module.exports = superheroRouter;
