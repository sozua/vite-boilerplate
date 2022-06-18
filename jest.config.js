// jest.config.js inspired by https://hung.dev/jest-vite

module.exports = {
    roots: ["<rootDir>/src"],
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts",
        "!src/mocks/**",
    ],
    coveragePathIgnorePatterns: [],
    setupFilesAfterEnv: ["./src/config/jest/setupTests.js"],
    testEnvironment: "jsdom",
    modulePaths: ["<rootDir>/src"],
    transform: {
        "^.+\\.(ts|js|tsx|jsx)$": "@swc/jest",
        ".+\\.(svg|css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
        "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|json)$)":
            "<rootDir>/config/jest/fileTransform.js",
    },
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$",
    ],
    modulePaths: ["<rootDir>/src"],
    moduleNameMapper: {
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    },
    moduleFileExtensions: [
        "tsx",
        "ts",
        "web.js",
        "js",
        "web.ts",
        "web.tsx",
        "json",
        "web.jsx",
        "jsx",
        "node",
    ],
    watchPlugins: [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname",
    ],
    resetMocks: true,
};