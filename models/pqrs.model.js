const mongoose = require("mongoose");

const PqrsSchema = new mongoose.Schema({
	typeRecord: {
		type: String,
		required: [true, 'A row must have a type record']
	},
	phone: {
		type: String,
		required: [true, 'A row must have a code phone']
	},
	description: {
		type: String,
		required: [true, 'A row must have a description']
	},
	createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Pqrs = mongoose.model('Pqrs', PqrsSchema);

module.exports = Pqrs;