const joi = require("joi");
const validateData = require("./middleware");
module.exports = (data, name) => {
    const validation = joi.object(validateData[name]).validate(data); 
    return validation.error;
}