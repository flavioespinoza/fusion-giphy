const myCereal = {
  name: 'Trix',
  display: function() {
    console.log(this); // { name: 'Trix', display: [λ: display], methods: [ [λ: colors], [λ: sugar] ] }
    // block scope is the main object
  },
  logName: () => {
    console.log(this); // {}
  },
  attributes: [
    colors = () => {
      console.log(this); // {}
    },
    function sugar() {
      console.log(this); // [ [λ: colors], [λ: sugar] ]
      // block scope is the myCereal.attributes object
    },
  ],
  finance: {
    other: () => {
      console.log(this); // {}
    },
    cost: function() {
      console.log(this); // { other: [λ: other], cost: [λ: cost] }
      // block scope is myCereal.finance object
    },
  },
};

myCereal.display();
myCereal.logName();
myCereal.attributes[0]();
myCereal.attributes[1]();
myCereal.finance.other();
myCereal.finance.cost();
