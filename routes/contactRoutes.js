const express = require("express");
const { getContact, createContact, updateContact, deleteContact, getContacts } = require("../controllers/contactController");

const router = express.Router();

//get
//post
//delete
//put (update)

//common properties 
//req.url => the url being requested
//req.method => the http method(get, post ets)
//req.params => route parameters(/user/:id)
//req.query => query string parameter(?name=morris)
//req.body => body of a post/put request(usually parsed via middleware like express.js)

router.route("/").get(getContacts).post(createContact);
router.route("/:id").put(updateContact).delete(deleteContact).get(getContact);


module.exports = router;