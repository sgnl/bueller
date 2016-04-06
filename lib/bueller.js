
'use strict'

process.stdin.setEncoding('utf8').setRawMode(true)

// bueller [-c Number]
// ex: bueller -c 4
const Argv = require('yargs')
  .usage('Usage: $0 -c [num]')
  .demand(['c'])
  .argv
;

const Keypress = require('keypress')
const Spin = require('cli-spinner').Spinner
const StudentList = require(process.cwd() + '/students/co_'+ Argv.c + '.json').students

Keypress(process.stdin)

let spinner = new Spin('Bueller...')
spinner.setSpinnerString(3)
spinner.setSpinnerDelay(150)
spinner.start()

process.stdin.on('keypress', (char, key) => {
  if (key.name === 'return' && spinner.isSpinning()) {
    spinner.stop()
    chooseStudent(StudentList, studentName => {
      process.stdout.write(studentName)
      setTimeout(spinner.start.bind(spinner), 500)
    })
  }

  if (key.sequence === '\u0003') {
    process.exit()
  }
})

process.stdin.on('data', chunk => {
  console.log(chunk);
})

function chooseStudent(list, cb) {
  return cb(list[ Math.floor(Math.random() * list.length) ])
}