var roster = require('./students/co_4.js').students;

console.log(process.argv);

process.stdin.setEncoding('utf8');

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();

  if (chunk !== null) {
    pair(roster, function(err, result) {
      if (err) { return err(); }
      process.stdout.write(result.join(", ") + "\n");
    });
  }

  return;
});

function pair(roster, done) {
  var tmpArr = [];

  if (roster.length === 1) {
    done(process.exit, 'orphan: ' + roster[0]);
  }

  if (!roster.length) {
    done(process.exit, 'No More Pairings left.');
  }

  for (var i = 0; i < 2; i++) {
    var randomIndex = getRandom(roster.length);
    tmpArr.push( roster.splice(randomIndex,1) );
  }

  return done(null, tmpArr);
}

function getRandom(length) {
  return Math.floor(Math.random() * length);
}