const path = require("path");

const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./src/app.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },

    // devtool: "none",   //not work !!!
    devtool: false,

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },

    devServer: {
        static: {
            directory: path.resolve(__dirname, "./")
        }
        //compress: true  //this is not needed, but works with it
        // port: 3000,   //here can change port number, be defaut it is 8080
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [new CleanPlugin.CleanWebpackPlugin()]
};
