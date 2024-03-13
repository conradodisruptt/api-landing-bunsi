const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
	names: {
		type: String,
		required: [true, 'A User must have a name']
	},
	last_names: {
		type: String,
		required: [true, 'A User must have a last name']
	},
	phone_code: {
		type: String,
		required: [true, 'A User must have a code phone']
	},
	phone: {
		type: Number,
		required: [true, 'A User must have a number phone']
	},
	email: {
		type: String,
		required: [true, 'A User must have a email']
	},
	password: {
		type: String
	},
	type_id_user: {
		type: String,
	},
	id_user: {
		type: String,
	},
	age: {
		type: String,
	},
	aditional_information: {
		contact_method: {
			type: String,
		},
		properties: {
			type: Object
		},
		interests: {
			type: Object
		}
	}
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;