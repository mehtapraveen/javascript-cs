// coding interview questions /////////////////////////////////////
function hello() {
    console.log(arguments)
}

hello('hello', 1, 'world') /////In this scenario we are not receiving arguments but still prints output

// ///////////////////////////////////////////////////////

// let show = true

// setTimeout(()=>{
//    show=false
// },0)

// while(show){
//     console.log('hello')
// }
////////////////////////////
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
console.log(arr1 == arr2)

var a = 'js';
var b = 'js';
console.log(a == b)////In this scenario the arr1==arr2 returns false because both refers different address
/////////////
let arr = [];

if (arr) {
    console.log('hello')
}
else {
    console.log('bye')
}
//////////////////////
let product = {
    name: "iphone",
    price: "125055",
    ram: "9gb"
};
console.log(product);
let res = JSON.stringify(product, ['name', 'price']);
console.log(res)

/////////////////////

const nums = [90, 92, 85, 65, 42, 8, 5, 2, 1]

const res1 = nums.sort((c1, c2) => c1 > c2 ? 1 : -1)

console.log(res1);

//////////////////////////////////

//////////comparing two ARRAYS equal or not/////////////////////////////

// let num1=[04,02,15,13];
// let num2=[04,02,15,13];

// function compareArray(arr1,arr2){
//     if(arr1.length!=arr2.length){
//         return false
//     }
//     else{
//         for(let i=0; i<arr1.length;i++){
//             if(arr1[i]!=arr2[i]){
//                 return false
//             }
//         }
//         return true
//     }
// }

// if (compareArray(num1,num2)){
//     console.log('arrays equal')

// }
// else{
//     console.log("arr not equal")
// }

////////////another way of doing it /////////////
// let c=JSON.stringify(num1)
// console.log(c)
// let d=JSON.stringify(num2)
// console.log(d)
// console.log(c==d)


var e = null;

console.log(null)
var e = 1;
console.log(e)



////////////////  if-else//////////////////////

// var balance = 15000;
// var amount = prompt('Enter Amount');

// if(amount<balance){
//     alert('amount before deducted:'+balance);
//     balance-=amount
//     alert('amount after deducted:'+balance);
//     alert('transaction succesful')
// }
// else{
//     alert('you balance is low:'+balance)
// }

////////if-elseif-else/////////////////////////

// var score=prompt('enter Marks');
// var grade;
// if(score>=90){
//     grade="A"
// }
// else if(score>=80){
//     grade="b"
// }
// else if(score>=70){
//     grade="c"
// }

// else{
//     alert('fuck failed')
// }
// document.write(grade);

/////////////////switch///////////////////////
// var number1 =+prompt('enter a number')
// var number2 =+prompt('enter a number')
// var operation = prompt('enter operation to do ex:+,-,*,%')

// switch (operation) {
//     case '+':
//         alert("result:"+ (number1+number2))
//         break;
//     case '-':
//         alert("result:"+(number1-number2))
//         break;
//     case '*':
//         alert("result:"(+number1*number2))
//         break;
//     case '/':
//         alert("result:"+(number1/number2))
//         break;

//     default:
//         alert("enter operation in the form of +,-,*, %")
//         break;
// }

///////////////loops////////////////////////////////

// var user=  prompt("enter a number");
// while(user!=0){
//     console.log(user);
//      var user=  prompt("enter a number");
// }

////do while///
var count = 10;

// do{
//    var num = +prompt("enter a number");
//     console.log(num);
//     count -= 1

// }
// while(count>0); 
///////////////////////////////////////////

///////////////////////////forin--forof loops////////////////

// var group =['java','python','devops','angular']

// for (x in group){
//     console.log(x +':'+group[x] )
// }

// for(x of group){
//     console.log(x+":"+group[x])
// }

//////for in for of for object///////
// var students={
//     "name":"praveen",
//     "hobby":"sleep",
//     "goals":"no goals"
// }

// for(x of students){
//     console.log(x)
// }
// for(x in students){
//     console.log(x +":"+students[x])
// }

/////////////////////arraymethods///////////////

let array = ['kl', 'ms', 'vk', 'rs']

//  var sli= array.slice(0,2)
//  console.log(sli)
//  console.log(array)
var spli = array.splice(0, 2)
console.log(spli)
console.log(array)

///////////////////////////////////
//////functions//////////////////

function calculateSum() {
    sum = 21 + 22
    return sum
}
const test = calculateSum()
console.log(test);


/////iife/////

var one = (function iife(num, num2) {
    var result = num + num2;
    return result
})(6, 8)

console.log(one)

////////////arrow functions///////////

var arrow = (arr8, arr9) => {
    var result = arr8 + arr9
    console.log(result)

}
arrow(4, 5)


/////////////scopes/////////////
function scope() {
    var x = 7 + 10
    return x
}
var y = scope();
console.log(y)

////////////forEach///////////////////
var salaries = [20000, 60000, 70000, 50000]
salaries.forEach((salary, index, arr) => {
    let increment = salary / 10
    salaries[index] = salary + increment
})
console.log(salaries)

///////////SET//////////


// s.add(10)
// s.add(20)
// console.log(s)

// const array1=[20,10,30,10,50,40,50]
// console.log(array1)
// let s = new Set(array1)
// console.log(s);

// let str="javascripttz"
// console.log(str.length)

// let s2= new Set(str)
// s2.delete('z',);
// s2.delete('j')
// console.log(s2)

//for iterating the set
// for(ele of s2){
//     console.log(ele)
// }

// s2.forEach((str1,index)=>{
//     console.log(str1,index)
// })
// const index=s2.entries()
// console.log(index)
// console.log(index.next())

/////////////////////objects/////////////////
var praveen = {
    study: "waste",
    job: "no job",
    survive: "no"
}
// praveen['location']="hyd"
// praveen.fav="AA"
// praveen.study="Btech"
// console.log(praveen['study'])
// console.log(praveen.study)
////
// const movie = new Object()
// movie.name = "puspha"
// movie.budget = 500
// console.log(movie)
// console.log(movie.budget);
/////

// function user(j,k,m,p){
//     this.firstname=j;
//     this.lastname=k;
//     this.qualification =m;
//     this.job=p
//     this.login=function(){
//         console.log("hello"+" "+this.lastname+"logged succesfully")
//     }
// }

// const users1= new user("mehta","praveen","btech","developer")
// console.log(users1)
// const users2= new user("hello","world","deveops","nojob")


// users2['location']='hyd'
// console.log(users2)

////
// const users3= Object.create(users1);
// users3.name="praveen"
// console.log(users3)
// users2.login()
//////////////////console methods///////////////////
const cnsle = "praveen";
console.log("pra");
console.info("meh");
console.warn('error');
console.error("hello");
console.table(praveen)
//

///////////////////////////DOM METHODS/////////////////////
let x = document.getElementById("byid")
console.log(x);
let m = document.getElementsByClassName("byclass")
console.log(m)
let n = document.getElementsByTagName("h1")
console.log(n)
let p = document.querySelector(".byclass")
console.log(p)
let q = document.querySelectorAll('.byclass')
console.log(q)
//////////////////
////////////DOM properties/////////////////
console.log(document.body)

//////////DOM Manipulation////////////////

// let ab = document.createElement('p')

// ab.innerText="this is third paragraph"
// console.log(ab)
// let parent=document.getElementById("first")
// console.log(parent)
// parent.appendChild(ab)

// ////
// let ba= document.createElement("h3")
// ba.innerText="this is centerone"
// let parentTwo= document.getElementById("second")
// let last= document.getElementById("last")
// parentTwo.insertBefore(ba,last)
// last.remove()
// ///
// let child=document.getElementById("new")
// parentTwo.removeChild(child)

// ////
// let df=document.createElement("h1")
// df.innerText="this is h1"
// console.log(df)
// let rep = document.getElementById("pfirst")
// rep.replaceChildren(df)

//////
//////////////////////ADD STYLES // GET ATTRIBUTES AND SET ATTRIBUTES///////////


// var addstyl= document.getElementById("second")
// addstyl.style.color="white"
// addstyl.style.border=" black 2px solid" 
// console.log(addstyl.style);

//////////get attributes and set attributes///////////////////////////
// var addstyl= document.getElementById("second")
// console.log(addstyl.getAttribute("id"))
// console.log(addstyl.getAttribute("class"))
// addstyl.setAttribute("class","second1",)
// console.log(addstyl.getAttribute("class"))
// ////
// var image= document.getElementById("img1")
// image.style.width="200px"
// image.style.height="200px"
// image.setAttribute("src","pose_9.png")
// //
// var forms=document.getElementById("form")
// forms.setAttribute('value','praveen@gmail.com')
// //
// var multiples=document.getElementById('multiple')
// console.log(multiples.getAttribute('class'))
// multiples.classList.add('second2','second3')
// console.log(multiples.classList);
// multiples.classList.remove('second2 ')

/////////////////////////

/////////////////////////EVENTS&& EVENT LISTENERS&&EVENT HANDLERS////////////////
// function change(){
//     document.body.style.backgroundColor="red"
// }

// var bgc= document.getElementById("bg-col")
// bgc.onclick=change1;
// function change1(){
//     document.body.style.backgroundColor="grey"
// }
// //
// bgc.addEventListener('click',change1)

// function change1(e){
//     console.log(this);
//     console.log(e)

//     document.body.style.backgroundColor="yellow"
// }
//
// var k =document.getElementById("keys")
// k.addEventListener('keyup',change3)

// function change3(event){
//     console.log(this)
//     console.log(event)
//     if(event.key ==="p"){
//         alert("avvadu")
//     }
//     k.style.backgroundColor="pink"
// }
/////////////////////////////////////////////
///////////////set timeout and set interval/////////////

// var xy=setTimeout(function(name){
//     alert("hello:"+name)
// },3000,"praveen");
// console.log(xy)
// clearInterval(xy)
// console.log("praveen mehta")

//set Interval
// var y=setInterval(function(){
//     alert("interval time expired")
// },2000)
// count=1
// var yz=setInterval(inter,3000,"itsme")

// function inter(){
//     alert("int:"+count)
//     console.log(count)
//     count ++
//     if(count > 5){
//         clearInterval(yz)
//     }
// }
//////////////////////////////
///////////////FIND,SOME,EVERY/////////////////////

// const city =["vizianagaram","vizag","vijayawada","tirupathi"]

// const cities = city.find(function(ele,index,arr){
//    return ele.startsWith("v")
// })

// const cities = city.filter(function(ele,index,arr){
//     return ele.startsWith("v")
//  })
// console.log(cities)

////every
// var marks=  ["20","30","40","50","60"]

// var s = marks.every(function(ele){
//     return ele>15

// })
// console.log(s)
/////////
// const  state=["hyd","bang","delhi","mumbai"]
// const states= state.some(function(ele){
//     return ele.startsWith("d")
// })
// console.log(states)
/////

// var f=20;
// console.log(this)

//////////////
////////////////////////////json//////////////////////////////

// async function json(){

//     let data= await fetch("index.json")
//       console.log(data)
//    let datjs= await data.json()
//    console.log(datjs)

// }
// json()

// let me=[
//     {
//         "name":"praveen",
//         "district":"vizianagaram",
//         "adresss":{"d.no":"21-31","pin":535002}
//     },
//     {
//         "name":"praveen",
//         "district":"vizianagaram",
//         "adresss":{"d.no":"21-31","pin":535002}
//     }
// ]

// console.log(me)
// console.log(JSON.stringify(me))

// let me1={
//     10:"hello"
// }

///////////////////////////////////////////////////////////////////////////
//////////////////string methods////////////////////////////////////////

var i = "java script"
var j = new String("I AM STRING OBJECT")//another method of creating string
console.log(i.charAt(2));
console.log(j.charAt(5));
console.log(j.charAt());
//
//indexof
console.log(i.indexOf('a'))//1
console.log(i.indexOf('java'))//0
console.log(i.indexOf('z'))///if we try to find the letter which is not there it prints -1
//
//LastIndexOf

console.log(i.lastIndexOf('a'))///it prints the index postion of "a" which is last 
//
//toUpperCase and toLowerCase
/// here original string wont change using both methods
console.log(i.toUpperCase())
console.log(i)
console.log(j.toLowerCase())
console.log(j)
//
//concat
console.log(i.concat(j))///it is used to join two strings
//length
console.log(i.length)//it gives the length of the string
///
//trim
var k = "            javascript isveryhardtolearn                    "
console.log(k)
console.log(k.trim())///it eliminates spaces first and last

///
//split
console.log(i.split("a"))///it splits the string based on the value which we passes annd returns array
console.log(i.split("scr"))
console.log(i.split())
//
//startsWith and endsWith

console.log(i.startsWith("j"))//it checks whether the string starts from j correct its returns true
console.log(i.startsWith("java"))
console.log(i.endsWith("t"))//it check whether the string ends with the letter we entered if its correct it returns true
///
////slice

console.log(i.slice(1, 7))///it used to return the some part of string based on values we passes
console.log(i.slice(-3))///if we  pass negative values  it prints values from backside to frontside based on index position

//substring
//it is same like slice but only difference it wont take negative numbers
console.log(i.substring(1, 7))
console.log(i.substring(-3, -1))
//
//substr
//it takes two values 1.from which position 2.and how much length
console.log(i.substr(1, 7))

//includes
//if u want check the value which we passes is present in string or not
console.log(i.includes("java"))

///charCodeAt
//if u want to check the ASCII of key we pass 
console.log(i.charCodeAt(3))

///repeat
//if u want to repeat the string
console.log(i.repeat(2))

///replace
//if u want replace a particular portion in string for that it will be used
var yx = "javascript is difficult"
console.log(yx.replace("i", "replaced"))//but it only applied for the first value of i encounters
//now if u want to replace where i is there for that we use regular expression
console.log(yx.replace(/i/g, "replaced"))

/////
//////////////////////////"FUNCTION CURRYING"/////////////////////////
//using bind method
// function multiply(x,y){
//     console.log(x*y)
// }

// let multiplecopy= multiply.bind(this,8)
// multiplecopy(9)
// // let multiplecopy= multiply.bind(this,8,9)//in this way also it works
// // multiplecopy()

// /////now using closures

// let multiply1 = function(x){
//     return function(y){
//         console.log(x*y)
//     }
// }
// let multipleByTwo = multiply1(5)
// multipleByTwo(10)

// ///another ways
// let sum2= function sum(a,b,c){
//     return a+b+c
// }
// console.log(sum2(5,5,5))////general way of doing sum
// //now using function currying
//  function curry(a){
//     return function(b){
//         return function(c){
//             return a+b+c
//         }

//     }

//  }
//  console.log(curry(5)(10)(15))

////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////Async and Await///////////////////////////////////////////

//without using await
///here without using await keyword promise object will come not response if we want response then we need to use then method
// async function test2(){
//     let result1 = fetch("sample.text")
//     console.log(result1)
//     result1.then(function(response){

//         response.text().then(function(data){
//             console.log(data)
//         })
//     })
// }


// test2()


//with using await
// async function test1(){

//     let restest = await fetch("sample.text")

//      let response = await restest.text()
//       console.log("inner one")
//       console.log(response)
//     //  console.log(response.then(function(data){
//     //     console.log(data)
//     //  }))
// }
// console.log("outerOne")

// console.log("end")
// test1()
/////////////////////////////////////////////////////
//////////////////////////FETCH API////////////////////////////

// const fch = fetch('https://restcountris.com/v3.1/name/usa')///here fetch make http call and when it success (then) it returns promise
// console.log(fch)
// fch.then(function(response){
//     response.json().then(function(data){
//         console.log(data)
//     })
// })
// fch.catch(function(err){///if promise got rejected it comes to catch
//     console.log(err.message)
// })
// //
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//////////////////////////////////////////////////////////////////////////////
///////////////////////SPREAD OPERATOR////////////////////////////////

const arr5 = [10, 20, 10, 5, 5]
console.log(arr5)
console.log(...arr5)////spread operator takes iterable and expands or separate each element of iterable
/// now if u want to add arr5 into another arr (normally we do for loop and 
//push the result into required array)but using spread operator we can add it as elements to another array 
let arr6 = [25, 25, arr5]
// const arr6 =[25,25,...arr5]
console.log(arr6)

//  var spread= function(spread){///normal method of doing line 733 here the whole array added as a element not separate each element as we saw 732
//     for(let i=0;i>=spread.length;i++){
//       arr6.push(spread[i])
//     }
//     return arr6
//  }
//  console.log(spread(arr5))

///now  combining two arrays
console.log(arr5, arr6)//two arrays added as a two elementS

console.log(...arr5, ...arr6)//two arrays added as a separate elements

///using spread operator in functions
function bread(a, b, c, d) {
    console.log(a + b + c + d)
}
bread(arr5[0], arr5[1], arr5[2], arr5[3], arr5[4])
bread(...arr5)
//////////////////////////////////////////////////////////////////
////////////////////////SPLICE && SLICE//////////////////////////////
// var arr7=[2,3,5,7,9,11,20]
//  var res7= arr7.splice(3,10,8,10,11,12,13,14)

// console.log(arr7)
// console.log(arr7.splice(2,0,21,22,23))
// console.log(arr7)

// //we can also give negative numbers
// var arr8 =[1,2,3,4,5,6]
// console.log(arr8.splice(-3,2,7,8,9))
// console.log(arr8)

// ///slice
// var arr9=[21,22,23,24,25]
// console.log(arr9.slice(0,5))

//////////////////////////////////////////////////////////////////////////
///////////////////////// == vs === //////////////////////

console.log(2 == "2")// ==  checks the value if the value is same it gives true
console.log(2 === "2")// === checks both value and data type if values are same and type is not same it returns false

///////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////MATH OBJECT//////////////////////////////////////////////////
//properties    
// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.SQRT2)
// ///methods
// ///sign
// console.log(Math.sign(10))//1
// console.log(Math.sign(-10))//-1
// console.log(Math.sign(0))//0

// //abs
// console.log(Math.abs(70))//70
// console.log(Math.abs(-70))//70
// //sqrt
// console.log(Math.sqrt(16))//4

// //pow
// console.log(Math.pow(2,5))// 2*2*2*2*2=32

// //max
// console.log(Math.max(7,5,10,20,50))//returns mxm value

// //min
// console.log(Math.min(20,50,1,2))//returns min value

// var zx = [2,5,8,9,10]
// console.log(Math.max(...zx))//using spread operator it works 
// console.log(Math.max(zx))//by normaly it gives o/p as Nan

// //round

// console.log(Math.round(69.58))//round figure 70

// //ceil
// console.log(Math.ceil(69.01))///70

// //floor

// console.log(Math.floor(69.52))//69 removes decimal values

// //trunc
// console.log(Math.trunc(69.5))//69

// //random
// console.log(Math.floor(Math.random()*10))//prints random value

// ///exp
// console.log(Math.exp(2))

// //log
// console.log(Math.log(2))
// console.log(Math.log2(2))
// console.log(Math.log10(2))

////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////Flattening a ARRAY/////////////////////////////////////////////////////////
let arr9 = [1, 2, [3, 4], 5, 6, [8, 9]]
console.log(arr9)
///////////////one method for flattening
console.log(arr9.flat(1))
//////////////second method for flattening
let op = []
function flat(ele) {
    for (x of ele) {
        if (Array.isArray(x)) {
            flat(x)
        }
        else {
            op.push(x)
        }
    }
}
flat(arr9)
console.log(op)
/////
////////////////promises interview question
// var p1 = new Promise((success, fail)=>{
//     setTimeout(()=>{
//         console.log(1);
//         success()
//     },2000)
// })
// console.log(2)
// var p2 = new Promise((success, fail)=>{
//     setTimeout(()=>{
//         console.log(3);
//         success()
//     },1000)
// })
// var p3 = Promise.all([p1,p2]).then(()=> new Promise((success, fail)=>{
//     setTimeout(()=>{
//         console.log(4);
//         success()
//     },500)
// }))
// p3.then(()=>console.log(5))

//////////////////////////////////////////////////////////////////////////////
///////////////////////////DESTRUCTURING/////////////////////////////////////

let dstr = ["sudheer", "sunaina", "prem", "praveen"]

////Normal way of accessing elements in an Array
let one1 = dstr[0]
let two = dstr[1]
let three = dstr[2]
let four = dstr[3]
console.log(one1, two, three, four)
////
//Now using destructuring
let [ek, doh, teen, char] = dstr
console.log(ek, doh, teen, char)

////Now for objects

let persons = {
    name: "praveen",
    job: "unemployed",

    address: {
        city: "vizianagaram",
        state: "andhrapradesh",
        pin: "535002"
    }
}
let { name, job, address: { city, state } } = persons
console.log(name, city, state)
////////////////


