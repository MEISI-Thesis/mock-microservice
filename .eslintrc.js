module.export = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": ["standard-with-typescript", "prettier"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "tsconfigRootDir": __dirname,
        "project": 'tsconfig.json'
    },
    "rules": {}
}
