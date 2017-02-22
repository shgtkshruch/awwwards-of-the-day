const client = require('cheerio-httpcli');
const URL = 'https://www.awwwards.com/awards-of-the-day/';

module.exports = cb => {
  const result = [];
  client.fetch(URL, (err, $, res, body) => {
    $('.box-item').each(function (i) {
      const item = {};

      item.index = i;
      item.title = $(this).find('.content h3').text();
      item.img = $(this).find('.site img').attr('data-src');

      result.push(item);
    });
    cb(result);
  });
};
