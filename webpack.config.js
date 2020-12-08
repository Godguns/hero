const webpack = require('webpack')
const path = require('path')
const env = require('./env')
// const webpackBaseConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')

exports.default={
    entry:'./main/index.js',
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

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./main/index.html'
        })
    ],
    devServer:{
        port:9000,
        hot: true,
        host:'localhost',
        contentBase: path.join(__dirname, "./dist"),
        overlay: {
            warnings: true,
            errors: true
          },
    }

       
    
}