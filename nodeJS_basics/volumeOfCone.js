module.exports = class cone{
    constructor(radius, height){
        this.radius = radius;
        this.height = height;
    }

    volume(){
        let vol = (3.14*this.radius*this.radius*this.height)/3
        return vol;
    }
}