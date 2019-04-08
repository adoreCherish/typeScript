(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Greeter = function () {
    function Greeter(message) {
        _classCallCheck(this, Greeter);

        this.greeting = message;
    }

    _createClass(Greeter, [{
        key: 'greet',
        value: function greet() {
            return "Hello, " + this.greeting;
        }
    }]);

    return Greeter;
}();

var greeter = new Greeter('world');
console.log(greeter.greet());

var Animal = function () {
    function Animal(name) {
        _classCallCheck(this, Animal);

        this.animalName = name;
    }

    _createClass(Animal, [{
        key: 'move',
        value: function move() {
            var _move = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            console.log(this.animalName + '\u5411\u524D\u79FB\u52A8\u4E86' + _move + '\u7C73');
        }
    }]);

    return Animal;
}();

var Dog = function (_Animal) {
    _inherits(Dog, _Animal);

    function Dog(name) {
        _classCallCheck(this, Dog);

        return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, name));
    }

    _createClass(Dog, [{
        key: 'move',
        value: function move() {
            var _move2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

            console.log('moving.....');
            _get(Dog.prototype.__proto__ || Object.getPrototypeOf(Dog.prototype), 'move', this).call(this, _move2);
        }
    }, {
        key: 'bark',
        value: function bark() {
            console.log('Woof! Woof!');
        }
    }]);

    return Dog;
}(Animal);

var dog = new Dog('pounds');
dog.move(40);

},{}],2:[function(require,module,exports){
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
var c = Color.Blue; // 通过key获取值
console.log(c);
var n = Color[100]; // 通过值获取key
console.log(n);
function warnUser() {
    console.warn('this is warn log');
}
warnUser();
// declare function create(o: object | null): void;
// create({ prop: 0 });
var defaults = { food: "spicy", price: "$$", ambiance: { food: 'lala' } };
var search = Object.assign({ food: "rich" }, defaults);
console.log(search);

},{}],3:[function(require,module,exports){
"use strict";

function identiy(arg) {
    return arg;
}
var output = identiy("myString");
var identiy1 = function identiy1(arg) {
    return arg;
};
console.log(identiy1('1'));
var identiy2 = function identiy2(arg) {
    return arg;
};
console.log(identiy2({ a: 1 }));
var myIdentity = identiy;
console.log(myIdentity(1));

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function sayHello(name) {
    console.log("hello " + name);
}
exports.sayHello = sayHello;

},{}],5:[function(require,module,exports){
"use strict";

function printLabelValue(value) {
    console.log(value.label);
    return value.name;
}
var p = printLabelValue({ name: 'wyq' });
console.log(p);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function createCardPicker() {
        var _this = this;

        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var createCardPicker = deck.createCardPicker();
console.log(createCardPicker().suit, createCardPicker().card);
var myArray = ['1', 1, { a: 1, b: 2 }];
console.log(myArray);

},{}],6:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
require("./dataType");
require("./interface");
require("./genericity");
require("./class");
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

},{"./class":1,"./dataType":2,"./genericity":3,"./interface":5}]},{},[6,4])

//# sourceMappingURL=main.js.map
