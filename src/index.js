'use strict'

import axios from 'axios'

exports.handler = async function index(event, context, callback) {
    let newsSource = "cnn";
    let url = `https://newsapi.org/v1/articles?source=${newsSource}&sortBy=top&apiKey=${process.env.NEWS_API_KEY}`;
    let response = await axios.get(url);
    let articles = response.data.articles;
    let filtered = articles.filter(item => item.url.indexOf("politics") !== -1);
    callback(null, filtered);
};