// var man = {
//   name: "json",
//   beard: true,
//   family: [
//     'spencer',
//     'derek',
//     'tenga'
//   ]
// };

// function getName() {
//   return this.name;
// }

// function getFamily() {
//   var my = this;
//   console.log(this.name + ' has a family of ' + this.family.length + ' people.');
//   this.family.forEach(function(current, index) {
//     // cant use 'this' in here because it is the Array in this context

//     console.log( my.family[index] );
//     // below is what 'should' be done here 
//     // but this is just an example ;)
//     // console.log(current);
//   });
// }

// console.log( getName.call(man) );
// getFamily.call(man);

console.log("1");
setTimeout(function() {
  console.log("2");
}, 0);
setTimeout(function() {
  console.log("3");
}, 0);
console.log("4");