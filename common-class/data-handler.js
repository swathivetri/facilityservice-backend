const Sequelize = require("sequelize");

 class DataHandler {
    authenticate() {
        return this.connection.authenticate();
    }

    constructor(config) {
      this.status = false;
      this.connection = new Sequelize(config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect,
        logging: false,
        define: {
          timestamps: false
        },
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
      });
    }
}
module.exports = DataHandler;