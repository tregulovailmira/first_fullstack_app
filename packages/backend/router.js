const { Router } = require('express');
const { superheroRouter } = require('./routers');

const router = new Router();

router.use('/superheroes', superheroRouter);

module.exports = router;
