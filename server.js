const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbconnection");
const errorHandler = require('./middleware/errorHandler');

connectDb();

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactroute"));
app.use(errorHandler);

app.listen(port, () => {
    console.log('Server running on port:' + port);
});