"use strict";

// let num = 3;
		
// if (num > 5 && num < 10 || num == 20) {     // приоритет у num > 5 && num <10
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 3;
		
// if (num > 5 || num > 0 && num < 3) {    // приоритет у num > 0 && num < 3
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

let num = 3;
		
if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {   // приортитет у  num > 10 && num < 20 потом  num > 20 && num < 30
	console.log('+++');
} else {
	console.log('---');
}