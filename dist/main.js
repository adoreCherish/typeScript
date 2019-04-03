(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var bool = true;
console.log(bool);
var number = 1;
console.log(number);
var string = '1';
console.log(string);
var arr1 = [1, 2, 3];
console.log(arr1);
var arr2 = ['1', '2'];
console.log(arr2);
var x = ['123333', 1];
console.log(x);
// console.log(x[0].substr(1))
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 100] = "Blue";
})(Color || (Color = {}));
var c = Color.Blue;
console.log(c);
var n = Color[100];
console.log(n);

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    console.log("hello " + name);
}
exports.sayHello = sayHello;

},{}],3:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
require("./dataType");
// function showHello(divName: string, name: string) {
//     console.log(divName, name)
//     const elt = document.getElementById(divName);
//     // console.log(elt)
//     elt.innerText = sayHello(name);
// }
// showHello("greeting", "TypeScript");

var Person = function () {
    function Person(message) {
        _classCallCheck(this, Person);

        this.name = message;
    }

    _createClass(Person, [{
        key: "show",
        value: function show() {
            // return `${this.name},`
        }
    }]);

    return Person;
}();

var Student = function (_Person) {
    _inherits(Student, _Person);

    function Student(name, age) {
        _classCallCheck(this, Student);

        var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, name));

        _this.age = age;
        return _this;
    }

    _createClass(Student, [{
        key: "show",
        value: function show() {
            return this.name + ",\u8FD9\u4E2A\u5B66\u751F" + this.age + "\u5C81";
        }
    }]);

    return Student;
}(Person);

var s = new Student('wyq', '12');
console.log(s.show());

},{"./dataType":1}]},{},[3,2])

//# sourceMappingURL=main.js.map
