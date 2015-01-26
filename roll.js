var roster = require('./students/co_4').students;

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    // console.log(chunk.toString() === 'a');
    var result = roll(roster);
    process.stdout.write(result + "\n");
  }
  return;
});

function roll(roster) {
  var rand = Math.floor(Math.random() * roster.length);
  return roster[rand];
}
