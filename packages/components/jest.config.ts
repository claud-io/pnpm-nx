/* eslint-disable */
export default {
  displayName: "components",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  testMatch: ["**/src/**/?(*.)+(spec|test).[jt]s?(x)"],
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};
