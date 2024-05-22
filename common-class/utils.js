module.exports = {
    constants : {
        CODES: {
            SUCCESS: 200,
            SOMETHING_WENT_WRONG: 400,
            VALIDATION_ERROR: 403,
            UNAUTHORISED: 401,
            NOT_FOUND: 404,
            CREATED: 201,
            CONFLICT: 409,
            PRECONDITION_FAILED: 412
        },
        MESSAGES: {
            SUCCESS: 'successful',
            SOMETHING_WENT_WRONG: 'Something went wrong.',
            VALIDATION_ERROR: 'Validation Error',
            UNAUTHORISED: 'Unauthorised access',
            NOT_FOUND: "Resource not found",
            CREATED: "Created successfully.",
            CONFLICT: "conflicting",
            PRECONDITION_FAILED: "Precondition failed",
            FACILITIES: {
                CREATED_SUCCESS: 'Facility Created Successfully.',
                UPDATED_SUCCESS: 'Facility updated Successfully.',
                UPDATE_FAILURE: 'Facility could not be updated.',
                DELETED_SUCCESS: 'Facility updated Successfully.',
                DELETE_FAILURE: 'Facility could not be deleted.',
                PARENT_FACILITY_NOT_FOUND: 'Parent Facility Code not found.',
                LIST_PARENTS_SUCCESS: 'Fecthed parent facilities successfully.',
                LIST_FACILITIES_SUCCESS: 'Fecthed facilities successfully.',
                LIST_SERVICE_SUCCESS: 'Fectched the Facilities-Services successfully.',
                CREATE_REQUEST_SUCCESS: 'Created Facility Request successfully.'
            }
        }
    }
}
