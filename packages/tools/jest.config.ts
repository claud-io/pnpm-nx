/* eslint-disable */
export default {
  displayName: "tools",
  transform: {
    "^.+\\.[tj]s$": "ts-jest",
  },
  testMatch: ["**/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["ts", "js", "html"],
};
