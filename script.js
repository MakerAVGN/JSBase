"use strict";
let a = '5' + '2';
alert(a); // 52

let b = '5' + 2;
alert(b); //52

let c = 5 + '2';
alert(c); // 52

let d = 5 + 2;
alert(d); // 7

let e = '5' * '2';
alert(e); //10

let f = '5' - '2';
alert(f); // 3

let g = '5' / '2';
alert(g); // 2.5

let h = '5' % '2';
alert(h); // 1

let i = '5s' * '2';
alert(i); // Nan

let j = '5s' + '2';
alert(j); // 5s2

let k = (-'5') + (-'2');
alert(k); //-7

let l = '5' * 1 + '2' * 1;
alert(l); // 7

let m = '5' * '1' + '2' * '1';
alert(m); // 7

let n = '' + 3 + 1;
alert(n); // 31