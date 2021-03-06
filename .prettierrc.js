'use strict';

module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  bracketSameLine: false,
  trailingComma: 'es5',
  printWidth: 100,

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        trailingComma: 'all',
      },
    },
  ],
};
