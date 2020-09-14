var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    // 'react-hot-loader/patch',
    path.join(__dirname, 'source', 'LazyLoadable', 'LazyLoadable.js')
  ],
  output: {
    filename: 'index.js',
    chunkFilename: 'index.js',
    path: path.resolve(__dirname),
    publicPath: './',
    library: 'LazyLoadable',
    libraryTarget: 'umd'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', {
            modules: 'umd'
          }], '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-transform-async-to-generator', '@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-react-jsx-source']
        }
      },
      {
        test: /\.(png|svg|gif|jpg|woff|woff2|svg|ttf)$/,
        exclude: /node_modules/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'build/images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({
      sourceMap: false
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ],
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    },
    'react-imported-component': {
      root: 'ReactImportedComponent',
      commonjs2: 'react-imported-component',
      commonjs: 'react-imported-component',
      amd: 'react-imported-component'
    }
  },
  target: 'web'
};
