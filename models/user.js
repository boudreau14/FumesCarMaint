module.exports = function(sequelize, DataTypes) {
    
    var User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            required: true,
            allowNull: false
        },
    })
    return User;
}