const url = "/api/mongo";

module.exports = app => {
	const ownership = require("../controllers/ownership.controller.js");

	app.post(`${url}/ownership/new`, ownership.createOwnership);
	app.put(`${url}/ownership/:id`, ownership.updateOwnership);
	app.get(`${url}/ownerships`, ownership.getAllOwnserships);
	app.get(`${url}/ownerships/:id`, ownership.getOneOwnership);
	app.post(`${url}/ownerships`, ownership.getOneOwnershipByTitle);
};