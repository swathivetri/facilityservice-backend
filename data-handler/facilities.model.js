module.exports = (sequelize, DataTypes) => {
    let Facilities = sequelize.define("facilities", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      code: {
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true
      },
      parent_facility_code: {
        type: DataTypes.STRING(40),
        allowNull: true
      },
      is_sub_facility: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      },
      user_type: {
        type: DataTypes.ENUM("customer","business"),
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      display_name: {
        type: DataTypes.STRING(50),
        defaultValue: "",
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
      association_service_code: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
      is_block:  { type: DataTypes.BOOLEAN, defaultValue: false },
      thumbnail: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      category_code: {
        type: DataTypes.STRING(40),
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