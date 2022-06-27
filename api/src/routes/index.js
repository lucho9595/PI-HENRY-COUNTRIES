const { Router } = require('express');
const CountriesRoutes = require('./countriesRoutes.js');
// const ActivitiesRoutes = require('./activitiesRoutes.js')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', CountriesRoutes);
// router.use('/activity', ActivitiesRoutes);


module.exports = router;
