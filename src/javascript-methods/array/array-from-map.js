const map = new Map([[1, 2], [2, 4], [4, 8]]);
console.log('map :', map); // map : Map { 1 => 2, 2 => 4, 4 => 8 }

let array = Array.from(map);
console.log('array :', array); // array : [ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]

let keys = Array.from(map.keys());
let values = Array.from(map.values());
console.log('keys :', keys); // keys : [ 1, 2, 4 ]
console.log('values :', values); // values : [ 2, 4, 8 ]
