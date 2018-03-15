# tenexpo

## Install
```
yarn add @argonomo/tenexpo
```

## Syntax
```js
tenexpo(base: number, limit: number)
```

## Usage
```js
import tenexpo from '@argonomo/tenexpo'

const ex1 = tenexpo(560)
// ex1 === 100

const ex2 = tenexpo(20)
// ex2 === 10

const ex3 = tenexpo(4500)
// ex3 === 1000

const ex4 = tenexpo(999999, 10000)
// ex4 === 10000
```
