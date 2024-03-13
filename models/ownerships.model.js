const mongoose = require("mongoose");

const OwnershipSchema = new mongoose.Schema({
	lat: {
		type: Number,
		required: [true, 'A User must have a name']
	},
	lon: {
		type: Number,
		required: [true, 'A User must have a last name']
	},
	titulo: {
		type: String,
		required: [true, 'A User must have a number phone']
	},
	descripcion: {
		type: String,
		required: [true, 'A User must have a email']
	},
	descripcionEn: {
		type: String,
		required: [true, 'A User must have a password']
	},
	image: {
		type: String,
		required: [true, 'A User must have a email']
	},
	width: {
		type: String,
		required: [true, 'A User must have a password']
	},
	caracteristicas: {
		metros: {
			type: String,
			required: [true, 'A User must have a password']
		},
		habitaciones: {
			type: String,
			required: [true, 'A User must have a password']
		},
		banos: {
			type: String,
			required: [true, 'A User must have a password']
		},
		precioMXN: {
			type: Number,
			required: [true, 'A User must have a password']
		},
		precioUSD: {
			type: String,
			required: [true, 'A User must have a password']
		},
		fracciones: {
			type: String,
			required: [true, 'A User must have a password']
		},
		disponibles: {
			type: String,
			required: [true, 'A User must have a password']
		}
	},
	carouselImages: {
		type: Object
	},
	conoceMas: {
		vision: {
			titulo: {
				type: String
			},
			image: {
				type: String
			}
		},
		ubicacion: {
			titulo: { type: String },
			image: { type: String },
			lat: { type: Number },
			lon: { type: Number }
		},
		planos: {
			titulo: { type: String },
			image: { type: String }
		},
		specs: {
			titulo: { type: String },
			natural: {
				playas: [{
					nombre: { type: String },
					kilometros: { type: String }
				}],
				montañas: [{
					nombre: { type: String },
					kilometros: { type: String }
				}],
			},
			experiencias: {
				excursiones: [{
					nombre: { type: String }
				}],
				tour: [{
					nombre: { type: String }
				}]
			},
			social: {
				restaurantes: [{
					nombre: { type: String }
				}],
				tiendas: [{
					nombre: { type: String },
					kilometros: { type: String }
				}],
			},
			experiencias: {
				excursiones: [{
					nombre: { type: String }
				}],
				tour: [{
					nombre: { type: String }
				}]
			},
			cultura: {
				musica: [{
					nombre: { type: String }
				}],
				deporte: [{
					nombre: { type: String }
				}],
			},
			salud: {
				hospitales: [{
					nombre: { type: String }
				}]
			}
		},
		simulador: {
			titulo: { type: String },
			image: { type: String },
			inversion: { type: Number },
			costovivienda: { type: Number }
		}
	}
})

const Ownerships = mongoose.model('Ownerships', OwnershipSchema);

module.exports = Ownerships;