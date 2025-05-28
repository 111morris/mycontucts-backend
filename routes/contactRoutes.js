const express = require("express");
const { getContact } = require("../controllers/contactController");

const router = express.Router();


//get
//post
//delete
//put (update)
router.route("/").get(getContact);

router.route("/").post()

router.route("/:id").put()

//common properties 
//req.url => the url being requested
//req.method => the http method(get, post ets)
//req.params => route parameters(/user/:id)
//req.query => query string parameter(?name=morris)
//req.body => body of a post/put request(usually parsed via middleware like express.js)

router.route("/:id").delete()

//route for get individual contact 
router.route("/:id").get((req, res) => {
 res.status(200).json({ message: `Delete contact for ${req.params.id}` });
})
module.exports = router;