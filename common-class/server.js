const express = require("express");
const http = require("http");
const DataHandler = require("./data-handler");

class Server {
  constructor() {
      this.app = express();    
      this.app.use(express.json({ limit: '50mb' }));
      this.http = http.Server(this.app);
  }
  
  startTheServer(port, host) {
      this.http.listen(port, host, () => {
        console.log(`Listening on http://${host}:${port}`);
      });
  }
  
  connectData(config) {
      this.DATABASE = new DataHandler(config);
      this.DATABASE.authenticate().then(x => {            
      }).catch(e => {
          console.log("something wrong in connecting db!", e);
      })
  }
}
  module.exports= Server;
