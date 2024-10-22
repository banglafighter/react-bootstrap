const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
let exportDir = "dist"
module.exports = {
    entry: {
        main: './index.tsx'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compilerOptions: {
                                noEmit: false,
                            },
                        },
                    },
                ],
                exclude: /(node_modules|dist)/
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                },
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "boot", "react", "assets", "css"),
                    to: path.resolve(__dirname, exportDir, "boot", "react", "assets", "css")
                },
                {
                    from: path.resolve(__dirname, "boot", "react", "assets", "fonts"),
                    to: path.resolve(__dirname, exportDir, "boot", "react", "assets", "fonts")
                },
            ],
        }),
    ],
    output: {
        path: path.resolve(__dirname, exportDir),
        filename: 'index.js',
        library: 'ReactRapidBootstrap',
        libraryTarget: 'umd', // Universal Module Definition for compatibility
        globalObject: 'this',
        clean: true
    },

};