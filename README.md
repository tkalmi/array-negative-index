[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# array-negative-index

> Wrapper for JavaScript arrays to make them accept negative indexes. Comes with
> Snake-like looping teleportation.

## Prerequisites

This project utilizes Proxies and the `Array.prototype.at` method, so please
make sure your environment supports those two features.

For development purposes, we run tests using NodeJS's internal test runner.

## Installation

> [!NOTE]
> This project is not meant to be ran in production. Use at your own risk.

Just install the package to your node project via npm:

```sh
npm install array-negative-index
```

Alternatively, clone the repo with:

```sh
$ git clone https://github.com/tkalmi/array-negative-index.git
```

# Usage

```js
// Simply import the module to the JS file you wish to use it in:
import { getArrayWithNegativeIndexes } from 'array-negative-index;
// or `const { getArrayWithNegativeIndexes } = require('array-negative-index');`

// Then, wrap an array you want to query with negative indexes
const array = getArrayWithNegativeIndexes([1, 2, 3, 4, 5, 6]);

// Now you can query the array using negative indexes, just like in, e.g., Python
const lastValue = array[-1]; // `6`
const secondToLastValue = array[-2] // `5`

// You can also enable Snake-like teleporting by passing the `enableSnakeTeleport: true` option to the array initializer:
const teleportArray = getArrayWithNegativeIndexes([1, 2, 3, 4, 5, 6], { enableSnakeTeleport: true });

// Once teleporting is enabled, indexes that would otherwise be out of range are looped back to the start (or end, in case the index is negative)
teleportArray[6] // `1`
teleportArray[100] // `5`
teleportArray[-7] // `6`
```
