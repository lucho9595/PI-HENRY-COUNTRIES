const { Router } = require('express');
const { Country } = require("../db.js");
const router = Router();

router.get('countries/:id', async (req, res) => {
    const {id} =req.params;
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