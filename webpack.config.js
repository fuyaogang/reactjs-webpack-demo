const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, './public/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
    output: {
        path: path.resolve(__dirname, './dist'), // 输出的路径
        //filename: 'bundle.js'  // 打包后文件
        filename: 'app/[name]_[hash:8].js'  // 打包后文件
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        　　 　　new HtmlWebpackPlugin({
        　　　　 　　template: path.resolve(__dirname, './public/index.html'),
        　　　　　　 inject: true
        　　　　 })
        　　 ]
    }