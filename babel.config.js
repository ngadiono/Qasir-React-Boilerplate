module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
          // browsers: 'defaults',
        },
      },
    ],
    [
      "@babel/preset-react",
      {
        "pragma": "dom", // default pragma is React.createElement
        "pragmaFrag": "DomFrag", // default is React.Fragment
        "throwIfNamespace": false // defaults to true
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ],
    [
      "import",
      {
        "libraryName": "antd",
        "libraryDirectory": "es",
        "style": "css",
      }
    ],
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-transform-arrow-functions",
    "@babel/plugin-transform-block-scoping",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-runtime",
  ],

  "env": {
    "test": {
      "plugins": [
        "dynamic-import-node",
        [
          "import",
          {
            "libraryName": "antd",
            "style": "css",
          }
        ],
      ]
    }
  }
};
