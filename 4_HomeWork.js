// let a = `B`

// console.log(a.charCodeAt())

//==============================================================

// let a = `d`
// if(a.charCodeAt() >= 97 && a.charCodeAt() <= 122){
//     let result = String.fromCharCode(a.charCodeAt() - 32)
//     console.log(result)
// }else{
//     console.log(`Please enter small letter`)
// }

//==============================================================

// let a = 50
// let result = String.fromCharCode(a)
// console.log(result)

//=================================================================

// let a = `A`
// if(a.charCodeAt() >= 65 && a.charCodeAt() <= 90){
//     let result = String.fromCharCode(a.charCodeAt() + 32)
//     console.log(result)
// }else{
//     console.log(`Please enter upper letter`)
// }

//===================================================================

// let matn = `1.24sad.55==`
// let sign = 0
// let number = 0
// let letter = 0

// for (let i of matn){
//     if (i.charCodeAt() >= 48 && i.charCodeAt() <= 57){
//         number++
//     }else if(i.charCodeAt() >= 65 && i.charCodeAt() <= 90 || i.charCodeAt() >= 97 && i.charCodeAt() <= 122){
//         letter++
//     }else{
//         sign++
//     }
// }
// console.log(`Raqamlar soni ${number}`)
// console.log(`Harflar soni ${letter}`)
// console.log(`Belgilar soni ${sign}`)

//===========================================================================

// let matn = `Salom Dunyo!`
// result = matn.replaceAll("o","")
// console.log(result)

//============================================================================

// let matn = `Salom Dunyo`
// let num = 2
// let s = `*`
// result = ""
// for (let i in matn){
//     if(i % num == 0){
//         result+=s
//     }else{
//         result+=matn[i]
//     }
// }
// console.log(result)

//===========================================================================

// let matn = `Salom Dunyo`
// let result = {}
// for (let i = 0; i < matn.length; i++){
//     const a = matn[i]
//     if (result[a] === undefined){
//         result[a] = 1
//     }else{
//         result[a]++
//     }
// }

// let maxVal = 0
// let maxCount = 0
// let minVal = 0
// let minCount = Infinity
// let count = 1

// for (let i in result){
//     if(result[i] > maxCount){
//         maxVal = i
//         maxCount = result[i]
//         count = 0
//     }
//     if(result[i] < minCount){
//         minCount = result[i]
//         minVal = i
//     }
//     if(maxCount == result[i]){
//         count++
//     }
// }

// if(count < 2){
//     console.log(`${maxVal}: ${maxCount}`)
// }else{
//     console.log(`${minVal}: ${minCount}`)
// }

//=======================================================================================

// let matn = `Salom`
// let arr = matn.split("")
// let result = arr.reduce((acc,value) =>{
//     const code = value.charCodeAt()
//     return acc += code
// },0)

// console.log(Math.floor(result / matn.length))

//=====================================================================================

// let matn = `Salom`
// let matn1 = `Dunyom`
// let result = []

// for(let i of matn){
//     for(let j of matn1){
//         if (i === j){
//             result.push(i)
//         }
//     }
// }
// console.log(result.length)

//========================================================================================

// let a = 2
// console.log(Math.abs(a)+a**3)

//=========================================================================================

// let arr = [4,4,4,4,4,4]
// let up = 1
// let down = 1
// let equal = 1

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] < arr[i+1]){
//         up += 1
//     }else if(arr[i] > arr[i+1]){
//         down += 1
//     }else if(arr[i] === arr[i+1]){
//         equal += 1
//     }
// }

// if (up == arr.length){
//     console.log(`O'suvchi`)
// }else if(down == arr.length){
//     console.log(`Kamayuvchi`)
// }else if(equal == arr.length){
//     console.log(`Teng`)
// }else{
//     console.log(`Aralash`)
// }

//==========================================================================================

// let arr = [8,8,0,4,4,4,0]
// let k = 2
// let l = 5
// let count = 0

// for(let i = k; i <= l; i++){
//     count += arr[i]
// }

// console.log(count)