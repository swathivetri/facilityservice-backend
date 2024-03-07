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
            USERS: {
                CREATED_SUCCESS: 'User Created Successfully.',
                UPDATED_SUCCESS: 'User updated Successfully.',
                UPDATE_FAILURE: 'User could not be updated.',
                DELETED_SUCCESS: 'User updated Successfully.',
                DELETE_FAILURE: 'User could not be updated.',
                LOGIN_SUCCESS: 'User logged in Successfully.',
                NOT_FOUND: 'User not found.',
                INCORRECT_PASSWORD: 'Incorrect password'
            }
        }
    }
}
