module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    extends: ["plugin:react/recommended", "prettier", "prettier/react", "airbnb"],

    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    plugins: ["babel", "react", "import", "prettier"],
    rules: {
        "prettier/prettier": [
          "error",
          {
            printWidth: 80,
            tabWidth: 4,
            singleQuote: true,
            trailingComma: "es5",
          },
        ],
      },
};
