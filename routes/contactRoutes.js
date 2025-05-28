const express = require("express");

const router = express.Router();


//get
//post
//delete
//put (update)
router.route("/").get((req, res) => {
 res.status(200).json({ message: "get all contacts" });
 
});

router.route("/").post((req, res) => {
 res.status(200).json({ message: "create contact" });
})

router.route("/:id").put((req, res) => {
 res.status(200).json({ message: `Update contact for ${req.params.id} and this is the url ${req.url}` });
})

//common properties 
//req.url => the url being requested
//req.method => the http method(get, post ets)
//req.params => route parameters(/user/:id)
//req.query => query string parameter(?name=morris)
//req.body => body of a post/put request(usually parsed via middleware like express.js)

router.route("/:id").delete((req, res) => {
 res.status(200).json({ message: `deleted contact info ${req.params.id}` });
})

//route for get individual contact 
router.route("/:id").get((req, res) => {
 res.status(200).json({ message: `Delete contact for ${req.params.id}` });
})
module.exports = router;