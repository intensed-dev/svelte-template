import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import globals from 'globals';
import svelte from 'eslint-plugin-svelte';

export default [
  {
    ignores: ['.svelte-kit/**', 'build/**', 'node_modules/**']
  },
  eslint.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    files: ['**/*.js', '**/*.ts', '**/*.svelte'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  prettier
];
