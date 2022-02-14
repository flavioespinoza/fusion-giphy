const details = {
  name: 'John',
  age: 20,
  salary: 70000,
  homeAddress: {
    address: '123 Maple St',
    city: 'Austin',
    state: 'TX',
    geo: {
      lat: 34.223,
      long: 54.54,
    },
  },
  billingAddress: {
    address: 'P.O. Box 565',
    city: 'Salt Lake City',
    state: 'UT',
    geo: {
      lat: 39.223,
      long: 53.54,
    },
  },
};

// {
//   name: 'John',
//   age: 20,
//   salary: 70000,
//   city: 'Austin',
//   state: 'TX',
//   lat: 34.223,
//   long: 54.54
// }

function flat(obj) {
  const result = {};
  Object.keys(obj).forEach((keyName) => {
    if (typeof obj[keyName] === 'object') {
      const current = flat(obj[keyName]);
      Object.keys(current).forEach((keyName2) => {
        const keyUnique = `${keyName}.${keyName2}`;
        result[keyUnique] = current[keyName2];
      });
    } else {
      result[keyName] = obj[keyName];
    }
  });
  return result;
}
// are you there?
// let me know once you are done
// Great!!
// Thanks Flavio, Gopi will connect with you after this
// Done

// Thank you!
// And, extend my thanks to Gilles, Ravi, Amit, and Marhaf -  Sure
console.log(JSON.stringify(flat(details), null, 2));

/**
 * 
 { 
    "name": "John", 
    "age": 20, 
    "salary": 70000, 
    "homeAddress.address": "123 Maple St", 
    "homeAddress.city": "Austin", 
    "homeAddress.state": "TX", 
    "homeAddress.geo.lat": 34.223, 
    "homeAddress.geo.long": 54.54, 
    "homeAddress.geo.meta.meta_1": 1, 
    "homeAddress.geo.meta.meta_2": 1, 
    "billingAddress.address": "P.O. Box 565", 
    "billingAddress.city": "Salt Lake City", 
    "billingAddress.state": "UT", 
    "billingAddress.geo.lat": 39.223, 
    "billingAddress.geo.long": 53.54, 
    "billingAddress.geo.meta.meta_1": 2, 
    "billingAddress.geo.meta.meta_2": 2 
  } 
 * */
