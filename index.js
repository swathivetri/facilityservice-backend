const Server = require("./common-class/server");
const port = process.env.NODE_SERVER_POST || 8050;
const host = process.env.NODE_SERVER_HOST || 'localhost';
const createModels = require('./data-handler/creation');
const config = require("config");

const ListFacility = require("./controllers/listing");
const RegisterFacilityQuery = require("./controllers/request-registration");
const express= require("express");
const Router = express.Router();
const AppRouter = require("./router");

const ListingRoute = require("./router/listing")

//const Facility = require("./controllers/facility");
//const FacilityService = require("./controllers/facility-services");
const modelService= require("./common-class/model-service");
const server =  new Server();

server.startTheServer(port, host);
server.connectData(config.database);
createModels(server.DATABASE.connection);

const Lister = new ListFacility (
    new modelService(server.DATABASE.connection.FACILITY),
    new modelService(server.DATABASE.connection.FACILITY_SERVICE)
);
const Register = new RegisterFacilityQuery (
    new modelService(server.DATABASE.connection.FACILITY_REQUEST)
);

//const FacilityRouteHandler =   FacilityRoute(Router, {FacilityManagement} );
//const FacilityserviceRouteHandler = FacilityServiceRoute(server.app,  {FacilityServiceManagement} );
  
AppRouter(
    server.app, 
    "/public", 
    ListingRoute(Router, {Lister, Register}), 
    null
);
//AppRouter(server.app, "/facility", FacilityRouteHandler, "KEY_TO_ADMIN_FACILITY");
//AppRouter(server.app, "/facility-service", FacilityserviceRouteHandler, "KEY_TO_ADMIN_FACILITY_SERVICE" )
  