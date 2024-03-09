use("imdb");

// ? comparison operator
// ? $eq, $lt, $lte, $gt,$gte, $ne

// ? find movies whose language is Japanese

// db.movies.find({ language: "japanese" });

// ?find movies whose runtime is less than 30

// db.movies.find({ runtime: { $lt: 30 } });

// ? find movies whose runtime is greater than 90

// db.movies.find({ runtime: { $gt: 90 } });

// ? find movies whose rating is less than or equal to 6

// db.movies.find({ "rating.average": { $lte: 6 } });

//? find movies whose language is not English

// db.movies.find({ language: { $ne: "English" } });

//? find movies whose status is not "Ended"

// db.movies.find({status:{$ne:"Ended"}})

//? find movies whose weight is not 75

// db.movies.find({ weight: { $ne: 75 } });

//? Find movies whose genre includes "Thriller"

// db.movies.find({ genres: "Thriller" });

//? Find movies whose genre includes "Crime"

// db.movies.find({ genres: "Crime" });

//? logical operator
//$and,$or,$not,$nor

//? find movies whose weight is greater than 75 and rating is greater than 7
// db.movies.find(
//   {
//     $and: [{ weight: { $gt: 75 } }, { "rating.average": { $gt: 7 } }],
//   },
//   { _id: 0, name: 1 }
// );

//? find movies whose genre is "Drama" and "Crime"

// db.movies.find({ $and: [{ genres: "Drama" }, { genres: "Crime" }] });

//? Find movies whose network country name is "United States" and status is "Running"

// db.movies.find({
//   $and: [{ "network.country.name": "United States" }, { status: "Running" }],
// });

//? Find movies whose rating is greater than 7 and less than equal to 9

// db.movies.find({
//   $and: [{ "rating.average": { $gt: 7 } }, { "rating.average": { $lte: 9 } }],
// });

//? equivalent code of above
// db.movies.find({ "rating.average": { $gt: 7, $lte: 9 } });

//? $or

//? find movies whose rating is greater than 8 or genere is "Thriller"

// db.movies.find({
//   $or: [{ "rating.average": { $gt: 8 } }, { genres: "Thriller" }],
// });

//? find movies whose id is less than 5 or runtime is less than 30

// db.movies.find({ $or: [{ id: { $lt: 5 } }, { runtime: { $lt: 30 } }] });

// ? find movies whose rating average is not 9
// db.movies.find({ "rating.average": { $ne: 9 } });

//? $not

//find movies whose genre doesn't include thriller

// db.movies.find({ genres: { $ne: "Thriller" } });

//? find movies whose status is not ended

// db.movies.find({ status: { $ne: "Ended" } });

//? find movies whose genre is neither thriller not "Drama"

//? $nor

// db.movies.find({ $nor: [{ genres: "Thriller" }, { genres: "Drama" }] });

//? find movies whose status is neither "Running" nor language is "English"

// db.movies.find({ $nor: [{ status: "Running" }, { language: "English" }] });

//? $in

// db.movies.find({
//   $or: [
//     { "rating.average": 7 },
//     { "rating.average": 7.5 },
//     { "rating.average": 8 },
//     { "rating.average": 8.5 },
//     { "rating.average": 9 },
//     { "rating.average": 9.3 },
//   ],
// });

//equivalent code using $in

// db.movies.find({ "rating.average": { $in: [7, 7.5, 8, 8.5, 9, 9.3] } });

//? find movies whose genre is neither "Thriller" nor "Crime" nor "Supernatural"

// db.movies.find({
//   $nor: [
//     { genres: "Thriller" },
//     { genres: "Crime" },
//     { genres: "Supernatural" },
//   ],
// });

//? $nin => if nor is applied on same field we can use $nin

// same code using $nin
// db.movies.find({ genres: { $nin: ["Thriller", "Crime", "Supernatural"] } });
