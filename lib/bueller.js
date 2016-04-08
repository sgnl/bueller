
'use strict'

const STDIN = process.stdin
const STDOUT = process.stdout

STDIN.resume()
STDIN.setEncoding('utf8')

// bueller [-c Number]
// ex: bueller -c 4
const Argv = require('yargs')
  .usage('Usage: $0 -c [num] -d [num: default is 2]')
  .demand(['c'])
  .default({ d: 2 })
  .argv

const StudentList = require('../students/co_' + Argv.c + '.json').students
const MeanRevering = require('./meanReversion')(StudentList, { degree: Argv.d })
const Keypress = require('keypress')
const Spin = require('cli-spinner').Spinner

Keypress(STDIN)

let spinner = new Spin('Bueller...')
spinner.setSpinnerString(3)
spinner.setSpinnerDelay(150)
spinner.start()

STDIN.on('data', data => {
  if (data === '\u0003') {
    return process.exit()
  }

  MeanRevering(studentName => {
    STDOUT.write('---------> ' + studentName)
    spinner.stop()
    STDOUT.write('\n')
    setTimeout(spinner.start.bind(spinner), 500)
  })
})