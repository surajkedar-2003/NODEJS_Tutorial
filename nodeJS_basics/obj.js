//      OBJECT EXPORTS
// const welcome = {

//     sayHello: function(){
//         console.log('hello world');
//     },
//     currDate: new Date().toLocaleDateString(),
//     companyName: 'tcs'
// }
 
module.exports = welcome;


//**********************    CLASS EXPORTS   ****************/

module.exports = class square{
    constructor(width){
        this.width = width;
    }

    Area(){
        return this.width**2;
    }
}