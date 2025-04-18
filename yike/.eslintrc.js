module.exports = {
    // Add Vue plugin configuration
    extends: [
      'plugin:vue/vue3-recommended'
    ],
    rules: {
      'vue/no-multiple-template-root': 'off' // Disable multi-root template check
    },
    // Add parser options for Vue files
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  }