'use strict'
const stdin = process.stdin;

stdin.resume();
stdin.setEncoding( 'utf8') ;

// bueller [-c Number]
// ex: bueller -c 4
const Argv = require( 'yargs' )
  .usage( 'Usage: $0 -c [num]' )
  .demand( ['c'] )
  .argv
;

const Keypress = require( 'keypress' );
const Spin = require( 'cli-spinner' ).Spinner;
const StudentList = require( '../students/co_' + Argv.c + '.json' ).students;

//Change this to change the degree of mean reversion.
//0 = Full; 10 = Totally Random
const degreeOfMeanReversion = 2;
//Init variables
let instances = {};
let count = 0;
let mean = 0;
// init instances obj
for ( var i in StudentList ) {
  instances[ StudentList[i] ] = {
      currentScore : 0,
      randomScore : 0
    };
}

Keypress(stdin);

let spinner = new Spin( 'Bueller...' );
spinner.setSpinnerString( 3 );
spinner.setSpinnerDelay( 150 );
spinner.start();

process.stdin.on( 'data', data => {
  chooseStudent( StudentList, studentName => {
    process.stdout.write( '---------> ' + studentName );
    spinner.stop();
    process.stdout.write( '\n' );
    setTimeout( spinner.start.bind( spinner ), 500 );
  });
  if ( data === '\u0003' ) {
    process.exit( );
  }
});

function chooseStudent( people, cb ) {
  return cb( getPerson( people, instances ) );
}

function getPerson( people, instances ) {
  var personChosen;
  var highest = -Infinity;

  mean = count / people.length;

  for ( var x in instances ) {
    var deviation =  (0.01 * Math.random()) + mean - instances[x].currentScore;
    instances[x].randomScore = Math.random() * (degreeOfMeanReversion + deviation);
  }

  for ( var p in instances ) {
    if ( instances[p].randomScore > highest ) {
      highest = instances[p].randomScore;
      personChosen = p;
    }
  }
  instances[personChosen].currentScore += 1;
  count++;
  return personChosen;

}