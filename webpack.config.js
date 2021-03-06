module.exports = {
	entry: './js/main.js',
	output: {
		path: './',
		filename: 'js/index.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
}