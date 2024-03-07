module.exports = (sequelize, DataTypes) => {
    let Facilities = sequelize.define("facility_services", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      code: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      parent_facility_code: {
        type: DataTypes.STRING(40),
        allowNull: false,
        references: {
            "model": "facilities",
            "key": "code"
        }
      },
      user_type: {
        type: DataTypes.ENUM("customer","business"),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      icon: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      thumbnail: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      category_code: {
        type: DataTypes.STRING(40),
        references: {
            "model": "categories",
            "key": "code"
        },
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
  },
  {
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['code']
      }
  ]
  });
  return Facilities;
};