var isTrue = true;
var num = 1232.289;
var color = 'ksajd';
var list = [12, 3, 4];
var listGeneric = [12, 3, 4.5];
var tuple;
tuple = ["hello", 10];
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["yellow"] = 1] = "yellow";
    Color[Color["white"] = 2] = "white";
})(Color || (Color = {}));
var c = Color.yellow;
var notSure = 1;
notSure = true;
function warn() {
    console.log("this is warning message");
    return 4;
}
function myFunc(xyz) {
    throw new Error(xyz);
}
var someFunc;
someFunc = function (x) { return 100 * x; };
