const url = "/api/mongo";

module.exports = app => {
	const user = require("../controllers/user.controller.js");

	app.post(`${url}/user/new`, user.createUser);
	app.post(`${url}/user/notify`, user.notifyUser);
};