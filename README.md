# Use Flush
> React hooks for flushing frequently changing state.
> It can optimize application via reducing re-rendering caused of changing state.
> (It has zero-dependencies!)

[![npm version](https://badge.fury.io/js/use-flush.svg)](https://badge.fury.io/js/use-flush)
[![Build Status](https://travis-ci.org/wonism/use-flush.svg)](https://travis-ci.org/wonism/use-flush)

## Explanation
Let's assume that the state will be changed very frequently like below.

- `+` means every **n seconds**.
- `*` means state is **changed**.

```
+--------+--------+--------+--------
  * *   *  ** *** *  *    *
```

The **flushed state** will be changed in every **n seconds** like below.

```
+--------+--------+--------+--------
         *(3)     *(6)     *(2)
```

## Installation
```
$ npm i -S use-flush
```

## Usage
If you click 5 times in 2 seconds, `flushedCount` will be `[0, 1, 2, 3, 4]`.

```js
import React, { useState } from 'react';
import { render } from 'react-dom';
import useFlush from 'use-flush';

const appRoot = document.getElementById('app');

const App = () => {
  const [count, setCount] = useState(0);
  const flushedCount = useFlush(count, 2000);

  return (
    <>
      <p>
        FLUSHED COUNT : {flushedCount.join(', ')}
      </p>
      <button onClick={() => { setCount(count + 1); }}>
        CLICK!
      </button>
    </>
  );
};

render(
  <App />,
  appRoot
);
```
