import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import turbo from 'eslint-plugin-turbo'
import tseslint from 'typescript-eslint'
import onlyWarn from 'eslint-plugin-only-warn'
// import turboConfig from 'eslint-config-turbo/flat'

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config[]}
 * */
export const config = [
  // ...turboConfig,
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'error',
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  {
    ignores: ['dist/**'],
  },
]
