const express = require('express');
const { Op } = require('sequelize');
// const { getAllCountries } = require('../controllers/CountriesControl/getCountries.js');
const { Country, Activity } = require('../db');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = (express.Router());

router.use(express.json());

router.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      let searchName = await Country.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%`, },
        },
          incluides:{ Activity}
        
      });
      if (searchName.length) {
        return res.json({ searchName })
      } 
        return res.status(404).json({ error: "Country is not found", description: "The country entered does not exist" })
      
    }
    
    const country = await Country.findAll({
      include: { model: Activity },
    });
    res.status(200).json(country);

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
