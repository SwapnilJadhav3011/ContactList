 const express = require("express");

 const router = express.Router();

const { getAllContacts, getAllContactsTesting } = require("../controllers/contacts");



router.route("/").get(getAllContacts);
router.route("/testing").get(getAllContactsTesting);


 module.exports = router;