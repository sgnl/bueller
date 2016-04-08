
'use strict'

module.exports = function (StudentList, opts) {
  //Change this to change the degree of mean reversion.
  //0 = Full 10 = Totally Random
  const degreeOfMeanReversion = opts.degree

  //Init variables
  let count = 0
  let mean = 0
  let instances = StudentList.reduce(function(prev, studentName){

    prev[studentName] = { currentScore : 0
      , randomScore : 0
    }

    return prev
  }, {})

  // init instances obj
  return function(){
    let personChosen = null
    let highest = -Infinity

    mean = count / StudentList.length

    for (let x in instances) {
      let deviation =  (0.01 * Math.random()) + mean - instances[x].currentScore
      instances[x].randomScore = Math.random() * (degreeOfMeanReversion + deviation)
      if (instances[x].randomScore > highest) {
        highest = instances[x].randomScore
        personChosen = x
      }
    }

    instances[personChosen].currentScore++
    count++

    return personChosen
  }
}