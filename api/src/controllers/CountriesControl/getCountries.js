const axios = require('axios');
const {Country, Activity} = require('../../db');

const getApiInfo = async () => {
   const countries = await Country.findAll({
       attributes: ["id", "name", "flag", "continents", "capital", "subregion", "area", "population"],
   });
   if (!countries.length) {
       var allCountry = await axios.get("https://restcountries.com/v3/all");
       allCountry = allCountry.data
       allCountry = allCountry.map((element) => {

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
           }
       });
       await Country.bulkCreate(allCountry);
       return allCountry;
   } else {
       return countries
   }
};

const getDbInfo = async () => {
   return await Country.findAll({
       include: {
           model: Activity,
           attributes:["name", "difficulty", "duration", "season"],
           through: {
               attributes: [],
           },
       }
   })
}

const getAllCountries = async () => {
   const apiInfo = await getApiInfo();
   const dbInfo = await getDbInfo();
   const infoTotal = apiInfo.concat(dbInfo);
   return infoTotal
}
const getActivity = async () => {
   const activity = await Activity.findAll({
       include: { 
           model: Country,
           attributes:["name", "flag", "continents"],
           through: {
               attributes: [],
           }
       }
   })
   return activity
}


module.exports={
   getAllCountries,
   getDbInfo,
   getApiInfo,
   getActivity
}