
'use strict'

const STDIN = process.stdin
const STDOUT = process.stdout

STDIN.setEncoding('utf8')

const Argv = require('yargs')
  .usage('Usage: beuller -f [path] -c [num] -d [num]')
  .default({ c: 10
  , d: 2
  , f:  null
  })
  .argv

const Path = require('path')

let StudentList = null

if (!Argv.f) {
  StudentList = require(`../students/${Argv.c}.json`).students
} else {
  console.log(Path.resolve(process.cwd(), Argv.f));
  StudentList = require(Path.resolve(process.cwd(), Argv.f)).students
}

const MeanRevering = require('./meanReversion')(StudentList, { degree: Argv.d })
const Keypress = require('keypress')
const Spin = require('cli-spinner').Spinner

Keypress(STDIN)

let spinner = new Spin('Bueller...')
spinner.setSpinnerString(3)
spinner.setSpinnerDelay(150)
spinner.start()

STDIN.on('data', data => {
  MeanRevering(studentName => {
    STDOUT.write(`---------> ${studentName}\n`)
    spinner.stop()
    setTimeout(spinner.start.bind(spinner), 500)
  })
})