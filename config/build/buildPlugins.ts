import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
    ]
}