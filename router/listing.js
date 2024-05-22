module.exports = (app, {Lister, Register}) => {
    app.post('/facility-services/:parentFacilityCode', (request, response)=>{ Lister.getFacilityServices(request, response) });
    app.post('/sub-facilities/:parentFacilityCode', (request, response) =>{ Lister.getSubFacilities(request, response) });
    app.post('/parent-facilities', (request, response) =>{ Lister.getParentFacilities(request, response) });
    app.post('/add-request', (request, response)=> { Register.addFacilityRequest(request, response); })
    return app;
}