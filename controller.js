const {constants} = require('./common-class/utils');
const validate = require('./middleware');
class Controller {
    constructor(FacilityService, FacilityRequestService, FacilityServicesService, CategoryService) {
        this.FacilityService = FacilityService;
        this.FacilityRequestService = FacilityRequestService;
        this.FacilityServicesService = FacilityServicesService;
        this.CategoryService = CategoryService;
    }
    async getSubFacilities(request, response) {
        try {
            const {facilityCode} = request.params;
            const {requestType} = request.body;
            const data = await this.FacilityService.findAll({
              "parent_facility_code": facilityCode,
              "user_type": requestType || "customer",
            });
            return response.status(constants.CODES.SUCCESS).send({
                success: true,
                data: data
            });
        }
        catch(error) {
            return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                success: false,
                message: constants.MESSAGES.SOMETHING_WENT_WRONG,
                error: error
            });
        }
    }
    async getFacilityServices(request, response) {
        try { 
            const {facilityCode} = request.params;
            const {requestType} = request.body;
            const data = await this.FacilityServicesService.findAll( {
                "parent_facility_code": facilityCode,
                "user_type": requestType || "customer"
            });
            return response.status(constants.CODES.SUCCESS).send({
                success: true,
                data: data
            })
        }
        catch(error) {
            console.log(error)
            return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                success: false,
                error: error 
            });
        }
    }
    async getParentFacilities(request, response) {
        try {
            const {categoryCode} = request.params;
            const {requestType} = request.body;
            const data = await this.FacilityService.findAll({
               // "category_code": categoryCode,
                "parent_facility_code": null,
                "is_sub_facility": false,
                "user_type": requestType || "customer",
            });
            return response.status(constants.CODES.SUCCESS).send({
                success: true,
                data: data
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
    async addFacility(request, response) {
        try {
            const requestData = request.body;
            if(request.user){ 
              requestData.created_by = user.userId;
            }
            requestData.code = requestData.name.split(" ").join("_").toUpperCase() + "_" + ( requestData.user_type == "customer" ?"CUS_" : "BUS_" ) + Math.round(Math.random()* 10000)
            const data = await this.FacilityService.create(requestData);
            return response.status(constants.CODES.SUCCESS).send({
                success: true,
                data: data,
                message: "Created Facility successfully."
            })
        }
        catch(error) {
            return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                success: false,
                error: error
            })
        }
    }
    async addFacilityService(request, response) {
        try {
            const requestData = request.body;
            if(request.user){
              const user = request.user;
              requestData.created_by = user.userId;
            }
            requestData.code = requestData.name.split(" ").join("_").toUpperCase() + "_" + Math.round(Math.random()* 10000)
            const data = await this.FacilityServicesService.create(requestData);
            return response.status(constants.CODES.SUCCESS).send({
                success: true,
                data: data,
                message: "Created Facility Service successfully."
            })
        }
        catch(error) {
            return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                success: false,
                error: error
            })
        }
    }
    async addFacilityRequest(request, response) {
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
            const FacilityService = await this.FacilityServicesService.findOneByCond({code: requestData.service_code});
            if(!FacilityService) {
                return response.status(constants.CODES.SOMETHING_WENT_WRONG).send({
                    success: false,
                    message: "Facility Service code not found"
                })
            }
            requestData.facility_code = FacilityService.parent_facility_code;
            const data = await this.FacilityRequestService.create(requestData);
            return response.status(constants.CODES.SUCCESS).send({
                success: true,
                data: data,
                message: "Created Facility Request successfully."
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
module.exports = Controller;