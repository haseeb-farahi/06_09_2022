var stringOne = 'StartUpIstan is the is   best place';
var stringTwo = 'I love coding, coding is my love';
console.log(stringOne)



console.log(stringOne.match(/is/g))
document.write(stringOne.repeat(2))


console.log(stringTwo.replace(/love/g, 'Hate'))


console.log(stringOne.startsWith('Start'))

console.log(stringOne.toUpperCase())
console.log(stringOne.toLocaleLowerCase()) 



var alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
console.log(alph.length)

// trim 



var x = alph.trim

console.log(alph.lenghth)
console.log(x)

function toUp(){
    var thename = document.querySelector('input').value
    console.log(thename.toUpperCase(thename))
}


var intNum = 10;
var strName = '10'
console.log(intNum/strName);
console.log(intNum == strName);



var x = 123;
console.log(typeof(x));

var xx = x.toString()
console.log(typeof(xx));

var alj = xx +x;

var alj2 = x +xx;
console.log(alj)
console.log(alj2)


var y = 20;
var k = 10;
var kk = parseInt(k)
console.log(y+k)


let h = 123;
x.toString();
(123).toString();
(100 + 23).toString();
console.log((100+23).toString())

let u = 9.6543;


let q = 123
q.valueOf();
(123).valueOf();
console.log((100+23).valueOf());



var t  = '120.22'
console.log(typeof(t));
var r = Number(t)
console.log(Number(r));


console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number(" 10"));
console.log(Number("10 "));
console.log(Number(" asd "));

console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt(" years 10"));


console.log(parseFloat("10"))
console.log(parseFloat("10.33"))
console.log(parseFloat("10 20 30 "))
console.log(parseFloat("10 years"))
console.log(parseFloat("years 10"))



const St_Names = ['wadan','yahiya','tariq']

console.log(typeof(St_Names))


var x = St_Names.toString()
console.log(typeof(x))
document.write(x)



const cars = ["bmw","ferrrari","benz"];
console.log(cars);
cars.pop();
cars.push("lexus");
 console.log(cars)

cars[cars.length]="toyouta"
console.log(cars)
const fruits = ["banana", "oranger", "mango"];
fruits.splice(2, 0 , "lemon" , "kiwi")
console.log(fruits)































