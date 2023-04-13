// <------------TASK 1----------->
// let data = [{
//         name: 'Daniel',
//         age: 45
//     },
//     {
//         name: 'John',
//         age: 34
//     },
//     {
//         name: 'Robert',
//         age: null
//     },
//     {
//         name: 'Jen',
//         age: undefined
//     },
//     {
//         name: null,
//         age: undefined
//     }
// ];
// const Checkdata = () => {
//     data.map((d) => {
//         if (
//             d.name === undefined ||
//             d.name === null ||
//             d.age === undefined ||
//             d.age === null
//         ) {
//             return;
//         } else {
//             console.log(d);
//         }
//     });
// };
// Checkdata();


// <------------TASK 2----------->
// const students = [{
//         name: "Leyla",
//         points: 500
//     },
//     {
//         name: "Akif",
//         points: 500
//     },
//     {
//         name: "Fikret",
//         points: 3000
//     },
//     {
//         name: "Rashad",
//         points: 500
//     },
//     {
//         name: "Turkan",
//         points: 1900
//     },
//     {
//         name: "Sabir",
//         points: 1000
//     },
//     {
//         name: "Idris",
//         points: 340
//     },
//     {
//         name: "Nijat",
//         points: 940
//     },
//     {
//         name: "Ismet",
//         points: 1780
//     },
// ];

// function IncreasePoints() {
//     students.map((student) => {
//         student.points += 30;
//         console.log((student));
//     })
// }
// IncreasePoints();



// <------------TASK 3----------->
// let bdays = ['08-14', '10-4', '04-21', '08/14', '10/04', '04/21'];
// console.log(bdays.toString().replaceAll("-", "/"));



// <------------TASK 4----------->
// let numbers = [1.5, 2.56, 5.1, 12.33];
// for (let i = 0; i < numbers.length; i++) {
//     let num = Math.round(numbers[i]);
//     let nums = Math.round(numbers[i]);
//     console.log(num, nums);
// }



// <------------TASK 5----------->
// const b = "5,4,3,2,1";
// const arr = b.split(",").reduce((num1, num2) => Number(num1) + Number(num2), 0);
// console.log(arr);