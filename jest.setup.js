// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock Request, Response, and other web APIs
global.Request = class Request {
  constructor(input, init) {
    this.input = input;
    this.init = init;
  }
};

global.Response = class Response {
  constructor(body, init) {
    this.body = body;
    this.init = init;
  }
};

global.Headers = class Headers {
  constructor(init) {}
  append() {}
  get() {}
  set() {}
};
