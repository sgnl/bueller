
'use strict'

module.exports = function(StudentList, opts){
  //Change this to change the degree of mean reversion.
  //0 = Full 10 = Totally Random
  const degreeOfMeanReversion = opts.degree

  //Init variables
  let instances = {}
  let count = 0
  let mean = 0

  // init instances obj
  for ( var i in StudentList ) {
    instances[ StudentList[i] ] = {
      currentScore : 0,
      randomScore : 0
    }
  }
  return function(){
    let personChosen = null
    let highest = -Infinity

    mean = count / StudentList.length

    for ( let x in instances ) {
      let deviation =  (0.01 * Math.random()) + mean - instances[x].currentScore
      instances[x].randomScore = Math.random() * (degreeOfMeanReversion + deviation)
    }

    for ( let p in instances ) {
      if ( instances[p].randomScore > highest ) {
        highest = instances[p].randomScore
        personChosen = p
      }
    }

    instances[personChosen].currentScore++
    count++

    return personChosen
  }
}