module.exports = (sequelize, DataTypes) => {
    // can keep this as JSON or on models
    //example json
    /*
      {
        a: {
          key: "ERDFDSGSE9ERe0sE0eSs4ers3",
          code: "TREE34",
          service_name: "somename",
          details: {
            database: "user",
            ...other details
          },
          api_caller_configuration: {
            method: "post",
            host: "http://localhost:2233/stores/get-one/2234325-4535-46363"
          },
          data_key: "id"
        }
      }
    */
    let Service_Facility_Association = sequelize.define("association_service_facility", {
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
      api_key: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      service_name: {
        type: DataTypes.STRING(30),
        allowNull: false
      },
      association_details: {
        type: DataTypes.JSON,
        defaultValue: {}
        /*
           {
            database: "one_app_stores",
            model: "store_data",
            key: "id",
            config: {host: "localhost", username: "so", password: "password", dialect: "mysql"}
           }
           or
           
        */
      },
      created_by: {
        type: DataTypes.STRING(30)
      }
      //store/microservice//product
    },{
        timestamps: true
    });
    return Service_Facility_Association;
}