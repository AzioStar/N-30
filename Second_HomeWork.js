// function start(){
//     console.log(`Uyga vazifa boshlandi`)
// }

// start()

//================================================

// function age(a){
//     return (a >= 18) ? `Voyaga yetgan` : `Voyaga yetmagan`
// }

// console.log(age(15))

//===================================================================

// function check(a,b){
//     return (a < b) ? a : b
// }

// console.log(check(10,20))


//========================================================================

// function recursive(a,b=2,i=1, total = 0){
//     if(i > a){
//         return total
//     }
//     total += b * b
//     return recursive(a,b,i+=1,total)
// }

// console.log(recursive(3))

//========================================================================

// function digits(a, count=0){
//     if(a === 0){
//         return count
//     }
//     return digits(Math.floor(a / 10), count+=1)
// }

// console.log(digits(125475))

//=========================================================================

// function sum(a,count = 0, i = 0){
//     if(i === a){
//         return 0;
//     }
//     i += 1
//     if(i%2 === 0){
//         return (count + i) + sum(a,count,i)
//     }else{
//         return sum(a,count,i)
//     }
// }

// console.log(sum(4))

//================================================================================

// function reverse(a,b=0){
//     if(a === 0){
//         return b
//     }
//     b = b * 10 + a%10
//     return reverse(Math.floor(a/10), b)
// }

// console.log(reverse(3473))

//====================================================================================

// function show(name){
//     console.log(`Salom ${name}`)
// }

// function send(name, callback){
//     callback(name)
// }

// send(`Azio`, show)

//=====================================================================================

// function result(n){
//     console.log(n)
// }

// function check(a, b, callback){
//     callback((a > b) ? `Birinchi son katta` : `Ikkinchi son katta`)
// }

// check(20, 35, result)

//=======================================================================================

function Print(){
    console.log(`2 soniya o'tdi`)
}

function timeCount(callback){
    setTimeout(callback, 2000)
}

timeCount(Print)