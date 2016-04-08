
'use strict'

module.exports = function (StudentList, opts) {
  //Change this to change the degree of mean reversion.
  //0 = Full 10 = Totally Random
  const degreeOfMeanReversion = opts.degree

  let count = 0
  let scoreboard = StudentList.reduce(function(prev, studentName){

    prev[studentName] = { currentScore : 0
      , randomScore : 0
    }

    return prev
  }, {})

  return function(cb){
    let highest = -Infinity

    let mean = count / StudentList.length

    let chosen = Object.keys(scoreboard)
      .reduce(function(prev, key){
        let student = scoreboard[key]
        let deviation =  (0.01 * Math.random()) + mean - student.currentScore

        student.randomScore = Math.random() * (degreeOfMeanReversion + deviation)

        if (student.randomScore > highest) {
          highest = student.randomScore
          prev[0] = key
          return prev
        }

        return prev
      }, [])
      .map(function(personChosen){
        scoreboard[personChosen].currentScore++
        count++
        return personChosen
      })

    return cb(chosen)
  }
}