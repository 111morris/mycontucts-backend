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
 const contact = await Contact.findById(req.params.id);
 if (!contact) {
  res.status(404);
  throw new Error("Contact not found");
 }
 res.status(200).json(contact);
})


//@desc create contact 
//@route POST /api/contact
//@access public
const createContact = asyncHandler(async (req, res) => {
 console.log("The request body is: ", req.body);
 const { name, email, phone } = req.body;

 if (!name || !email || !phone) {
  res.status(400);
  throw new Error("please enter all the fields");
 }
 const contact = await Contact.create({
  name, 
  email, 
  phone,
 })
 res.status(201).json(contact);
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