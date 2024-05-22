const express = require("express");
const http = require("http");
const DataHandler = require("./data-handler");

class Server {
  constructor() {
      this.app = express();    
      this.app.use(express.json({ limit: '50mb' }));
      //this.http = http.Server(this.app);
  }
  
  startTheServer(port, host) {
      this.app.listen(port, host, () => {
        console.log(`Listening on http://${host}:${port}`);
      });
  }
  makeStatic(url, folder ){
    this.app.use(url, express.static(folder));
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
