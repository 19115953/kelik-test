const fetch = require('node-fetch');

const haehistoriatiedot = (id, callback) => {
    const url = 'https://tie.digitraffic.fi/api/v2/data/camera-history/history?id=' + id;
    fetch(url)
        .then(res => res.json())
        .then(body => {
            callback(undefined, {
                cameraPresets: body[0].cameraHistory
            });
        })
        .catch(err => {
            //console.log(err);
        });
}

module.exports = haehistoriatiedot;