const Pqrs = require("../models/pqrs.model");
const globalF = require('../html/global');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/**
 * Find or register a user record from the whatsapp bot
 * @param {JSON} req 
 * @param {*} res 
 */
exports.registerPqrsFromBot = (req, res) => {
    // Procede a registrarse nuevo pqrso
    const newPqrs = new Pqrs({
        typeRecord: req.body.typeRecord,
        phone: req.body.phone ?? 'N/A',
        description: req.body.description,
    });
    newPqrs.save().then(resNew => {
        res.status(200);
        res.send({ "message": "Registro creado exitósamente", "code": "200", "pqrs": resNew });
        // Aquí va el return true
    }).catch(err => {
            console.log("Error 😱:", err)
            res.status(500);
            res.send({ "message": "Some error ocurred while creating the Pqrs.", "code": "500", "error": err });
    });
}
