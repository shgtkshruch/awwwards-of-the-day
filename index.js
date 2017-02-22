const client = require('cheerio-httpcli');
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

        result.push(item);
      });
      resolve(result);
    });
  });
};
