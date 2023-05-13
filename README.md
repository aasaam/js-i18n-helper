<div align="center">
  <h1>
    JavaScript Internationalization Helper
  </h1>
  <p>
    Modern Browser/Node.js JavaScript Internationalization library
  </p>
  <p>
    <a href="https://github.com/aasaam/js-i18n-helper/actions/workflows/ci.yml" target="_blank">
      <img src="https://github.com/aasaam/js-i18n-helper/actions/workflows/ci.yml/badge.svg" alt="build" />
    </a>
    <a href="https://coveralls.io/github/aasaam/js-i18n-helper">
      <img alt="Coveralls" src="https://img.shields.io/coveralls/github/aasaam/js-i18n-helper">
    </a>
    <a href="https://www.npmjs.com/package/@aasaam/js-i18n-helper">
      <img alt="npm" src="https://img.shields.io/npm/v/@aasaam/js-i18n-helper">
    </a>
    <a href="https://github.com/aasaam/js-i18n-helper/blob/master/LICENSE">
      <img alt="License" src="https://img.shields.io/github/license/aasaam/js-i18n-helper">
    </a>
  </p>
</div>

## Notes

- Support only modern browser that support [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl).

  - [Demo playground](https://aasaam.github.io/js-i18n-helper/browser/playground.html)
  - [Browser tests](https://aasaam.github.io/js-i18n-helper/browser/tests.html)

- Only dependency is [luxon](https://github.com/moment/luxon).
- Supported calendars:

  - `buddhist`
  - `ethioaa`
  - `ethiopic`
  - `gregory`
  - `hebrew`
  - `indian`
  - `islamic`
  - `islamic-civil`
  - `islamic-rgsa`
  - `islamic-tbla`
  - `islamic-umalqura`
  - `persian`
  - `roc`

## Usage

Install package:

```sh
# npm
npm install @aasaam/js-i18n-helper

# yarn
yarn add @aasaam/js-i18n-helper

# pnpm
pnpm install @aasaam/js-i18n-helper
```

Import:

```js
// ESM
import { isSupported } from "@aasaam/js-i18n-helper";

// CommonJS
const { isSupported } = require("@aasaam/js-i18n-helper");
```

<div>
  <p align="center">
    <a href="https://aasaam.com" title="aasaam software development group">
      <img alt="aasaam software development group" width="64" src="https://raw.githubusercontent.com/aasaam/information/master/logo/aasaam.svg">
    </a>
    <br />
    aasaam software development group
  </p>
</div>
