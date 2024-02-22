// ?one to one =>
// e.g one vehicle has one ownerDetails, one person has one national identity card
// ? one to many =>
// e.g. one person can play multiple games in sport week
// ?many to many => one to many from both direction
// e.g. one student can enroll in multiple courses in broadway
// and one course has multiple students

//use("imdb");

//? Example 1

// db.owners.insertMany([
//   { name: "Kamal", address: "Surkhet" },
//   { name: "Laxman", address: "Lalitpur" },
//   { name: "Arun", address: "Tripureshwor" },
// ]);

// db.owners.find();

// db.vehicles.insertOne({
//   name: "FZ",
//   brand: "Yamaha",
//   cc: 250,
//   color: "blue",
//   ownerId: ObjectId("65d620401dcb07bee0d1203f"),
// });

//? $lookup

// db.vehicles.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $lookup: {
//       from: "owners",
//       localField: "ownerId",
//       foreignField: "_id",
//       as: "OwnerDetails",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       brand: 1,
//       color: 1,
//       ownerName: { $first: "$OwnerDetails.name" },
//     },
//   },
// ]);

//? Example 2

use("relation");

//? creating "courses" table and insert some data

// db.courses.insertMany([
//   {
//     name: "MERN",
//     duration: 90,
//   },
//   {
//     name: "Python",
//     duration: 45,
//   },

//   {
//     name: "Devops",
//     duration: 65,
//   },

//   {
//     name: "AI",
//     duration: 90,
//   },
//   {
//     name: "Flutter",
//     duration: 55,
//   },
// ]);

//? create "students" table and insert some data

// db.students.insertOne({
//   name: "Ranjan",
//   address: "Kalanki",
//   email: "rina@gmail.com",
//   enrolledCourseIds: [
//     ObjectId("65d628857bfa9c5ba5c07280"),
//     ObjectId("65d628857bfa9c5ba5c07283"),
//   ],
// });

// db.students.insertOne({
//   name: "Sumitra",
//   address: "Tinkune",
//   email: "sumitra@gmail.com",
//   enrolledCourseIds: [
//     ObjectId("65d628857bfa9c5ba5c07281"),
//     ObjectId("65d628857bfa9c5ba5c07280"),
//   ],
// });

// db.students.aggregate([
//   {
//     $match: {},
//   },
//   {
//     $lookup: {
//       from: "courses",
//       localField: "enrolledCourseIds",
//       foreignField: "_id",
//       as: "StudentCourseDetails",
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       email: 1,
//       "StudentCourseDetails.name": 1,
//       "StudentCourseDetails.duration": 1,
//     },
//   },
// ]);

//? lookup from "courses" side

db.courses.aggregate([
  {
    $match: {},
  },
  {
    $lookup: {
      from: "students",
      localField: "_id",
      foreignField: "enrolledCourseIds",
      as: "StudentData",
    },
  },
  {
    $project: {
      _id: 0,
      name: 1,
      duration: 1,
      "StudentData.name": 1,
      "StudentData.email": 1,
    },
  },
]);
