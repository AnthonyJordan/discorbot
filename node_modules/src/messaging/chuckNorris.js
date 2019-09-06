const axios = require('axios');

let chuckNorrisFacts = function () {
    return promise = new Promise(function (resolve, reject) {
        axios.get("\t\n" +
            "http://api.icndb.com/jokes/random").then(response => {
            resolve(response.data.value.joke);
        }).catch(error => {
            console.log(error);
            reject( "Chuck Norris jokes seems to have broken. :(")
        });
    });
};

module.exports = chuckNorrisFacts;