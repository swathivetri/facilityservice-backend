module.exports = (Sequelize, DataTypes) => {
    let categories = Sequelize.define("categories", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: true
        },
        code: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_by: {
            type: DataTypes.UUID,
            allowNull: true
        },
        updated_by: {
            type: DataTypes.UUID,
            allowNull: true
        }
    }, {
        timestamps: true,
        indexes: [
            {
              unique: true,
              fields: ['code']
            }
        ]
    });
    return categories;
}