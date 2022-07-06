module.exports = {
    root: true,

    env: {
        node: true,
        browser: true,
        es6: true
    },

    globals: {
        // prototype
        ENVS: true
    },

    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 2020
    },
    rules: {
        'no-empty': 'off'
    },

    extends: []
};
