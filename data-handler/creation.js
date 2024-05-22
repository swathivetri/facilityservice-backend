const Facilities = require("./facilities.model");
const Facility_request = require("./facility_request.model");
const Facility_services = require("./facility_services.model");
const Categories = require("./category.model");
const Sequelize = require("sequelize");
module.exports = (connection)=> {
  connection.sync({ force: false, alter: false })
  connection.FACILITY = Facilities(connection, Sequelize.DataTypes);
  connection.FACILITY_REQUEST = Facility_request(connection, Sequelize.DataTypes);
  connection.FACILITY_SERVICE = Facility_services(connection, Sequelize.DataTypes);
  connection.CATEGORY = Categories(connection, Sequelize.DataTypes);
  connection.FACILITY.hasMany(connection.FACILITY, {sourceKey: 'code', foreignKey: "parent_facility_code", as:"children"});
  connection.FACILITY.belongsTo( connection.FACILITY, {targetKey: 'code', foreignKey: "parent_facility_code", as: "parent"});
}
