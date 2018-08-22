module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true
      },
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/prefer-stateless-function": [0, { "ignorePureComponents": true }],
        "react/destructuring-assignment": [0, "always", { "ignoreClassFields": true }],
        "react/forbid-prop-types": [0, { "forbid": ['any', 'array', 'object'], checkContextTypes: true, checkChildContextTypes: true }],
        "react/require-default-props": [0, { forbidDefaultForRequired: true }],
        "max-len": 0,
        "react/jsx-one-expression-per-line": [0, { "allow": "none"|"literal"|"single-child" }]
      }
};