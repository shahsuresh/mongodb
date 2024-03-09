//? array operator
// array read operations
//? $all, $elemMatch, $size

use("imdb");
// db.students.insertMany([
//   {
//     name: "Manish",
//     favoriteSingers: ["Arijit", "Menuka", "Shreya"],
//     hobbies: [
//       {
//         name: "Badminton",
//         frequency: 5,
//       },
//       {
//         name: "PubG",
//         frequency: 7,
//       },
//       {
//         name: "Dancing",
//         frequency: 2,
//       },
//     ],
//   },

//   {
//     name: "Sona",
//     favoriteSingers: ["Sonu", "Narayan", "Pramod"],
//     hobbies: [
//       {
//         name: "Singing",
//         frequency: 4,
//       },
//       {
//         name: "Football",
//         frequency: 5,
//       },
//       {
//         name: "Volleyball",
//         frequency: 3,
//       },
//     ],
//   },

//   {
//     name: "Arun",
//     favoriteSingers: ["Aatif", "Sushant", "Udit"],
//     hobbies: [
//       {
//         name: "PubG",
//         frequency: 5,
//       },
//       {
//         name: "Singing",
//         frequency: 7,
//       },
//       {
//         name: "Bikes",
//         frequency: 2,
//       },
//     ],
//   },
// ]);

// db.students.insertOne({
//     name: "Rina",
//     favoriteSingers: ["Neha", "Tony"],
//     hobbies: [
//       {
//         name: "Dancing",
//         frequency: 10,
//       },
//     ],
//   });

//? find students whose fav singer includes"Arijit" and "Shreya"

// db.students.find({
//   $and: [{ favoriteSingers: "Arijit" }, { favoriteSingers: "Shreya" }],
// });

// alternative code using $all

//? $all

// db.students.find({ favoriteSingers: { $all: ["Arijit", "Shreya"] } });
// db.students.find({ favoriteSingers: { $in: ["Arijit", "Menuka"] } });

//? $size

// size doesn't accept range such as $gt, $lt etc

//? find students who has two favorite singer

// db.students.find({ favoriteSingers: { $size: 2 } });

//? find students who has three favorite singers

// db.students.find({ favoriteSingers: { $size: 3 } });

//? find students who have only one hobby

// db.students.find({ hobbies: { $size: 1 } });

//? $elemMatch
// matches the element in same object

//? find students whose hobbies is PubG and frequency is greater than 6

// db.students.find({
//   hobbies: { $elemMatch: { frequency: { $gt: 6 }, name: "PubG" } },
// });

//? find students whose hobby is singing and frequency is greater than or equals to 5

// db.students.find({
//   hobbies: { $elemMatch: { frequency: { $gte: 5 }, name: "Singing" } },
// });
// db.students.find();

//? find students whose hobby is "Badminton" and frequency is 5

// db.students.find({
//   hobbies: { $elemMatch: { name: "Badminton", frequency: 5 } },
// });

// db.students.find({
//   hobbies: { $elemMatch: { frequency: { $gte: 10 }, name: "Dancing" } },
// });

// db.friends.find({
//   $and: [
//     { hobbies: { $all: ["Cycling", "gardening"] } },
//     { hobbies: { $size: 2 } },
//   ],
// });
