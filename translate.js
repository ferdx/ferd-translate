var request = require('request');

module.exports = function(ferd) {

  ferd.listen(/ferd translate (.*)/i, function(response) {
    var text = response.match[1];
    var url = 'https://translate.yandex.net/api/v1.5/tr.json/translate?key='+ process.env.TRANSLATE +'&lang=en&text=' + text + '&options=1';

    request(url, function (error, responser, body) {
      var result = JSON.parse(body);
      response.send(result.text[0]);
    });

  });

};
