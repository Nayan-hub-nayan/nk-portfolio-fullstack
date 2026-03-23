const contactModel = require("../models/contact-model.js");
const { validateContact }= require("../validation/contact-validate.js");


const EmailSend = async (req, res) => {
  try {
    const msg = req.body;

    const validationResult = validateContact(msg);
    if (!validationResult.success) {
      return res.status(400).json({
        msg: "Validation failed",
        error: validationResult.error,
        success: false
      });
    }

    const { name, email, number, message } = msg;
    const newContact = await contactModel.create({ name, email, number, message });

    res.status(200).json({
      success: true,
      msg: "Message sent successfully",
      contact: newContact
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
};

const contactDetails = async(req, res) => {
  try {
  const contacts = await contactModel.find()
  res.json({success: true, data: contacts});
  } catch (error) {
    res.status(500).json({ msg: "Server error" });
    console.error(error);
  }
}

module.exports = { EmailSend, contactDetails };