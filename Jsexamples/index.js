// function attachEventListeners(){
//   let count=0;
//   document.getElementById("clickMe").addEventListener("click", function (){
//     console.log("Thanks",++count);
//   })
// }
// attachEventListeners();

function varScoping() {
  var x = 1;

  if (true) {
    x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 2
}
letScoping();

function letScoping() {
  const x = 1;

  if (true) {
    const x = 2;
    console.log(x); // will print 2
  }

  console.log(x); // will print 1
}


// function x(){
//   for(let i=0;i<5;i++){
//     setTimeout(function (){
//       console.log(i);
//     },i*2000);
//   }
// }
// x();

// var b = function xyz(){
//   console.log(xyz);
// }
// b();
// xyz();

setTimeout(function () {
  console.log("Timer");
}, 5000)

function x(y){
  console.log("X");
  y();
}
x(function y(){
  console.log("Y")
})



// let a = 100;
// let c = 6;
// c = 8;
// const x = 16;
// // x = 18;
// console.log(x);
// console.log(c);
// b();
// function b(){
//   let a = 5;
//   console.log(a);
// }
// console.log(a);


// const a = 16;
// function b(){
//   const a = 10;
//   console.log(a);
// }
// b();