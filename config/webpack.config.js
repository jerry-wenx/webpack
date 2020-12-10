const path = require("path");
const hwp = require("html-webpack-plugin");
const mcep = require('mini-css-extract-plugin');


module.exports = {
    mode: "production",

    entry: {
        index: "./src/index.js"
    },

    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "[name].js"
    },
    devServer: {//开发服务器配置
        contentBase: path.join(__dirname, "dist"),//输出路径
        compress: true,//是否压缩
        port: 9000,//端口号 开启的服务器的端口
        open: true//是否自动打开浏览器
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: mcep.loader },
                    // { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    { loader: mcep.loader },
                    // { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: mcep.loader },
                    // { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            // file-loader 解析规则
            // {
            //     test: /\.(png|jpg|gif|jpeg)$/,
            //     use: [
            //         {loader: "file-loader"}
            //     ]
            // },

            // url-loader 
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: "url-loader",
                        options: { limit: 900000 }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"]
                        }
                    }

                ]
            },

        ]
    },


    plugins: [
        new hwp({
            title: "你没用",
            template: './src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                removeAttributeQuotes: true,
                collapseWhitespace: true
            },
            filename: 'index.html'
        }),

        new mcep({
            filename: "index.css"
        })
    ]
}