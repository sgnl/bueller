
process.stdin.setEncoding('utf8');

// bueller -[crpg] [value for -g]
// ex: bueller -c 4 -rpg
var util = require('util');
var argv = require('yargs')
      .usage('Usage: $0 -c [num] -g [num]')
      .demand(['c'])
      .default('r', 'roll')
      .argv;

// console.log(process.cwd());
// console.log(process.argv);
console.log(argv._);
console.log(argv);

var list = require(process.cwd() + '/students/co_'+ argv.c + '.json').students;

var bueller = {
  roll: function(students){
    var rand = Math.floor(Math.random() * students.length);
    return students[rand];
  },
  group: function (students){
    return "using group";
  }
};

if (argv.r === 'roll') {
  process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      var result = bueller.roll(list);
      util.print(result + "\n");
    }
    return;
  });
}

