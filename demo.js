let a = document.getElementById("ip")

let b= document.getElementById("data")

let c=document.getElementById("country")

a.addEventListener('click' ,ajdata)

// function ajdata(){

//   let  xhr = new XMLHttpRequest()

//   xhr.open('GET','demo.txt',true);
//    console.log(data)
//    xhr.send();

//    xhr.onprogress=function(){
//        b.innerText="loading....."
//    };

 

//    xhr.onload= setTimeout (function(){
//        b.innerText = xhr.responseText
//    },5000 )

  
// }

// function ajdata(){
//     let xh = new XMLHttpRequest()
//     xh.open('GET','demo.json',true)
//     xh.send()
    
//     xh.onload=function(){

//         if(xh.status == 200){
//             let result = xh.responseText
//             result = JSON.parse(result)
//             console.log(result)
    
    
//         let str = `<table border ='2'><tr>`
//         for(key in result){
//             str = str+`<th>${key}</th>`
//         }
    
//         str = str+`</tr><tr>`
//         for(key in result){
//             str = str+`<td>${result[key]}</td>`
//         }
//         str=str+`</tr></table>`
//         b.innerHTML= str
//         }
//         else{
//             b.innerText= xh.statusText
//         }
       

// }
// }

// function ajdata(){

//     if(c.value){
//       let Url=  `https://restcountries.com/v3.1/name/${c.value}`
  
//     let xr = new XMLHttpRequest()
//     xr.open('GET',Url,true)
//     xr.send()


//     xr.onload= setTimeout(function(){
//         if(xr.status==200){
//           let  result = xr.responseText
//           result= JSON.parse(result)
//           let [country]=result
//           console.log(country)
//             b.innerText=null
//             b.innerHTML=`<img src=${country.flags.png}>` 
//         }
//         else{
//             b.innerText=xr.statusText
//         }
//     },2000)
    
//     xr.onprogress=  function(){
//         b.innerText ="loading.."
//       }

//     }

  // }



