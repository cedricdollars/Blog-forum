module.exports = {
    roots: [
        "<rootDir>/__tests__"
    ],
    testRegex:'(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
}
