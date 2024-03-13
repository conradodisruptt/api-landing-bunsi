const mongoose = require("mongoose");

const ContactsSchema = new mongoose.Schema({
	names: {
		type: String,
		required: [true, 'A Contact must have a fullname']
	},
	phone: {
		type: String,
		required: [true, 'A Contact must have a code phone']
	},
	email: {
		type: String,
		required: [true, 'A Contact must have an email']
	},
	location: {
		type: String,
		required: [true, 'A Contact must have a location']
	},
	createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Contacts = mongoose.model('Contacts', ContactsSchema);

module.exports = Contacts;