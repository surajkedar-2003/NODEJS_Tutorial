/***MATH.JS */

const {add, sub} = require('./math.js');
const m = require('./math.js');
console.log(m.add(5,4));
console.log(add(5,4));


/**AREA.JS */

const area = require('./area.js');
console.log(area.circle(5));
console.log(area.rectangle(5, 6));


/**OBJECT EXPORT */

const welcome = require('./obj.js');

welcome.sayHello();
console.log(welcome.companyName);
console.log(welcome.currDate);

/**CLASS IMPORT*/
const square = require("./obj.js");

const s = new square(5);
console.log(s.Area());

