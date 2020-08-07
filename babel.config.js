const presets = [
  [
    '@babel/preset-env',
    {
      useBuiltIns: 'usage',
      corejs: 3
    }
  ]
]
const plugins = ['@babel/plugin-syntax-dynamic-import']
module.exports = { presets, plugins }
