module.exports = (sequelize, type) => {
    return sequelize.define('book', {
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
        author: {
            type: type.Sequelize.TEXT,
            allowNull: false
        },
        page_count: {
            type: type.INTEGER,
            allowNull: false
        },
        library_id: {
            type: type.INTEGER,
            allowNull: false
        },
        status: {
            type: type.BOOLEAN,
            defaultValue: true
        },
    })
};