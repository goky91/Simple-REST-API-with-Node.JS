const CONFIG = {
    COINS_DATA_CACHE_DURATION_MINUTES: 120,
    COINS_DATA_CACHE_FILE: "server/coins-data-cache.json",
    COIN_CAP_API_CREDENTIALS: {
        hostname: 'api.coincap.io',
        port: 443,
        path: '/v2/assets',
    }
};

export default CONFIG;