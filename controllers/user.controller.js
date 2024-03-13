const User = require("../models/user.model");
const nodemailer = require('nodemailer');
const globalF = require('../html/global');

exports.createUser = (req, res) => {
	const testUser = new User({
		names: req.body.names,
		last_names: req.body.last_names,
		phone_code: req.body.phone_code,
		phone: req.body.phone,
		email: req.body.email,
		password: req.body.password,
		type_id_user: req.body.type_id_user,
		id_user: req.body.id_user,
		age: req.body.age,
		aditional_information: {
			contact_method: req.body.aditional_information.contact_method,
			properties: req.body.aditional_information.properties,
			interests: req.body.aditional_information.interests,
		}
	});
	testUser.save().then(doc => {
		console.log("Save ✅:", doc);

		const emailHtml = `<!DOCTYPE html>
		<html lang="en">
		  <head>
			<meta charset="UTF-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Bunsi Mail</title>
		  </head>
		  <body>
			<h1 style="background-color: #004523; color: #ffffff; text-align: center;">
			  Nueva información de usuario
			</h1>
			<p style="text-align: center; font-size: 15px;">
			  <strong>Nombre:</strong> ${doc.names}
			</p>
			<p style="text-align: center; font-size: 15px;">
			  <strong>Apellidos:</strong> ${doc.last_names}
			</p>
			<p style="text-align: center; font-size: 15px;">
			  <strong>Teléfono:</strong> ${doc.phone_code} ${doc.phone}
			</p>
			<p style="text-align: center; font-size: 15px;">
			  <strong>Email:</strong> <a href="mailto:${doc.email}">${doc.email}</a>
			</p>
			<p style="text-align: center; font-size: 15px;">
			  <strong>Identificación:</strong> ${doc.type_id_user} | ${doc.id_user}
			</p>
			<p style="text-align: center; font-size: 15px;">
			  <strong>Edad:</strong> ${doc.age}
			</p>
			<p style="text-align: center; font-size: 15px;">
			  <strong>Metodo de contacto:</strong> ${doc.aditional_information.contact_method}
			</p>
			<p style="text-align: center; font-size: 15px;">
			  <strong>Lugares:</strong> ${doc.aditional_information.properties}
			</p>
			<p style="text-align: center; font-size: 15px;">
			  <strong>Intereses:</strong> ${doc.aditional_information.interests}
			</p>
		  </body>
		</html>`;

		const message = {
			from: "FG@bunsi.mx",
			to: "FG@bunsi.mx",
			subject: "Nuevo correo de bunsi.com",
			text: "Información de usuario",
			html: emailHtml
		};

		const transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'FG@bunsi.mx',
				pass: 'xlpuekwiqrtwywcu'
			}
		});

		transporter.sendMail(message, (error, info) => {
			if (error) {
				console.log("Error enviando email")
				console.log(error.message)
			} else {
				console.log("Email enviado")
			}
		})

		res.status(200);
		res.send({ "message": "User created", "code": "200", "User": doc });
	}).catch(err => {
		console.log("Error 😱:", err)
		res.status(500);
		res.send({ "message": "Some error ocurred while creating the User.", "code": "500", "error": err });
	});
}

exports.notifyUser = (req, res) => {
	const emailHtml = globalF.setEmailTemplate(req.body.nombre, req.body.telefono, req.body.email);
	console.log(`Esta es la petición de notify: ${req.body}`);
	
	const message = {
		from: "FG@bunsi.mx",
		to: "anton_con@hotmail.com",
		// to: "FG@bunsi.mx",
		subject: "Nuevo correo de bunsi.com",
		text: "Información de usuario",
		html: emailHtml
	};

	var transporter = nodemailer.createTransport({
		host: "sandbox.smtp.mailtrap.io",
		port: 2525,
		auth: {
			user: "58b552277fc9e4",
			pass: "0f711435df4e12"
		}
	});

	transporter.sendMail(message, (error, info) => {
		if (error) {
			console.log("Error enviando email", info);
			console.log(error.message);
		} else {
			console.log("Email enviado");
		}
	})
	console.log(`Todo salió correctamente`);

	res.status(200);
	res.send({ "message": "Mail sended", "code": "200" });
}