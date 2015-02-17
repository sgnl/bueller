
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
  var scrambleIntervals = [];
  scrambleIntervals.push(scrambler(students));
  process.stdin.on('keypress', function(ch, key) {
    
    if (key.name === 'return') {
      scrambleIntervals.forEach(function (reference){
        clearInterval(reference);
      });
      // console.log('key: ', key);
      process.stdout.clearLine();
      process.stdout.write('==> ' + students[Math.floor(Math.random() * students.length)] + '\r');
      setTimeout(function (){
        scrambleIntervals.push(scrambler(students));
      }, 3000);
    }
    
    if (key.sequence === '\u0003') {
      setTimeout(function (){
        process.exit();
      }, 350);
    }
  });
}

function group (students){
  return 'using group';
}

function scrambler (students) {
  return setInterval(function (){
    var r = Math.floor(Math.random() * students.length);
    
    process.stdout.clearLine();
    process.stdout.write(students[r] + '\r');
    r++;
    
    if (r === students.length) {
      r = 0;
    }
  }, 250);
}

if (argv.r === 'roll') {
  roll(list);
}

