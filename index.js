import { Suite } from 'benchmark'
const suite = new Suite()

const test = (tape) => (msg, cb) => {
  suite.add(msg, cb)
  tape(msg, (t) => cb(t))
  test.onFinish = tape.onFinish 
}

setTimeout(() => {
  suite.on('cycle', (event) => {
    const [title, stats] = event.target.toString().split(' x ')
    console.log(`(<) ${title}`)
    console.log(` (>) ${stats}`)
  })
  suite.run({ async: false })
}, 5000)

export default test
