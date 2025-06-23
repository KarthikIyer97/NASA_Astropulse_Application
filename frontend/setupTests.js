// setupTests.js
require('@testing-library/jest-dom');
require('whatwg-fetch'); // ✅ adds fetch, Response, Request, Headers to global scope

const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
