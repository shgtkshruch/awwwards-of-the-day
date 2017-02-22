'use strict';

const client = require('cheerio-httpcli');
const chrono = require('chrono-node');

const URL = 'https://www.awwwards.com/awards-of-the-day/';

module.exports = () => {
  return new Promise((resolve, reject) => {
    const result = [];
    client.fetch(URL, (err, $, res, body) => {
      if (err) {
        reject(err);
      }

      $('.box-item').each(function (i) {
        const item = {};

        item.index = i;
        item.title = $(this).find('.content h3').text();
        item.img = $(this).find('.site img').attr('data-src');
        item.link = $(this).find('.bt-link').attr('href');

        const date = $(this).find('.content > .row:nth-child(3)').text();
        item.date = chrono.parse(date)[0].text;

        result.push(item);
      });
      resolve(result);
    });
  });
};
