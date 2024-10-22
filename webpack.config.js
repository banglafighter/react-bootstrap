const path = require('path');

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
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        library: 'ReactRapidBootstrap',
        libraryTarget: 'umd', // Universal Module Definition for compatibility
        globalObject: 'this',
    },

};