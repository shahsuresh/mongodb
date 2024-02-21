use("imdb");
//? deleteOne()=> delete first document which matches the condition.

//? delete movies whose genre is "Drama" and "Thriller"

// db.movies.deleteMany({ $and: [{ genres: "Drama" }, { genres: "Thriller" }] });
// db.movies.deleteMany({ genres: { $all: ["Drama", "Thriller"] } });

//? delete a movie whose name is "Manhattan Love Story"'

// db.movies.deleteOne({ name: "Manhattan Love Story" });

// ? delete movies whose  network country us "Canada"

// db.movies.deleteMany({ "network.country.name": "Canada" });

// ? delete movies whose rating is greater than 8 and less than or equal to 9

// db.movies.deleteMany({
//   $and: [{ "rating.average": { $gt: 8 } }, { "rating.average": { $lte: 9 } }],
// });

db.movies.deleteMany({ "rating.average": { $gt: 8, $lte: 9 } });
