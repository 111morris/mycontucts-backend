const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")

//@desc get all contacts 
//@route GET /api/contacts
//@access public 
const getContacts = asyncHandler(async (req, res) => {
 const contacts = await Contact.find();
 res.status(200).json({ contacts });
})
//@desc get contact
//@route GET /api/contacts
//@access public 
const getContact = asyncHandler(async (req, res) => {
 res.status(200).json({ message: `get all contacts` });
})


//@desc create contact 
//@route POST /api/contact
//@access public
const createContact = asyncHandler((req, res) => {
 console.log("The request body is: ", req.body);
 const { name, email, phone } = req.body;

 if (!name || !email || !phone) {
  res.status(400);
  throw new Error("please enter all the fields");
 }
 res.status(201).json({ message: "create contact" });
})

//@desc update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler((req, res) => {
 res.status(200).json({ message: `updated contact for ${req.params.id}` });
})

//@desc delete contact
//@route DELETE /api/contact/:id
//@access public 
const deleteContact = asyncHandler((req, res) => {
 res.status(200).json({ message: `deleted contact info ${req.params.id}` });
})


module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };