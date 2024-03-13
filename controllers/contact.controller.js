const Contact = require("../models/contact.model");
const nodemailer = require('nodemailer');
const globalF = require('../html/global');

/**
 * Find or register a user record from the whatsapp bot
 * @param {JSON} req 
 * @param {*} res 
 */
exports.registerContactFromBot = (req, res) => {
	// Find record from email
	const email = req.body.email;
	// console.log(`Email: ${email}`);
	Contact.find({ email: email }).then(userResp => {
		console.log(`Respuesta de servicio de registro: ${userResp}`);
		if ( userResp.length ) {
			// El contacto ya ha sido registrado previamente 
			res.status(200);
			res.send({ "message": "Contacto encontrado exitósamente", "code": "200", "contact": userResp[0] });
		} else {
			// Procede a registrarse nuevo contacto
			const newContact = new Contact({
				names: req.body.name,
				phone: req.body.phone ?? 'N/A',
				email: req.body.email,
				location: req.body.location ?? 'N/A',
			});
			newContact.save().then(resNew => {
                res.status(200);
			    res.send({ "message": "Contacto creado exitósamente", "code": "200", "contact": resNew });
				// Aquí va el return true
			}).catch(err => {
					console.log("Error 😱:", err)
					res.status(500);
					res.send({ "message": "Some error ocurred while creating the Contact.", "code": "500", "error": err });
			});
		}
	}).catch(err => {
		console.log("Error 😱:", err);
		res.status(500);
		res.send({ "message": "Ocurrió un error buscando el cliente.", "code": "500", "error": err });
	});
}
