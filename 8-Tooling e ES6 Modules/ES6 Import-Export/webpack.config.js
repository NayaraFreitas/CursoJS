//
const path = require('path') //CommonJs - padrão de modulo do Node.js

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public', 'assets', 'js'), 
      filename: 'bundle.js'
    } ,

    module: {
        rules: [{
            exclude: /node_modules/,  //pra ele não analisar o node-modules
            test: /\.js$/, // ele irá analisar arquivos com .js
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map'
};