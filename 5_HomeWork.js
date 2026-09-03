// const products = [
//     { id: 1, name: "iPhone 15", category: "phone", price: 900, quantity: 5 },
//     { id: 2, name: "Samsung S24", category: "phone", price: 800, quantity: 3 },
//     { id: 3, name: "MacBook Air", category: "laptop", price: 1200, quantity: 2 },
//     { id: 4, name: "Lenovo ThinkPad", category: "laptop", price: 1000, quantity: 4 },
//     { id: 5, name: "AirPods", category: "accessory", price: 200, quantity: 10 }
// ]

// const data = new Map()

// products.forEach(product => {
//     data.set(product.id, product)
// })

// const product = data.get(3)

// console.log(product)

// const p_count = new Map()

// products.forEach(product => {
//     if (p_count.has(product.category)) {
//         p_count.set(
//             product.category,
//             p_count.get(product.category) + 1
//         )
//     } else {
//         p_count.set(product.category, 1)
//     }
// })

// console.log(p_count)

// const c_price = new Map()

// products.forEach(product => {
//     const value = product.price * product.quantity

//     if (c_price.has(product.category)) {
//         c_price.set(
//             product.category,
//             c_price.get(product.category) + value
//         )
//     } else {
//         c_price.set(product.category, value)
//     }
// })

// console.log(c_price)

// let maxCategory = null
// let maxValue = 0

// for (const [category, value] of c_price) {
//     if (value > maxValue) {
//         maxValue = value
//         maxCategory = category
//     }
// }

// console.log(maxCategory)
// console.log(maxValue)

// const categoryProducts = new Map()

// products.forEach(product => {
//     if (!categoryProducts.has(product.category)) {
//         categoryProducts.set(product.category, [])
//     }

//     categoryProducts.get(product.category).push(product)
// })

// console.log(categoryProducts)

//=================================================================================================

// const students = [
//     { id: 1, name: "Ali", group: "A", score: 85 },
//     { id: 2, name: "Vali", group: "B", score: 72 },
//     { id: 3, name: "Hasan", group: "A", score: 95 },
//     { id: 4, name: "Husan", group: "B", score: 88 },
//     { id: 5, name: "Aziz", group: "A", score: 65 },
//     { id: 6, name: "Sardor", group: "B", score: 91 }
// ]

// const g_map = new Map()

// students.forEach(student => {
//     if (!g_map.has(student.group)) {
//         g_map.set(student.group, [])
//     }

//     g_map.get(student.group).push(student)
// })

// const s_map = new Map()

// students.forEach(student => {
//     s_map.set(student.id, student)
// })

// const g_average = new Map()

// for (const [group, students] of g_map) {
//     let total = 0

//     students.forEach(student => {
//         total += student.score
//     })

//     g_average.set(group, total / students.length)
// }

// console.log(g_average)

// const top_students = new Map()

// for (const [group, students] of g_map) {
//     let topStudent = students[0]

//     students.forEach(student => {
//         if (student.score > topStudent.score) {
//             topStudent = student
//         }
//     })

//     top_students.set(group, topStudent)
// }

// console.log(top_students)

// let bestGroup = null
// let bestAverage = 0

// for (const [group, average] of g_average) {
//     if (average > bestAverage) {
//         bestAverage = average
//         bestGroup = group
//     }
// }

// console.log(bestGroup)
// console.log(bestAverage)

//================================================================================================

// const sales = [
//     { userId: 1, productId: 101, amount: 500 },
//     { userId: 2, productId: 102, amount: 300 },
//     { userId: 1, productId: 103, amount: 700 },
//     { userId: 3, productId: 101, amount: 200 },
//     { userId: 2, productId: 103, amount: 400 },
//     { userId: 1, productId: 101, amount: 600 }
// ]

// const u_data = new Map()

// sales.forEach(sale => {
//     if (u_data.has(sale.userId)) {
//         u_data.set(
//             sale.userId,
//             u_data.get(sale.userId) + sale.amount
//         )
//     } else {
//         u_data.set(sale.userId, sale.amount)
//     }
// })

// console.log(u_data)

// let maxUser = null
// let maxAmount = 0

// for (const [userId, amount] of u_data) {
//     if (amount > maxAmount) {
//         maxAmount = amount
//         maxUser = userId
//     }
// }

// console.log(maxUser)
// console.log(maxAmount)

// const p_count = new Map()

// sales.forEach(sale => {
//     if (p_count.has(sale.productId)) {
//         p_count.set(
//             sale.productId,
//             p_count.get(sale.productId) + 1
//         )
//     } else {
//         p_count.set(sale.productId, 1)
//     }
// })

// console.log(p_count)

// let maxProduct = null
// let maxCount = 0

// for (const [productId, count] of p_count) {
//     if (count > maxCount) {
//         maxCount = count
//         maxProduct = productId
//     }
// }

// console.log(maxProduct)
// console.log(maxCount)

// const u_products = new Map()

// sales.forEach(sale => {
//     if (!u_products.has(sale.userId)) {
//         u_products.set(sale.userId, new Map())
//     }

//     const p_map = u_products.get(sale.userId)

//     if (p_map.has(sale.productId)) {
//         p_map.set(
//             sale.productId,
//             p_map.get(sale.productId) + sale.amount
//         )
//     } else {
//         p_map.set(sale.productId, sale.amount)
//     }
// })

// console.log(u_products)

//================================================================================================

// const users = [
//     { id: 1, name: "Ali" },
//     { id: 2, name: "Vali" },
//     { id: 3, name: "Hasan" }
// ]

// const orders = [
//     { id: 101, userId: 1, amount: 500 },
//     { id: 102, userId: 2, amount: 300 },
//     { id: 103, userId: 1, amount: 700 },
//     { id: 104, userId: 3, amount: 200 },
//     { id: 105, userId: 1, amount: 100 }
// ]

// const u_map = new Map()

// users.forEach(user => {
//     u_map.set(user.id, user)
// })

// const o_map = new Map()

// orders.forEach(order => {
//     if (!o_map.has(order.userId)) {
//         o_map.set(order.userId, [])
//     }

//     o_map.get(order.userId).push(order)
// })

// const result = []

// for (const [id, user] of u_map) {
//     const userOrders = o_map.get(id) || []

//     let total_amount = 0

//     userOrders.forEach(order => {
//         total_amount += order.amount
//     })

//     result.push({
//         id: user.id,
//         name: user.name,
//         totalOrders: userOrders.length,
//         total_amount: total_amount
//     })
// }

// console.log(result)

//==============================================================================================

// const messages = [
//     { userId: 1, text: "Salom" },
//     { userId: 2, text: "Hi" },
//     { userId: 1, text: "Qalaysan?" },
//     { userId: 3, text: "Hello" },
//     { userId: 2, text: "Good" },
//     { userId: 1, text: "Yaxshi" }
// ]

// const u_messages = new Map()

// messages.forEach(message => {
//     if (!u_messages.has(message.userId)) {
//         u_messages.set(message.userId, [])
//     }

//     u_messages.get(message.userId).push(message.text)
// })

// console.log(u_messages)

// let maxUser = null
// let maxCount = 0

// for (const [userId, messages] of u_messages) {
//     if (messages.length > maxCount) {
//         maxCount = messages.length
//         maxUser = userId
//     }
// }

// console.log(maxUser)
// console.log(maxCount)

// const two_messages = new Map()

// for (const [userId, messages] of u_messages) {
//     if (messages.length >= 2) {
//         two_messages.set(userId, messages)
//     }
// }

// console.log(two_messages)

// const result = Array.from(u_messages, ([userId, messages]) => ({
//     userId: userId,
//     messageCount: messages.length
// }))

// console.log(result)

//=============================================================================================

// const groupA = ["Ali", "Vali", "Hasan", "Sardor", "Aziz"]
// const groupB = ["Vali", "Hasan", "Jasur", "Sardor", "Bekzod"]

// const setA = new Set(groupA)
// const setB = new Set(groupB)

// const both = new Set(
//     [...setA].filter(student => setB.has(student))
// )

// console.log(both)

// const A = new Set(
//     [...setA].filter(student => !setB.has(student))
// )

// console.log(A)

// const B = new Set(
//     [...setB].filter(student => !setA.has(student))
// )

// console.log(B)

// const totalStudents = new Set([...setA, ...setB])

// console.log(totalStudents)

//============================================================================================

// const text = "Salom Dunyo";

// const u_chars = new Set(text);

// console.log(u_chars);

// console.log(u_chars.size);

// const seen = new Set();
// let first = null;

// for (const char of text) {
//     if (seen.has(char)) {
//         first = char;
//         break;
//     }

//     seen.add(char);
// }

// console.log(first);

// const lowerText = text.toLowerCase();
// const lower_chars = new Set(lowerText);

// console.log(lower_chars);
// console.log(lower_chars.size);

//===================================================================================================

// const text1 = `
// Salom dunyo. World
// `;

// const text2 = `
// Hello World! Salom
// `;

// const first = new Set(
//     text1.toLowerCase().replace(/[.,!?;:]/g, "").split(/\s+/)
// );

// const second = new Set(
//     text2.toLowerCase().replace(/[.,!?;:]/g, "").split(/\s+/)
// );

// const same = new Set(
//     [...first].filter(word => second.has(word))
// );

// const u_text1 = new Set(
//     [...first].filter(word => !second.has(word))
// );

// const u_text2 = new Set(
//     [...second].filter(word => !first.has(word))
// );

// console.log("Text 1:", first);
// console.log("Text 2:", second);
// console.log("Common:", same);
// console.log("Only text 1:", u_text1);
// console.log("Only text 2:", u_text2);

//=======================================================================================================

// const permissions = [
//     "read", "write", "read", "delete",
//     "update", "write", "read", "delete"
// ];

// const required = ["read", "write", "update"];

// const u_data = new Set(permissions);

// console.log(u_data);

// const total = required.every(permission =>
//     u_data.has(permission)
// );

// console.log(total);

// const missing = required.filter(permission =>
//     !u_data.has(permission)
// );

// console.log(missing);

