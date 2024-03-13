const url = "/api/mongo";

module.exports = app => {
	const contact = require("../controllers/contact.controller.js");

	app.post(`${url}/contact/whatsapp-bot/register`, contact.registerContactFromBot);
};