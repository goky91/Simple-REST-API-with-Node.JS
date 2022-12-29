import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

import fs from "fs";
import url from 'url';

import CONFIG from "../config/config.js";

const startServer = () => {

    const app = express();
    serverMiddlewaresInit(app);

    // defining an endpoint to return specific coin data by ID.
    app.get('/', (req, res) => {
        let queryParams = url.parse(req.url, true).query;

        if (!queryParams.id) {
            res.send( 'Wrong parameter for search. No results found.');
            return;
        }

        let data = JSON.parse( fs.readFileSync(CONFIG.COINS_DATA_CACHE_FILE) ).data;

        res.send( data.find(coin => coin.id === queryParams.id) );
    });

    app.listen(3001, () => {
        console.log('listening on port 3001');
    });
}

const serverMiddlewaresInit = (app) => {
    // adding Helmet to enhance your Rest API's security
    app.use(helmet());

    // using bodyParser to parse JSON bodies into JS objects
    app.use(bodyParser.json());

    // enabling CORS for all requests
    app.use(cors());

    // adding morgan to log HTTP requests
    app.use(morgan('combined'));
}


export default startServer;