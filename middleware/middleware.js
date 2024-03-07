const joi = require("joi");
const data = {
    CREATE_FACILITY_REQUEST: {
        service_code: joi.string().required(),
        first_name: joi.string().required(),
        last_name: joi.string().required(),
        phone: joi.string().required(),
        email: joi.string().required(),
        state: joi.string().required(),
        postcode: joi.string().required(),
        suburb: joi.string().required(),
        complete_address: joi.string().required(),
        query: joi.string().required()
    }
}
module.exports = data;
