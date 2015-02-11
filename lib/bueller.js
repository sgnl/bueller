process.stdin.setEncoding('utf8');

console.log(process.cwd());
console.log(process.argv);

var cohortOpts = process.argv[2] ? process.argv[2] : 'co_4';
var list = require(process.cwd() + '/students/'+ cohortOpts + 'json');
var students = list.students;
var action = process.argv[3] ? process.argv[3] : 'roll';

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    var result = roll(students);
    process.stdout.write(result + "\n");
  }
  return; 
});

function roll(roster) {
  var rand = Math.floor(Math.random() * roster.length);
  return roster[rand];
}
