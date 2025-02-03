const Text = require('../models/Text');
const { checkText } = require('../services/saplingService');

// Submit text for grammar/spell checking
const submitText = async (req, res) => {
  const { text } = req.body;

  try {
    const response = await checkText(text);
    const correction = response.corrections;  // Assuming Sapling returns corrections in this format

    const newText = new Text({
      originalText: text,
      corrections: correction,
      user: req.user.id,
    });

    await newText.save();
    res.status(200).json({ message: 'Text checked successfully', data: newText });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error checking text' });
  }
};

// Get text submission history for the logged-in user
const getTextHistory = async (req, res) => {
  try {
    const texts = await Text.find({ user: req.user.id });
    res.status(200).json(texts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching text history' });
  }
};

module.exports = { submitText, getTextHistory };
