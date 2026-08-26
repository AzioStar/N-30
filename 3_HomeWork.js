// Array.prototype.myPush = function(...el){
//     for (const value of el) {
//         this[this.length] = value
//     }
//     return this.length
// }

// let arr1 = [1,2,3]
// let arr = [1,2,3]
// let res = arr1.push(12,3)
// let res1 = arr.myPush(12,3)
// console.log(arr,arr1)

//===================================================================================

// Array.prototype.myFind = function(callback){
//     for (const el of this) {
//        if(callback(el)){
//         return el
//        }
//     }
//     return undefined
// }

// let arr = [1,2,3,4]

// let res = arr.myFind((el) => el == 20)
// console.log(res)

//===================================================================================

// Array.prototype.MyPop = function(value){
//     if (this.length === 0){
//         return undefined
//     }

//     const Deleted = this[this.length - 1]

//     this.length = this.length - 1

//     return Deleted
// }

// let arr = [1,2,3,4]
// b = arr.MyPop()
// console.log(b)

//===================================================================================

// Array.prototype.MyShift = function(value){
//     if (this.length === 0){
//         return undefined
//     }

//     const Deleted = this[0]

//     for (let i = 0; i < this.length - 1; i++){
//         this[i] = this[i+1]
//     }
//     this.length = this.length - 1
//     return Deleted
// }

// let arr = [1,2,3,4]
// b = arr.MyShift()
// console.log(arr)

//===================================================================================

// Array.prototype.MyUnshift = function(...is){
//     const NewLength = is.length
//     const OldLength = this.length

//     for (let i = OldLength - 1; i >= 0; i--){
//         this[i+NewLength] = this[i]
//     }

//     for (let i = 0; 0 < NewLength; i++){
//         this[i] = is[i]
//     }

//     return this.length
// }

// arr = [1,2,3,4]
// arr.unshift(0)
// console.log(arr)

//=====================================================================================

// Array.prototype.MyIncludes = function(...is){
//     const value = is[0]
//     const index = is[1]
//     if (index >= 0){
//         for (let i = index; i < this.length; i++){
//             if (this[i] === value){
//                 return true
//             }
//         }
//     }else{
//         for (let i = 0; i < this.length; i++){
//             if (this[i] === value){
//                 return true
//             }
//         }
//     }
//     if (index === -1 && value === this[index]){
//         return true
//     }
//     return false
// }

// arr = [1,2,3,4]
// let b = arr.MyIncludes(4,-1)
// console.log(b)

//=====================================================================================

// Array.prototype.MyIndexOf = function(...is){
//     const value = is[0]
//     const index = is[1]
//     const no = -1
//     if (index >= 0){
//         for (let i = index; i < this.length; i++){
//             if (this[i] === value){
//                 return i
//             }
//         }
//         return no
//     }else if (index === no){
//         if (this[index] === value){
//             return index
//         }else{
//             return no
//         }
//     }else{
//         for (let i = 0; i < this.length; i++){
//             if (this[i] === value){
//                 return i
//             }
//         }
//         return no
//     }
// }

// let arr = [1,2,3,4,2]
// let b = arr.MyIndexOf(2,2)
// console.log(b)

//=============================================================================================

// Array.prototype.MyLastIndexOf = function(...is){
//     const value = is[0]
//     const index = is[1]
//     const no = -1

//     if (index >= 0){
//         for (let i = index; i > 0; i--){
//             if (this[i] === value){
//                 return i
//             }
//         }
//         return no
//     }else if (index === no){
//         if (this[index] === value){
//             return index
//         }else{
//             return no
//         }
//     }else{
//         for (let i = this.length; i > 0; i--){
//             if (this[i] === value){
//                 return i
//             }
//         }
//         return no
//     }
    
// }

// let arr = [1,3,1,2,3,4,2]
// let b = arr.MyLastIndexOf(3,5)
// console.log(b)

//===============================================================================================

// Array.prototype.MyAt = function(index){
//     if (index < 0){
//         return (index + this.length <= this.length) ? this[this.length + index] : undefined
//     }else{
//         return (index <= this.length) ? this[index] : undefined
//     }
// }

// let arr = [1,2,3,4,5]
// let b = arr.MyAt(1)
// console.log(b)

//===================================================================================================

// Array.prototype.MyConcat = function(...args) {
//     const result = [...this]

//     for (const i of args) {
//         if (Array.isArray(i)) {
//             for (const item of args) {
//                 result.push(item);
//             }
//         } else {
//             result.push(i)
//         }
//     }
//     return result
// }

// let arr = [1, 2, 3];
// let arr1 = [4, 5];

// let b = arr.MyConcat(arr1, 6, [7, 8]);

// console.log("Result:", b)
// console.log("Original arr:", arr)

//===================================================================================================

// function romanToInt(Value) {
//     const romanMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
//     const symbols = Value.split("")

//     return symbols.reduce((total, Current, index, array) => {
//         const currentValue = romanMap[Current];
//         const nextValue = romanMap[array[index + 1]];

//         return currentValue < nextValue ? total - currentValue : total + currentValue;
//     }, 0)
// }

// console.log(romanToInt("XIV"))

//==================================================================================================

// let arr = [1,2,3,4,5,6,8,9,7]
// if (arr.includes(7)){
//     console.log(`Yes`)
// }else{
//     console.log(`No`)
// }

//==================================================================================================

// let arr = [1,2,4,1,2,4,5,3,2]
// let x = 4
// let result = arr.filter(value => value === x).length
// console.log(result)

//================================================================================================


// let arr = [1, 2, 3, 4, 5, 6];
// let a = 3;
// let b = 5;

// let result = arr.filter((value, index, array) => {
//     if (index >= a && index <= b){
//         console.log(value)
//     }
// });

//=================================================================================================

// let arr = [1,2,3,4,5,6,8]
// let k = 4
// let t = 20

// for (let i in arr){
//     if (arr[i] === k){
//         arr[i] = t
//     }
// }

// console.log(arr)

//==================================================================================

// let arr = [1,2,3,4,7,8,0]

// let result = arr.reduce((largest, current) => {
//     if(current > largest){
//         return current
//     }else{
//         return largest
//     }
// })
// console.log(result)

//==================================================================================

// let arr = [1,2,3,4,7,8,0]
// let num = 3
// let newArr = []
// for (let i = 0; i < num; i++){
//     newArr.push(arr[i])
// }

// console.log(newArr)

//==================================================================================

// let arr = [1]
// let b = 5
// for (let i = 0; i < b; i++){
//     arr.push(arr[i] * 2)
// }

// console.log(arr)
