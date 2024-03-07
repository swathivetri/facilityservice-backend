const {checkJWTisExpired} = require('./utilities');
const {validateServiceHost} = require('./services');
const verifyService = async( requestorServiceData, targetServiceUrl) =>{
    try {
        if(checkJWTisExpired(requestorServiceData.token)) {
            return false
        }
        
    }
    catch(error){
        throw error;
    }
}