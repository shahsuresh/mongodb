// evaluation operator
//? $regex
//? expr

//? $regex

use("imdb");

//? find movies whose summary includes "starling City"

// db.movies.find({ summary: { $regex: "Starling City", $options: "i" } });

//? find movies whose summary includes "Pacific"

// db.movies.find({ summary: { $regex: "Pacific", $options: "i" } });

//? find movies whose name includes "Morty"

// db.movies.find({ name: { $regex: "Morty", $options: "i" } });
// db.movies.find({ name: { $regex: "man", $options: "i" } }, { name: 1 });

//? $expr
// db.sales.insertMany([
//   {
//     name: "TV",
//     order: 100,
//     volume: 50,
//   },
//   {
//     name: "Bottle",
//     order: 70,
//     volume: 150,
//   },
//   {
//     name: "Mouse",
//     order: 25,
//     volume: 10,
//   },
//   {
//     name: "Rice",
//     order: 10,
//     volume: 500,
//   },
// ]);

//? find products whose order is greater than volume

// db.sales.find({ $expr: { $gt: ["$order", "$volume"] } });

// db.sales.find({ order: { $gt: 50 } });

//? find orders which is less than volume

// db.sales.find({ $expr: { $lt: ["$order", "$volume"] } });

//? $text
// db.sales.find({ $text: { $search: "Rice" } });
