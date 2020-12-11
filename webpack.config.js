const webpack = require('webpack')
const path = require('path')
const env = require('./env')
// const webpackBaseConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

exports.default={
    entry:'./hero_main/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:'/(node_modules|bower_components)/',
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-env']
                }
            },
            {
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test:/\.hero$/,
                use:{
                    loader: path.resolve('./hero-loader.js'),
                    options: {/* ... */}
                  }
            }


        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        })
    ],
    devServer:{
        port:3000,
        hot: true,
        host:'localhost',
        contentBase: path.join(__dirname, "./dist"),
        overlay: {
            warnings: true,
            errors: true
          },
    },
    devtool:'source-map',
    resolve:{
        modules:[path.resolve(__dirname,'main'),path.resolve('node_modules')]
    },
    mode:'development'

       
    
}