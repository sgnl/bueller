
'use strict'

process.stdin.setEncoding('utf8')

// bueller [-c Number]
// ex: bueller -c 4
const Argv = require('yargs')
  .usage('Usage: $0 -c [num]')
  .demand(['c'])
  .argv
;

const Keypress = require('keypress')
const Spin = require('cli-spinner').Spinner
const StudentList = require('../students/co_'+ Argv.c + '.json').students

let spinner = new Spin('Bueller: ')
spinner.setSpinnerString(3)
spinner.setSpinnerDelay(150)
spinner.start()

process.stdin.on('data', data => {
  chooseStudent(StudentList, studentName => {
    process.stdout.write('---------> ' + studentName)
    spinner.stop()
    process.stdout.write('\n')
    setTimeout(spinner.start.bind(spinner), 500)
  })

  if (data === '\u0003') {
    process.exit()
  }
})

function chooseStudent(list, cb) {
  return cb(list[ Math.floor(Math.random() * list.length) ])
}