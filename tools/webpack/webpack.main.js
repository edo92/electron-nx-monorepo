module.exports = {
  entry: ['./apps/main/src/main.ts'],
  module: {
    rules: require('./webpack.rules'),
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  stats: 'minimal',
};
