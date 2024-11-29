const express = require('express');
const axios = require('axios');
const router = express.Router();

const NEWS_API_KEY = '94c2b63ae3a3443d9c9babf15d2a7156';

router.get('/', async (req, res) => {
  const url = 'https://newsapi.org/v2/everything';
  const params = {
    q: "apple",
    from: 2024-11-29 ,// Today's date
    sortBy: 'popularity',
    apiKey: NEWS_API_KEY,
  };

  try {
    const response = await axios.get(url, { params });
    
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
