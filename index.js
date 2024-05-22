const Server = require("./common-class/server");
const port = process.env.NODE_SERVER_POST || 8050;
const host = process.env.NODE_SERVER_HOST || 'localhost';
const createModels = require('./data-handler/creation');
const config = require("config");
const cors = require("cors");
const logger = require('morgan');
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
server.makeStatic("/src", "public/uploads")
server.app.use(cors());
server.app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
server.app.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.app.get("/", (req, res) => {
    res.json({ message: "Welcome to ALERT api service." });
});
server.app.use(logger('combined'));


server.connectData(config.database);
createModels(server.DATABASE.connection);

const Lister = new ListFacility (
    new modelService(server.DATABASE.connection.FACILITY),
    new modelService(server.DATABASE.connection.FACILITY_SERVICE)
);
const Register = new RegisterFacilityQuery(
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
  