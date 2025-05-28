//@desc get all contacts 
//@route GET /api/contacts
//@access public 
const getContacts = (req, res) => {
 res.status(200).json({ message: `get all contacts` });
}

//@desc get contact
//@route GET /api/contacts
//@access public 
const getContact = (req, res) => {
 res.status(200).json({ message: `get all contacts` });
}


//@desc create contact 
//@route POST /api/contact
//@access public
const createContact = (req, res) => {
 console.log("The request body is: ", req.body);
 res.status(201).json({ message: "create contact" });
}

//@desc update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
 res.status(200).json({ message: `updated contact for ${req.params.id}` });
}

//@desc delete contact
//@route DELETE /api/contact/:id
//@access public 
const deleteContact = (req, res) => {
 res.status(200).json({ message: `deleted contact info ${req.params.id}` });
}



module.exports = { getContacts, getContact, createContact, updateContact, deleteContact };