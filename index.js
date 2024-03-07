const Server = require("./common-class/server");
const Routes = require('./router/routes');
const port = process.env.NODE_SERVER_POST || 8050;
const host = process.env.NODE_SERVER_HOST || 'localhost';
const createModels = require('./data-handler/creation');
const config = require("config");
const controller = require('./controller');
const modelService= require("./common-class/model-service");
const server =  new Server();

server.startTheServer(port, host);
server.connectData(config.database);
createModels(server.DATABASE.connection);
Routes(server.app,  
    new controller (
        new modelService(server.DATABASE.connection.FACILITY),
        new modelService(server.DATABASE.connection.FACILITY_REQUEST),
        new modelService(server.DATABASE.connection.FACILITY_SERVICE),
        new modelService(server.DATABASE.connection.CATEGORY)
    )
);