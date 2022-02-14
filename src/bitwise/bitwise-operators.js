// 1 => 00000 001
// 2 => 00000 010
// R => 00000 011 => 3

let R = 1 | 2;
console.log(R); // Bitwise OR => 3

// 1 => 00000 001
// 2 => 00000 010
// R => 00000 000

R = 1 & 2;
console.log(R); // Bitwise AND => 0

// Read, Write, Execute
// 00000 100  =>  4   =>  Read, !Write, !Execute
// 00000 010  =>  2   =>  !Read, Write, !Execute
// 00000 001  =>  1   =>  !Read, !Write, Execute

const hasPermissionType = (permissionsUser, type) => {
  return permissionsUser & permissions[type] ? true : false;
};

const permissions = {
  read: 4,
  write: 2,
  execute: 1,
};

let permissionsUser = 0;

permissionsUser = permissionsUser | permissions.read | permissions.write;

console.log(permissionsUser); // 6
console.log(hasPermissionType(permissionsUser, 'read')); // true
console.log(hasPermissionType(permissionsUser, 'write')); // true
console.log(hasPermissionType(permissionsUser, 'execute')); // false


let permissionsUser2 = 0;
permissionsUser2 = permissionsUser2 | permissions.read | permissions.write | permissions.execute;

console.log(permissionsUser2); // 7
console.log(hasPermissionType(permissionsUser2, 'read')); // true
console.log(hasPermissionType(permissionsUser2, 'write')); // true
console.log(hasPermissionType(permissionsUser2, 'execute')); // true

let permissionsUser3 = 0;
permissionsUser3 = permissionsUser3 | permissions.write | permissions.execute;

console.log(permissionsUser3); // 3
console.log(hasPermissionType(permissionsUser3, 'read')); // false
console.log(hasPermissionType(permissionsUser3, 'write')); // true
console.log(hasPermissionType(permissionsUser3, 'execute')); // true

// 1 => 001
// 3 => 011
// 1 & 3 => 1
// 1 | 3 => 3
// 1 ^ 3 => 2
console.log(1 & 3); // AND => 1
console.log(1 | 3); // OR  => 3
console.log(1 ^ 3); // XOR => 2

// Shift Left
// 9 => 1001
console.log(9 << 2); // 36 => 100100 [add 2 zeros to end]
console.log((36).toString(2)); // 100100

console.log(9 << 1); // 18 => 10010 [add 1 zero to end]
console.log((18).toString(2)); // 10010

// Shift Right
// 9 => 1001
console.log(9 >> 2); // 2 => 10 [remove 2 zeros from end]
console.log((2).toString(2)); // 10

console.log(9 >> 1); // 4 => 100 [remove 1 zero from end]
console.log((4).toString(2)); // 100

