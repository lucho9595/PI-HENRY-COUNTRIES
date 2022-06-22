const { Router } = require('express');
const {getAllCountries, getCountriesByName} = require('../controllers/CountriesControl/getCountries.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/', async (req, res) => {
    const { name } = req.query;
    try {
        if(name){
            const byNameCountries = await getCountriesByName(name)
            if(byNameCountries.length !== 0){
                res.status(200).send(byNameCountries)
            } else {
                res.status(404).send('Error 404, Pais no encontrado')
            }
        } else {
            const allCountries = await getAllCountries();
            if(allCountries){
                res.status(200).send(allCountries)
            } else {
                res.status(404).send('Error 404, Paises no encontrados')
            }
        }
    } catch (error) {
        console.log('Error getCountries en el llamado ' + error)
    }
})

module.exports = router;
