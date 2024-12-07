// 1.

// const arrays = [
//     42,
//     true,
//     "hello wolrd",
//     {
//         name: "john",
//         age: 25,
//         isStudent: false,
//     },
//     false,
//     3.14,
//     "javascript is fun !",
// ];

// const stringarrays = arrays.map(element => String(element))
// console.log(stringarrays)


// 2. 

// const arrays = [
//         42,
//         true,
//         "hello wolrd",
//         {
//             name: "john",
//             age: 25,
//             isStudent: false,
//         },
//         false,
//         3.14,
//         "javascript is fun !",
//     ];

//     let newArr = arrays.filter(function(element)  {
//         return typeof element === "number"
//     })

//     console.log(newArr);
    

// 3.




// const arrays = [
//     42,
//     true,
//     "hello wolrd",
//     {
//         name: "john",
//         age: 25,
//         isStudent: false,
//     },
//     false,
//     3.14,
//     "javascript is fun !",
// ];


//  arrays.forEach(function(element){
//    console.log(typeof element);
   
//  })
 

// 4.


// const arrays = [
//     42,
//     true,
//     "hello wolrd",
//     {
//         name: "john",
//         age: 25,
//         isStudent: false,
//     },
//     false,
//     3.14,
//     "javascript is fun !",
// ];
// const sumOfNumbers = arrays.reduce(function(accumulator, element) {
//     return typeof element === "number" ? accumulator + element : accumulator;
// }, 0); 

// console.log(sumOfNumbers);


// 5.

// const arrays = [
//     42,
//     true,
//     "hello wolrd",
//     {
//         name: "john",
//         age: 25,
//         isStudent: false,
//     },
//     false,
//     3.14,
//     "javascript is fun !",
// ];


// const findboolean = arrays.find( element => typeof element === "boolean")
// console.log(findboolean);

// 6.

// const arrays = [
//     42,
//     true,
//     "hello wolrd",
//     {
//         name: "john",
//         age: 25,
//         isStudent: false,
//     },
//     false,
//     3.14,
//     "javascript is fun !",
// ];
 
// const find = arrays.findIndex( element => typeof element === "object")
// console.log(find);


// 7.

// const arrays = [
//     42,
//     true,
//     "hello wolrd",
//     {
//         name: "john",
//         age: 25,
//         isStudent: false,
//     },
//     false,
//     3.14,
//     "javascript is fun !",
// ];
//  const Number = arrays.some(element => typeof element === "number");

//  console.log(Number);

//  8.

// const arrays = [
//     42,
//     true,
//     "hello wolrd",
//     {
//         name: "john",
//         age: 25,
//         isStudent: false,
//     },
//     false,
//     3.14,
//     "javascript is fun !",
// ];

// const allAreStrings = arrays.every(element => typeof element === "string");

// console.log(allAreStrings);