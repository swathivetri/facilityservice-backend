const {constants} = require('../common-class/utils');
const defaultOneappKey = "OneApp"
class ListingController {
    constructor(FacilityService, FacilityServicesService) {
        this.FacilityService = FacilityService;
        this.FacilityServicesService = FacilityServicesService;
    }

    async getParentFacilities(request, response) {
        try {
            const {requestType} = request.body;
            const data = await this.FacilityService.findAll({
                association_service_code:  request.query.api_key  || defaultOneappKey,
                parent_facility_code: null,
                user_type: requestType || "customer",
            });
            return response.status(constants.CODES.SUCCESS).send({
                success: true,
                data: data,
                message: constants.MESSAGES.FACILITIES.LIST_PARENTS_SUCCESS
            })
        }
        catch(error) {
            console.log(error)
            return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                success: false,
                error: error
            })
        }
    }

    async getSubFacilities(request, response) {
        try {
            const {parentFacilityCode} = request.params;
            const {requestType} = request.body;
            const facility = await this.FacilityService.findOneByCond({code: parentFacilityCode});
            if(!facility) {
                return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                    success: false,
                    message: constants.MESSAGES.FACILITIES.PARENT_FACILITY_NOT_FOUND
                })
            }
            const data = await this.FacilityService.findAll({
              parent_facility_code: parentFacilityCode,
              user_type: requestType || "customer",
              association_service_code: request.query.api_key  || defaultOneappKey
            });
            return response.status(constants.CODES.SUCCESS).send({
                success: true,
                data: data,
                message: constants.MESSAGES.FACILITIES.LIST_FACILITIES_SUCCESS
            });
        }
        catch(error) {
            console.log(error)
            return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                success: false,
                message: constants.MESSAGES.SOMETHING_WENT_WRONG,
                error: error
            });
        }
    }

    async getFacilityServices(request, response) {
        try { 
            const {parentFacilityCode} = request.params;
            const {requestType} = request.body;
            const facility = await this.FacilityService.findOneByCond({code: parentFacilityCode});
            if(!facility) {
                return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                    success: false,
                    message: constants.MESSAGES.FACILITIES.PARENT_FACILITY_NOT_FOUND
                })
            }
            const data = await this.FacilityServicesService.findAll({
                parent_facility_code: parentFacilityCode,
                user_type: requestType || "customer",
                association_service_code: request.query.api_key  || defaultOneappKey
            });
            return response.status(constants.CODES.SUCCESS).send({
                success: true,
                message: constants.MESSAGES.FACILITIES.LIST_SERVICE_SUCCESS,
                data: data
            })
        }
        catch(error) {
            return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                success: false,
                message: constants.MESSAGES.SOMETHING_WENT_WRONG,
                error: error 
            });
        }
    }
    
}
module.exports = ListingController;
