module.exports = (app, basePath, handler, middlewareKey) =>{ 
    console.log(handler)
  app.use(
    basePath, 
    (request, response, next) => {
        if(middlewareKey){ 
            if(!request.user){
                return response.status(response.UNAUTHORISED.statusCode).send(response.UNAUTHORISED)
            }
            if(!request.user.accessKeys || !request.user.accessKeys.includes(middlewareKey)){
                return response.status(response.UNAUTHORISED.statusCode).send(response.UNAUTHORISED)
            }
        }
        next();
    },
    handler
  );
}