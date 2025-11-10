// Polyfills for browser APIs used by components during tests
// Minimal mocks for IntersectionObserver and ResizeObserver
// These are intentionally simple and only implement the API shape used by libraries.

// @ts-ignore
global.IntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};

// @ts-ignore
global.ResizeObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};
