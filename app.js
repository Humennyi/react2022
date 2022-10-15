// const x=(str:string):number|string=>{
//    return
// }
//
// interface IUser <T>{
//    name: string,
//    age: number,
//    status: boolean;
//    data:T
//
// }
//
// interface IDog{
//    name:string,
//    age:number
// }
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.a = a;
        this.b = b;
    }
    Rectangle.prototype.area = function () {
        return this.a * this.b;
    };
    Rectangle.prototype.perimeter = function () {
        return this.a * 2 + this.b * 2;
    };
    Rectangle.prototype.hello = function () {
        console.log('Hello');
    };
    return Rectangle;
}());
var rectangle = new Rectangle(5, 4);
console.log(rectangle.area());
console.log(rectangle.perimeter());
var Triangle = /** @class */ (function () {
    function Triangle(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    Triangle.prototype.area = function () {
        return this.a * this.b * this.c;
    };
    Triangle.prototype.perimeter = function () {
        return this.c * 2 / this.b;
    };
    return Triangle;
}());
new Triangle(1, 3, 7);
var shapes = [new Rectangle(2, 5), new Triangle(5, 6, 7)];
for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
    var shape = shapes_1[_i];
    console.log(shape.area());
    console.log(shape.perimeter());
}
