module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ["plugin:react/recommended", "standard", "prettier"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["react"],
    rules: {
        semi: [2, "always"],
        indent: ["off", 4],
        "react/jsx-indent": ["off", 4],
        "space-before-function-paren": [
            "error",
            { anonymous: "always", named: "never" }
        ],
        "max-len": ["error", { ignoreStrings: true }],
        quotes: [
            "error",
            "double",
            {
                allowTemplateLiterals: true
            }
        ]
    }
};
