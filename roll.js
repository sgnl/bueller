process.stdin.setEncoding('utf8');

var cohort = process.argv[2] ? process.argv[2] : 'co_4';
var roster = require('./students/' + cohort ).students;

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    var result = roll(roster);
    process.stdout.write(result + "\n");
  }
  return;
});

function roll(roster) {
  var rand = Math.floor(Math.random() * roster.length);
  return roster[rand];
}
