
module.exports = (app, handler) => {
    app.post('/facility-services/:facilityCode', (request, response)=>{ handler.getFacilityServices(request, response) });
    app.post('/sub-facilities/:facilityCode', (request, response) =>{ handler.getSubFacilities(request, response) });
    app.post('/parent-facilities', (request, response) =>{ handler.getParentFacilities(request, response)});
    app.post('/add-request', (request, response)=> {handler.addFacilityRequest(request, response);})
}