
process.stdin.setEncoding('utf8');

console.log(process.cwd());
console.log(process.argv);

var util = require('util');
var argv = require('yargs').argv;

var cohort = process.argv[2] ? process.argv[2] : 'co_4';
var list = require(process.cwd() + '/students/'+ cohort + '.json').students;
var action = process.argv[3] ? process.argv[3] : 'roll';

var bueller = {
  roll: function(students){
    var rand = Math.floor(Math.random() * students.length);
    return students[rand];
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
