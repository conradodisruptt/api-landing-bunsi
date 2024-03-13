const Ownerships = require("../models/ownerships.model");

exports.createOwnership = (req, res) => {
	/* for (obj in req.body.conoceMas.specs.natural.playas) {
		console.log(req.body.conoceMas.specs.natural.playas);
	} */

	const ownership_obj = new Ownerships({
		lat: req.body.lat,
		lon: req.body.lon,
		titulo: req.body.titulo,
		descripcion: req.body.descripcion,
		descripcionEn: req.body.descripcionEn,
		image: req.body.image,
		width: req.body.width,
		caracteristicas: {
			metros: req.body.caracteristicas.metros,
			habitaciones: req.body.caracteristicas.habitaciones,
			banos: req.body.caracteristicas.banos,
			precioMXN: req.body.caracteristicas.precioMXN,
			precioUSD: req.body.caracteristicas.precioUSD,
			fracciones: req.body.caracteristicas.fracciones,
			disponibles: req.body.caracteristicas.disponibles,
		},
		// carouselImages: [
		// 	req.body.carouselImages,
		// ],
		carouselImages: req.body.carouselImages && req.body.carouselImages.lenght ? req.body.carouselImages : [],
		conoceMas: {
			vision: {
				titulo: req.body.conoceMas.vision.titulo,
				image: req.body.conoceMas.vision.image
			},
			ubicacion: {
				titulo: req.body.conoceMas.ubicacion.titulo,
				image: req.body.conoceMas.ubicacion.image,
				lat: req.body.conoceMas.ubicacion.lat,
				lon: req.body.conoceMas.ubicacion.lon
			},
			planos: {
				titulo: req.body.conoceMas.planos.titulo,
				image: req.body.conoceMas.planos.image
			},
			specs: {
				titulo: req.body.conoceMas.specs.titulo,
				natural: {
					playas: req.body.conoceMas.specs.natural.playas,
					montañas: req.body.conoceMas.specs.natural.montañas
				},
				experiencias: {
					excursiones: req.body.conoceMas.specs.experiencias.excursiones,
					tour: req.body.conoceMas.specs.experiencias.tour
				},
				social: {
					restaurantes: req.body.conoceMas.specs.social.restaurantes,
					tiendas: req.body.conoceMas.specs.social.tiendas
				},
				cultura: {
					musica: req.body.conoceMas.specs.cultura.musica,
					deporte: req.body.conoceMas.specs.cultura.deporte
				},
				salud: {
					hospitales: req.body.conoceMas.specs.salud.hospitales
				},
			},
			simulador: {
				titulo: req.body.conoceMas.simulador.titulo,
				image: req.body.conoceMas.simulador.image,
				inversion: req.body.conoceMas.simulador.inversion,
				costovivienda: req.body.conoceMas.simulador.costovivienda
			}
		}
	});

	ownership_obj.save().then(doc => {
		console.log(ownership_obj);
		res.status(200);
		res.send({ "message": "Ownership created", "code": "200", "Ownership": doc });
	}).catch(err => {
		console.log("Error 😱:", err)
		res.status(500);
		res.send({ "message": "Some error ocurred while creating the Ownership.", "code": "500", "error": err });
	});
}

exports.updateOwnership = (req, res) => {
	const _id = req.params.id;
	const conoceMas = req.body.conoceMas;
	console.log('Los parámetros enviados son');
	console.log(req);
	
	const updateQuery = { _id: _id };
	// const newValues = { $set: {titulo: "Ceren 204 editado" } };
	const newValues = { $set : { conoceMas : conoceMas } };
	
	Ownerships.updateOne(updateQuery, newValues).then(doc => {
		console.log('Propiedad actualizada correctamente');
		console.log(doc);
		res.status(200);
		res.send({ "message": "Ownership updated", "code": "200", "Ownerships": doc });
	}).catch(err => {
		console.log("Error actualizando la propiedad 😱:", err)
		res.status(500);
		res.send({ "message": "An error occurred while updating the property.", "code": "500", "error": err });
	});
}

exports.getAllOwnserships = (req, res) => {
	Ownerships.find().then(doc => {
		res.status(200);
		res.send({ "message": "Recovered properties", "code": "200", "Ownerships": doc });
	}).catch(err => {
		console.log("Error 😱:", err)
		res.status(500);
		res.send({ "message": "An error occurred while getting the properties.", "code": "500", "error": err });
	});
}

exports.getOneOwnership = (req, res) => {
	const _id = req.params.id;
	console.log(_id);
	Ownerships.find({ _id: _id }).then(doc => {
		res.status(200);
		res.send({ "message": "Recovered property", "code": "200", "Ownership": doc });
	}).catch(err => {
		console.log("Error 😱:", err)
		res.status(500);
		res.send({ "message": "An error occurred while getting the property.", "code": "500", "error": err });
	});
}

exports.getOneOwnershipByTitle = (req, res) => {
	console.log('entro a getOneOwnershipByTitle');
	const title = req.body.title;
	console.log(`Título:, ${title}`);
	Ownerships.find({ titulo: title }).then(doc => {
		console.log(doc);
		res.status(200);
		res.send({ "message": "Recovered property", "code": "200", "Ownership": doc });
	}).catch(err => {
		console.log("Error 😱:", err)
		res.status(500);
		res.send({ "message": "An error occurred while getting the property.", "code": "500", "error": err });
	});
}