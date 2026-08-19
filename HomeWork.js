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

//============================================================================

// let n = 9220
// let xona = 1

// while (Math.floor(n / (xona * 10)) > 0) {
//     xona *= 10
// }

// let x = xona
// while (x >= 1) {
//     let raqam = Math.floor((n / x) % 10)
//     if (raqam !== 9) {
//         n += (9 - raqam) * x
//         break
//     }
//     x = Math.floor(x / 10)
// }
// console.log(n)

//===================================================================================

// let n = 9996
// let reverse = 0
// while(n){
//     reverse = reverse * 10 + n % 10
//     if(n%10 == 0){

//     }
//     n = Math.floor(n / 10)
// }
// let correct = 0
// let bool = true

// while(reverse){
//     if(reverse % 10 != 9 && bool){
//         correct = correct * 10 + 9
//         bool = false
//     }else{
//         correct = correct * 10 + reverse % 10
//     }
//     reverse = Math.floor(reverse / 10)
// }
// console.log(correct)

//=======================================================================================

// let n = 24
// let count = 0

// while(true){
//     if(n < 3){
//         count = -1
//         break
//     }
//     if(n % 5 == 0){
//         count += n / 5
//         break
//     }else{
//         n = n - 3
//         count += 1
//     }
// }
// console.log(count)

//======================================================================================

// let n = 123321
// let son = n
// let count = 0
// let sum = 0
// while(n){
//     n = Math.floor(n / 10)
//     count += 1
// }

// if(count != 6){
//     console.log("NO")
// }else{
//     while(son){
//         if(count > 3){
//             sum += son % 10
//             count -= 1
//         }else{
//             sum -= son % 10
//         }
//         son = Math.floor(son / 10)
//     }
// }
// if(sum == 0){
//     console.log("YES")
// }else{
//     console.log("NO")
// }
