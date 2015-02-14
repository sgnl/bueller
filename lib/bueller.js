
process.stdin.setEncoding('utf8');


var util = require('util');
var argv = require('yargs')
      .usage('Usage: $0 -c [num] -g [num]')
      .demand(['c'])
      .argv;

// console.log(process.cwd());
// console.log(process.argv);
console.log(argv._);

// var cohort = argv._[1] ? argv._[1] : '4';
var list = require(process.cwd() + '/students/co_'+ argv.c + '.json').students;
var action = argv._[0] ? argv._[0] : 'roll';

var bueller = {
  roll: function(students){
    var rand = Math.floor(Math.random() * students.length);
    return students[rand];
  },
  group: function (students){
    return "using group";
  }
};

function init() {
  process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      var result = bueller[action](list);
      util.print(result + "\n");
    }
    return;
  });
}

init();
