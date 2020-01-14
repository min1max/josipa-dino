const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    
    entry: {
      'app': 'src/index.js'
    },

    output: {
        filename: './js/[name].bundle.js',
        publicPath: '/dist/'
    },
    
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            // options...
                        }
                    }
                ]
                // use: [
                //     MiniCssExtractPlugin.loader,
                //     "css-loader",
                //     "postcss-loader",
                //     "sass-loader"
                // ]
            },
            { test: /\.css$/, 
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                        outputPath: 'img',
                        name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
            // Apply rule for fonts files
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [
                    {
                        // Using file-loader too
                        loader: "file-loader",
                        options: {
                        outputPath: 'fonts',
                        name: '[name].[ext]'
                        }
                    }
                ]
            }            
        ]
      
    },
    
    resolve: {
      modules: [
        __dirname,
        'node_modules',
      ],
    },
    
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer()
                ]
            }
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].style-bundle.css'
        })
    ],

    devServer: {
        publicPath: '/dist/',
        contentBase: path.resolve(__dirname, 'src'),
        watchContentBase: true,
        compress: true,
        port: 9933
    }
    
  };


