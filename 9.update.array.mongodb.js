use("imdb");

//? Array update operators

//? $push,$pop,$pull,$pullAll

//? $push => adds new data to the end of array

// db.friends.updateOne({ name: "Suresh" }, { $push: { hobbies: "Dancing" } });

//? push multiple items in array using "$each" one by one
// db.friends.updateOne(
//   { name: "Suresh" },
//   { $push: { hobbies: { $each: ["Singing", "Riding"] } } }
// );

//? $addToSet => push value to array if that item is not already there

// db.friends.updateOne({ name: "Suresh" }, { $addToSet: "Cycling" });
// db.friends.find();
// Find all documents in the users collection where the hobbies array contains
// both "reading" and "gardening" and the array size is exactly 2.

//? add hiking and cricket to hobbies Prithvi

// db.friends.updateOne(
//   { name: "Prithvi" },
//   { $addToSet: { hobbies: { $each: ["Dancing", "Cricket"] } } }
// );

//?add cycling and driving to Jibana's hobbies
// db.friends.updateOne(
//   { name: "Jibana" },
//   { $addToSet: { hobbies: { $each: ["Cycling", "Driving"] } } }
// );

//? add sub:English and point 61 to Jibana's Score
db.friends.updateOne(
  { name: "Jibana" },
  { $addToSet: { scores: { sub: "English", point: 61 } } }
);

//? $pop => removes item from start and end of array

// 1 => removes value from end of array i.e last element of an array
// -1 => removes value from start of an array i.e first element

// db.friends.updateOne({ name: "Suresh" }, { $pop: { hobbies: -1 } });

//? $pull => removes item based on condition

// removes score from suresh whose point is greater than 60

// db.friends.updateOne(
//   { name: "Suresh" },
//   {
//     $pull: {
//       scores: { point: { $gt: 60 } },
//     },
//   }
// );

//remove cycling from Laxman's hobbies

// db.friends.updateOne(
//   { name: "Laxman" },
//   {
//     $pull: {
//       hobbies: "Cycling",
//     },
//   }
// );
// db.friends.find();

//? remove "Cricket" and "Basketball" from prithvi's hobbies

// db.friends.updateOne(
//   { name: "Prithvi" },
//   {
//     $pull: {
//       hobbies: { $in: ["Cricket", "Basketball"] },
//     },
//   }
// );

//? $pullAll => removes all matching value from an array

// db.friends.updateOne(
//   { name: "Unique" },
//   {
//     $pullAll: {
//       hobbies: ["Gaming", "Dancing"],
//     },
//   }
// );

db.friends.find();
