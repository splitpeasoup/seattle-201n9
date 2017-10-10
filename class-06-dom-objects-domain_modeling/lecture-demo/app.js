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
