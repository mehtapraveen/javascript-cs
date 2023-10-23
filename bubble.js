//////////event bubbling
//event bubbling bydefault takes false ,it propagates up the hierachary
// document.querySelector('#grandparent')
// .addEventListener('click',()=>{
//     console.log("grandparent Called")
// },false)
// document.querySelector('#parent')
// .addEventListener('click',()=>{
//     console.log("parent Called")
// },false)
// document.querySelector('#child')
// .addEventListener('click',()=>{
//     console.log("child Called")
// },false)


////event capturing //true.It trickles down the hierachary.according to w3c first captures and then bubbles out 
////we can control the propagation by using boolean values called true/false.
// document.querySelector('#grandparent')
// .addEventListener('click',()=>{
//     console.log("grandparent Called")
// },true)
// document.querySelector('#parent')
// .addEventListener('click',()=>{
//     console.log("parent Called")
// },false)
// document.querySelector('#child')
// .addEventListener('click',()=>{
//     console.log("child Called")
// },false)


////for to stop event bubbling or CAPTURING
// document.querySelector('#grandparent')
// .addEventListener('click',(e)=>{
//     console.log("grandparent Called")
//     e.stopPropagation()////by using this we can stop bubbling or capturing
// },true)
// document.querySelector('#parent')
// .addEventListener('click',()=>{
//     console.log("parent Called")
// },true)
// document.querySelector('#child')
// .addEventListener('click',()=>{
//     console.log(" Called")
// },true)

///////////////////////////////////////////////////////////////////////////////////
////////////////////////////////DEBOUNCING////////////////////////////////////////////
let counter = 0
function data() {
   console.log('fetching data', counter++)
}
// function debounce(fn,d){
//    let timer;

//    return (...args)=>{

//       clearTimeout(timer)
//    timer = setTimeout(()=>{
//          fn.apply(this,args)
//       },d)
//    }
// }
// function debounce(func,d){
//    let timer
//    return function(){
//       let context = this,
//       args = arguments
//       clearTimeout(timer)
//      timer = setTimeout(()=>{
//          func.apply(context,arguments)
//       },d)
//    }
// }
// let betterFunction= debounce(data,300)

////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////THROTTLING/////////////////////////////////////////
///normal way
const logFunc = () => {
   console.count("throttle called")
}
// window.addEventListener('resize',logFunc)
///////
///////using throttling
let throttle = (func, limit) => {
   flag = true
   return function () {
      let context = this,
         args = arguments
      if (flag) {
         func.apply(context, arguments)
         flag = false;
         setTimeout(() => {
            flag = true
         }, limit)
      }
   }
}

let loggerFunction = throttle(logFunc, 1000)
window.addEventListener('resize', loggerFunction)



////button throttling 
document.querySelector('#throat')
   .addEventListener('click', loggerFunction)