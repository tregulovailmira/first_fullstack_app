const { Router } = require('express');
const { superheroController } = require('../controllers');
const { upload } = require('../middleware');

const superheroRouter = Router();

superheroRouter
  .route('/')
  .post(superheroController.create)
  .get(superheroController.getMany);

superheroRouter
  .route('/:superheroId')
  .get(superheroController.getById)
  .put(superheroController.updateById, superheroController.create)
  .delete(superheroController.deleteById);

superheroRouter
  .route('/:superheroId/images')
  .patch(upload.single('superhero_image'), superheroController.addImage);

module.exports = superheroRouter;
