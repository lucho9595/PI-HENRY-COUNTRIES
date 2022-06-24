const axios = require('axios');
const {Country, Activity} = require('../../db');

const getAllCountries = async () => {
 try{
    const country1 = await axios.get('https://restcountries.com/v3/all');
    const country2 = country1.data.map(element => {
        return {
          id: element.cca3,
          name: element.name.common,
          flag: element.flags[1],
          continents: element.continents[0],
          capital: element.capital ? element.capital[0] : 'Capital not found',
          subregion: element.subregion
            ? element.subregion
            : 'Subregion not found',
          area: element.area,
          population: element.population,
         //  mapLocation: element.maps.googleMaps,
        }
      });
      country2.forEach((country) => {
         Country.findOrCreate({
            
             where: { id: country.id,
                 name: country.name,
                 flag: country.flag,
                 continents: country.continents,
                 capital: country.capital,
                 subregion: country.subregion,
                 area: country.area,
                 population: country.population,
             }
         })
      })
    return country2;
      } 
 
 catch(err){
   console.log('Error getAllCountry en controller ' + err);
 }
};

const getCountriesById = async (id) => {
   try {
      let idCountries = await Country.find(id.toUpperCase(),{incluide: {Activity}})
      console.log('funcionando por id')
      return idCountries;
   }
   catch(err){
      console.log('Error getCountriesById en controller ' + err);
   }
}

const createActivity =

module.exports = {
   getAllCountries,
   getCountriesById
};