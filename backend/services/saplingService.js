const axios = require('axios');
const { SAPLING_API_KEY } = require('../config/jwtConfig');

const checkText = async (text) => {
  try {
    const response = await axios.post(
      'https://api.sapling.ai/v1/check',
      { text },
      {
        headers: {
          Authorization: `Bearer ${SAPLING_API_KEY}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Sapling API error:', error);
    throw new Error('Error checking text');
  }
};

module.exports = { checkText };
