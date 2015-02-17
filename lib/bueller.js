
process.stdin.setEncoding('utf8');
process.stdin.setRawMode(true);
// bueller -[crpg] [value for -g]
// ex: bueller -c 4 -rpg

var util = require('util');
var keypress = require('keypress');
var argv = require('yargs')
      .usage('Usage: $0 -c [num] -g [num]')
      .demand(['c'])
      .default('r', 'roll')
      .argv;
var list = require(process.cwd() + '/students/co_'+ argv.c + '.json').students;

// make `process.stdin` begin emitting "keypress" events
keypress(process.stdin);

function roll (students){
  process.stdin.on('keypress', function(ch, key) {
    // console.log(key);
    if (key.name === 'return') {
      process.stdout.write(students[Math.floor(Math.random() * students.length)] + "\n");
    }
    if (key.sequence === '\u0003') {
      process.exit();
    }
    return;
  });
}

function group (students){
  return "using group";
}

if (argv.r === 'roll') {
  roll(list);
}

