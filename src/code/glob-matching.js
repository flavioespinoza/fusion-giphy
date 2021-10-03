function globMatching(fileName, pattern) {
  let p1 = 0;
	let f1 = 0;
	while (f1 < fileName.length) {
		let pchar = pattern[p1];
    let fchar = fileName[f1];
		if (pchar !== fchar && pchar !== "*") return false;
		
		if (pchar === fchar) {
      console.log(pchar, fchar)
      p1++;
      f1++;
    }
    
    if (pchar !== fchar) {
      if (pattern[p1 - 1]) {
        
        
      }
    }
		

	}
	return true;
}

let pattern = 'a*efg';
let fileName = 'abcdefg';

console.log(globMatching(fileName, pattern));