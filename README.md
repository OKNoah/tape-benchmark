# Tape-Benchmark

Experimental tool to create benchmarks from tape tests.

## Usage

```js
import tape from 'tape'
import tb from 'tape-benchmark'

const test = tb(tape)

// test('do thing' (t) => { thing(); t.end() })
```
