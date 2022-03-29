module.exports = {
  preset: 'ts-jest',
  rootDir: 'test/jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ['vue', 'js', 'jsx', 'json', 'ts', 'tsx'],
  moduleNameMapper: {
    '^quasar$': '../../node_modules/quasar',
    '^~/(.*)$': '../../$1',
    '^src/(.*)$': '../../src/$1',
    '^app/(.*)$': '../../$1',
    '^components/(.*)$': '../../src/components/$1',
    '^layouts/(.*)$': '../../src/layouts/$1',
    '^pages/(.*)$': '../../src/pages/$1',
    '^assets/(.*)$': '../../src/assets/$1',
    '^boot/(.*)$': '../../src/boot/$1',
    '.*css$': '@quasar/quasar-app-extension-testing-unit-jest/stub.css',
  },
};
