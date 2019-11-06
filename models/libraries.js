module.exports = (sequelize, type) => {
    return sequelize.define('library', {
        id: {
            type: type.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            unique: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        location: {
            type: type.Sequelize.TEXT,
            allowNull: false
        }
    })
};