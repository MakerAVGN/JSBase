"use strict";
let test = Boolean(3);
alert(test); // true

let test1 = Boolean(0);
alert(test1); //false

let test2 = Boolean(-1);
alert(test2); //true

let test3 = Boolean(-0);
alert(test3); //false

let test4 = Boolean(+0);
alert(test4); //false

let test5 = Boolean('abc');
alert(test5); //true

let test6 = Boolean('');
alert(test6); //false

let test7 = Boolean('0');
alert(test7); //true

let test8 = Boolean(true);
alert(test8) //true

let test9 = Boolean(false);
alert(test9); //false

let test10 = Boolean('true');
alert(test10); //true

let test11 = Boolean('false');
alert(test11); //true

let test12 = Boolean(null);
alert(test12);  //false

let test13 = Boolean('null');
alert(test13);  //true

let test14 = Boolean(undefined);
alert(test14);  //false

let test15 = Boolean('undefined');
alert(test15);  //true

let test16 = Boolean(NaN);
alert(test16);  //false

let test17 = Boolean('NaN');
alert(test17); //true

let test18 = Boolean(3 * 'abc');
alert(test18); //false

let test19 = Boolean(Infinity);
alert(test19); //true

let test20= Boolean(1 / 0);
alert(test20); //true

//это невыносимо