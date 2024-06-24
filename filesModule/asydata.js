/**var a = 20;
var b;

function func1() {
    setTimeout(()=>{
        b = 30;
    }, 3000)
}

function func2(){
    console.log(a+b); //20+undefined
}
//this is disadvantage of asynchronous function
func1();
func2();
*/

//handle the async data using promise

var a = 20;
var b;

let d = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30);
    }, 3000)
})

d.then((data)=>{
    b = data;
    func2();
}).catch(()=>{
    console.log('error');
})

function func2(){
    console.log(a+b);
}