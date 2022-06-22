const { Router } = require('express');
const {getAllCountries} = require('../controllers/CountriesControl/getCountries.js');
const {Country, Activity} = require ('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', async (req, res) => {
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
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const country = await Country.findByPk(id.toUpperCase(), {
        include: {
          model: Activity,
        },
      });
      country
        ? res.status(200).json(country)
        : res
            .status(404)
            .json({
              error: "COUNTRY_NOT_FOUND",
              description: `There is not a country with ${id.toUpperCase()}`,
            });
    } catch (e) {
      console.log("/routes/countries/:id get error", e);
      res.status(500).send({ error: "ID_ERROR", description: "Error found ID" });
    }
  });

module.exports = router;
