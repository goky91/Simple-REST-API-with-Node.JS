import path from 'path'

export default {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'coins-local-api.js'
    },
    target: 'node'
};