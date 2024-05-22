const {constants} = require('../common-class/utils');
const validate = require('../middleware');
class Controller {
    constructor(FacilityRequestService) {
        this.FacilityRequestService = FacilityRequestService;
    }
    async registerQuery (request, response) {
        try {
            const requestData = request.body;
            const validation = validate(requestData, 'CREATE_FACILITY_REQUEST');
            if( validation ) {
                return response.status(constants.CODES.VALIDATION_ERROR).send({
                    success: false,
                    message: constants.MESSAGES.VALIDATION_ERROR,
                    data:  validation
                })
            }
            requestData.association_service_code = defaultOneappKey;
            const data = await this.FacilityRequestService.create(requestData);
            return response.status(constants.CODES.SUCCESS).send({
                success: true,
                data: data,
                message: constants.MESSAGES.FACILITIES.CREATE_REQUEST_SUCCESS
            })
        }
        catch(error) {
            return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                success: false,
                error: error
            })
        }
    }
}
module.exports= Controller;