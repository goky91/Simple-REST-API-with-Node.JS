import generateCacheFromApi from "./controllers/generate-cache-from-api.js";
import startServer from "./server/startServer.js";
import CONFIG from "./config/config.js";

// Transform to milliseconds.
let cacheRefreshRate = CONFIG.COINS_DATA_CACHE_DURATION_MINUTES * 60 * 1000;

setTimeout(()=>{
    generateCacheFromApi();
}, cacheRefreshRate);

startServer();
