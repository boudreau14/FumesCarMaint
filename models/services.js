module.exports = function (sequelize, DataTypes) {
  var Services = sequelize.define("Services", {
    name: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      required: true,
      allowNull: false,
    },
  });

  return Services;
};
