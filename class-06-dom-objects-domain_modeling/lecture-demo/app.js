'use strict';

var wolf = {
  name: 'Gray',
  packNum: 9,
  gender: 'female',
  age: 7,
  territory: 'North Cascades',
  alpha: true,
  yellowEyes: true,
  family:{
    mate: {
      name: 'Black'
    },
    pups: [
      'Larry',
      'Curly',
      'Mo',
    ]
  },
  // speak: function() {
  //   console.log('Hawlllllo, my name is ' + wolf.name + ' and I like to roam around in the ' + wolf.territory + '.');
//}
};
wolf.speak();

///in console to add to the pups array
//wolf.family.pups.push('Shemp');
//new funtion to grow the family of the wolf packNum

// wolf.growFamily = function(newName) {
//   var newPup = {name: newName};
//   this.family.pups.push(newPup);
// };
//
// wolf.growFamily('Darling');

// Example of THIS:
// (In console)
// var shape = {
// width: 600,
// height: 400,
// getArea: function() {
// 	return this.width * this.height;
// }
// };
//
// because the this keyword here refers to the shape object, it would be the same as writing:
//
// return shape.width * shape.height;
//
