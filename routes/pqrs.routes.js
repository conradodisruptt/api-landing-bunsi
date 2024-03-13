const url = "/api/mongo";

module.exports = app => {
	const pqrs = require("../controllers/pqrs.controller.js");

	app.post(`${url}/pqrs/whatsapp-bot/register`, pqrs.registerPqrsFromBot);
};