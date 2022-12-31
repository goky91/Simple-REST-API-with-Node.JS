import generateCacheFromApi from "./controllers/generate-cache-from-api.js";
import startServer from "./server/startServer.js";
import CONFIG from "./config/config.js";
import express from "express";


const app = express();

startServer(app);

// Generate cache file on start.
let eventEmitter = app.get('appStartedEmitter');
eventEmitter.once('local-api-server-start', () => generateCacheFromApi());

// Transform cache refresh time to milliseconds.
let cacheRefreshRate = CONFIG.COINS_DATA_CACHE_DURATION_MINUTES * 60 * 1000;

setTimeout(()=>{
    generateCacheFromApi();
}, cacheRefreshRate);