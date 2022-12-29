import https from 'https';
import fs from 'fs';
import CONFIG from "../config/config.js";


/*
* @return void
* */
const generateCacheFromApi = () => {

    console.log("Generating new cache file...");

    const OPTIONS = {
        ...CONFIG.COIN_CAP_API_CREDENTIALS,
        method: 'GET'
    };

    const REQ = https.request(OPTIONS, (res) => {
        console.log("Status Code: ", res.statusCode);
        console.log("Headers: ", res.headers);

        let response = '';

        res.on('data', (rawData) => {
            response += rawData.toString();
        });

        res.on('end', () => {
            emptyJSONFile();
            fs.writeFileSync(CONFIG.COINS_DATA_CACHE_FILE, response);
        });
    });

    REQ.end();

    REQ.on('error', function(e) {
        console.error(e);
    });
}

const emptyJSONFile = () => {
    fs.open(CONFIG.COINS_DATA_CACHE_FILE, 'w', (err, file) => {
        if (err) throw err;
        console.log('File is created.')
    })
};

export default generateCacheFromApi;
