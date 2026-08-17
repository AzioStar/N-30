// let a = 32
// let b = a % 10 
// console.log(a % 10 > (a - b)/10)

//===================================================

// let a = 121
// b = ((a % 10) * 100) + ((Math.floor(a/10)%10)*10) + (Math.floor(a/100))
// if(a === b){
//     console.log(`YES`)
// }else{
//     console.log(`NO`)
// }

//=======================================================

// let a = 248

// for(let i = 0; i <= 3; i++){
//     b = Math.floor(a / 100)
//     c = Math.floor(a/10)%10
//     d = a % 10
//     if(b !== 9){
//         a = 9 * 100 + Math.floor(a/10)%10*10 + a % 10
//         break
//     }else if(c !== 9){
//         a = Math.floor(a / 100) * 100 + 9 * 10 + a % 10
//         break
//     }else if(d !== 9){
//         a = Math.floor(a/100) * 100 + c * 10 + 9
//         break
//     }
// }
// console.log(a)

//=============================================================

// let n = 18

// if (n % 5 === 0) {
//     console.log(n / 5);
// } else if (n % 5 === 3) {
//     console.log(Math.floor(n / 5) + 1);
// } else {
//     console.log(-1);
// }

//======================================================================

// let n = 342542;

// let a = Math.floor(n / 100000);
// let b = Math.floor(n / 10000) % 10;
// let c = Math.floor(n / 1000) % 10;

// let d = Math.floor(n / 100) % 10;
// let e = Math.floor(n / 10) % 10;
// let f = n % 10;

// if (a + b + c === d + e + f) {
//     console.log("YES");
// } else {
//     console.log("NO");
// }