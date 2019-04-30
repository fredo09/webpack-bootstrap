/** 
 *  Configuracion de Webpack
 */

 const path = require('path');

 module.exports = {
     entry: './src/index.js',
     output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'build.[name].js'
     },
     module:{
         rules:[
             { //Loaders
                test: /\.(scss)$/,
                use:[
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                              plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader' 
                    }
                ]
             }
         ]
     }
 }