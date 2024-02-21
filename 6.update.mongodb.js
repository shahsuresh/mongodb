use("imdb");

// db.friends.updateOne({ name: "Alish" }, { $set: { name: "Laxman" } });
// db.friends.find();

// db.friends.updateOne(
//   { name: "Laxman" },
//   { $set: { name: "Jibana", age: 21, contactNumber: "9876543210" } }
// );

// db.friends.find();

//? update name from prakash to "Prithvi",age to 22, and contactNumber to

// db.friends.updateOne(
//   { _id: ObjectId("659fbbac8e46b28b92d7033c") },
//   { $set: { name: "Prithvi", age: 22, contactNumber: "9876543220" } }
// );

//? update name from Nischal to "S", age to 20 and contactNumber to"9845236742"
//and also isNepali to true

// db.friends.updateOne(
//   { name: "Nischal" },
//   {
//     $set: {
//       name: "Suresh",
//       age: "22",
//       contactNumber: "9845236742",
//       isNepali: true,
//     },
//   }
// );

//? $inc=> increase value by given number

//? update age of "Jibana " by 40

// db.friends.updateOne({ name: "Jibana" }, { $inc: { age: 40 } });

// db.friends.find();

//? increase age of all friends by 10

// db.friends.updateMany({}, { $inc: { age: 10 } });

//? $mul => multiplies field by provided value

// db.friends.updateOne({ name: "Suresh" }, { $mul: { age: 2 } });

//? divide age of suresh by 2

db.friends.updateOne({ name: "Suresh" }, { $mul: { age: 0.5 } });

db.friends.find();
