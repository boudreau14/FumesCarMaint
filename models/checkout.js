module.exports = function (sequelize, DataTypes) {
    var Checkout = sequelize.define("Checkout", {
      username: {
          type:DataTypes.STRING,
          allowNull: false
      },
      cardnumber: {
          type: DataTypes.INTEGER,
          allowNull: false
      },
      cardMonth: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cardYear: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      cardSec: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    });
  
    return Checkout;
  };
  