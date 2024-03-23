
//blocking code
// const getUserSync = (userId) => {
//     const users = {
//         1:{name:'John', age:20},
//         2:{name:'John', age:30},

//     };
//     return users[userId];
// }

// const user = getUserSync(1);
// console.log(user);

// const users = [
//     {id:1, name:'John', age:20},
//     {id:2,name:'John', age:30},
// ];

//non blocking example
// const getUserAsync = (userId, callback) => {
//     const users = {
//         1:{name:'John', age:20},
//         2:{name:'John', age:30},

//     };
    
//     setTimeout(() => {
//         callback(users[userId])
//     }, 1000)
// }

// getUserAsync(1, (user) => {
//     console.log(user);
// });
