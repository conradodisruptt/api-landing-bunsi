const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();
dotenv.config({ path: './config.env' });
app.use(cors());
let DB = process.env.DATABASE_BUNSI.replace('<PASSWORD>', process.env.PASWWORD_DATABASE_BUNSI);
DB = DB.replace('<USER>', process.env.USER_DATABSE_BUNSI);
console.log(DB);
//CONEXION DB EN MONGO ATLAS
/* mongoose.connect(DB, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
}).then(() => console.log("Conexion exitosa de mongo en linea")); */

//CONEXION EN MONGO LOCAL
/* mongoose.connect(process.env.DATABASE_LOCAL, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
}).then(() => console.log("Conexion exitosa de mongo")); */

//CONEXION EN MONGO BUNSI
mongoose.connect(DB, {
	useNewUrlParser: true,
	useCreateIndex: true,
	useFindAndModify: false,
	useUnifiedTopology: true
}).then(() => console.log("Conexion exitosa de mongo en linea"));

//1)MIDDLEWARES
app.use(morgan('common'));
app.use(express.json());
app.use((req, res, next) => {
	console.log('Hello from the middleware');
	next();
});

//3) ROUTES
app.get("/", (req, res) => {
	//res.status(404);
	res.json({ message: "Welcome to Bunsi API." });
});

require("./routes/users.routes")(app);
require("./routes/ownerships.routes")(app);
require("./routes/contacts.routes")(app);
require("./routes/pqrs.routes")(app);


//4) START SERVER
app.set('port', process.env.PORT || 3100);
// set port, listen for requests
app.listen(app.get('port'), () => {
	console.log(`Server is running on port ${app.get('port')}`);
});