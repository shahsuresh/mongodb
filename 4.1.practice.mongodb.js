use("netflix");

// db.movie.insertOne({
//   name: "Cast Away",
//   leadActor: "Tom Hanks",
//   releaseYear: 2002,
//   length: 90,
// });
//?add two movies

// db.movie.insertMany([
//   {
//     name: "Chakka Panja",
//     leadActor: "Dipak Raj Giri",
//     releaseYear: 2017,
//     length: 180,
//   },
//   {
//     name: "12th fail",
//     leadActor: "Vikrant Massey",
//     releaseYear: 2023,
//     length: 90,
//   },
// ]);

//? find movies whose length is 90
// db.movie.find({ length: 90 });

//? find movie whose lead actor is "Vikrant Massey"
// db.movie.findOne({ leadActor: "Vikrant Massey" });

//? Find movie whose name is " Chakka Panja"

// db.movie.findOne({ name: "Chakka Panja" });

//? find movies whose release year is 2017

// db.movie.find({ releaseYear: 2017 });

// ? change releaseYear of chakka panja to 2020

// db.movie.updateOne({ name: "Chakka Panja" }, { $set: { releaseYear: 2020 } });

//? change length of movie cast away to 90 minutes and release year to 2000
// db.movie.updateOne(
//   { name: "Cast Away" },
//   { $set: { length: 90, releaseYear: 2000 } }
// );

//? update those movies whose length is 90 to 105

// db.movie.updateMany({ length: 90 }, { $set: { length: 105 } });

//? delete movie whose main role is "Dipak Raj Giri"
// db.movie.deleteOne({ leadActor: "Dipak Raj Giri" });

//? delete movies whose length is 105
// db.movie.deleteMany({ length: 105 });

db.movie.find();
