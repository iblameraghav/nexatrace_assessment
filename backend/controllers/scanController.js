const axios = require('axios');
const Scan = require('../models/Scan');
const { VIRUS_TOTAL_API_KEY } = require('../config/jwtConfig');

// Submit URL for malware scanning
const submitURL = async (req, res) => {
  const { url } = req.body;
  try {
    const response = await axios.post(
      `https://www.virustotal.com/api/v3/urls`,
      { url },
      {
        headers: {
          'x-apikey': VIRUS_TOTAL_API_KEY,
        },
      }
    );

    const scanResult = new Scan({
      url,
      result: response.data.data.attributes.last_analysis_stats,
      user: req.user.id,
    });

    await scanResult.save();
    res.status(200).json({ message: 'URL scanned successfully', data: scanResult });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error scanning URL' });
  }
};

// Get scan history for the logged-in user
const getScanHistory = async (req, res) => {
  try {
    const scans = await Scan.find({ user: req.user.id });
    res.status(200).json(scans);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching scan history' });
  }
};

module.exports = { submitURL, getScanHistory };
