const express = require("express");
const { getContacts, createContacts } = require("../controller/contactcontroller");
const router = express.Router();

router.route("/").get(getContacts).post(createContacts);

module.exports = router;