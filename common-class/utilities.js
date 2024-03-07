const jwt = require("jsonwebtoken");
const axios = require("axios");

const checkJWTisExpired = (token) => {
  const decoded = jwt.decode(token);
  const Date = new Date();
  if(!decoded.exp) {
    return false
  }
  return decoded.exp > Date.getTime()/1000;
};
const axiosResponseInterceptor = (response) => {
  return { success: true, status: response.status, data:response.data };
  //return response;
};
const axiosResponseErrorInterceptor = (error) => {
  console.log(error);
  return { success: false, status: error.response.status, error: error.reponse.data };
  //return Promise.reject(error);
};
const Axios = (responseInterceptor = axiosResponseInterceptor , responseErrorInterceptor = axiosResponseErrorInterceptor, function2, function3) => {
  axios.interceptors.request.use(function2, function3);
  axios.interceptors.response.use(responseInterceptor, responseErrorInterceptor);
  return axios;
};
module.exports = {
  checkJWTisExpired,
  Axios
}
