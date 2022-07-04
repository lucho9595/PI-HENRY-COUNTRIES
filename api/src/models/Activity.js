const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
    // id: {
    //   type: DataTypes.STRING(3),
    //   primaryKey: true,
    //   allowNull: false
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    difficulty: {
      type: DataTypes.ENUM,
      allowNull:false,
      values: [
        "1",
        "2",
        "3",
        "4",
        "5",
      ],
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["Summer", "Autumn", "Winter", "Spring"],
    },
  }, {timestamps: false});
};