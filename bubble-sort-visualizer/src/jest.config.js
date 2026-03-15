module.exports = {
    roots: ['<rootDir>/src','<rootDir>'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
      '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest', 
      '^.+\\.(js|jsx)$': 'babel-jest',
    },
 setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
 moduleNameMapper: {
'^@/(.*)$': '<rootDir>/**/$1'
},
 moduleDirectories: ['node_modules', 'src'],
 modulePaths: ['<rootDir>/src/', '<rootDir>/../'],
};