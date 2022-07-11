const webpack= require('webpack');
const path= require('path');

module.exports = {
    mode:'development',
    entry:{
    app:'./src/App.jsx',

},
output:{
        path: path.resolve(__dirname, 'static'),
    publicPath: '/assets/',
    filename: '[name].js',
    chunkFilename: '[name].js'

},
    optimization:{
        splitChunks:{
            cacheGroups: {
                default:false,
                vendors:false,
                vendor:{
                    name: 'vendor',
                    chunks:'all',
                    test:/node_modules/
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env']
                    }
                }

            }
        ]
    },
    devServer:{
        port:8000,
        static: path.resolve(__dirname, 'static'),
        historyApiFallback:true,
    proxy:{
            '/api/*': {
                target:'http://localhost:3000',
                secure: false,
                changeOrigin: true
            }
    },
    client:{
            webSocketURL:{
                hostname:'localhost',
                port:8000
            }
        }
    },
    devtool:'source-map'




};