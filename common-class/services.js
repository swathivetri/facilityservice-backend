const {constants} = require("./utils");
const axios = require("axios");
const serviceMiddleware = async(request, response, next) => {
  try {
    let service =  await getServiceDetails(request.headers.host);
    if ( !service ) {
      //
      next();
    }
    request.service = service
    next();
  }
  catch(error) {
    return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
      success: false,
      error: error
    })
  }
}
const userMiddleware = async(request, response, next) => {
  try {
    const headers = request.headers.authorization;
    console.log(request.service)
    if(! headers) {
      //
      next();
    }
    else {
      request.user = await getUserDetailsWithToken(request.service.realmName,
      request.clientId, headers.split(" ")[1]);
      next();
    }
  }
  catch(error) {
    return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
      success: false,
      message: "unauthorised"
    })
  }
}
const getServiceDetails = async(serviceHost) => {
  try {
    const serviceDetails =  await axios.post("http://localhost:8048/get-microservice", { serviceUrl: serviceHost });
    if(!serviceDetails.success) {return null;}
    return serviceDetails.data;
  }
  catch(error) {
    console.log(error)
    throw error;
  }
}
const getServicesList = async() => {
  try {
    const services = axios.post("http://localhost:8048/services", {});
    return services;
  }
  catch(error) {
    throw error;
  }
}
const getUserDetailsWithToken = async( realm, id, token ) => {
  try {
    let userData =  await axios.post(`http://localhost:8041/user-details/${realm}/${id}`, {
      token: token
    });
    return userData.data;
  }
  catch(error) {
    throw error;
  }
}

module.exports = {
  serviceMiddleware,
  list: getServicesList(),
  userMiddleware
}