module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: false
  },
  babel: {
    "plugins": [
      [
        "module-resolver",
        {
          "alias": {
            "^react-native$": "react-native-web"
          }
        }
      ]
    ]
  }
}
