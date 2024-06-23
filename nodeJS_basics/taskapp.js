const percent = require('./sum&per');

console.log(percent.sum(30, 60, 90));
console.log(percent.percent(30, 60, 90))

const studentInfo = require('./studentinfo');
const cone = require('./volumeOfCone');
console.log(studentInfo.id);
console.log(studentInfo.name);
console.log(studentInfo.city);

const con = new cone(5, 10);
console.log(con.volume());