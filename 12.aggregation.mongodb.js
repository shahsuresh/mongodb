//? pipeline stages
//$match
//$sort
//$limit
//$skip
//$project
//$group
//$unwind
//$lookup

//? aggregate is read operation
//? $match => It is a filter stage, Similar to read operation

use("imdb");
// db.movies.aggregate([
//   {
//     $match: { status: "Ended", "rating.average": { $gte: 7 } },
//   },
// ]);

//? $project => select field to display

// db.movies.aggregate([
//   {
//     $match: { status: "Ended", "rating.average": { $gte: 8 } },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       //rating: 1,
//       averageRating: "$rating.average",
//     },
//   },
// ]);

// db.movies.aggregate([
//   {
//     $match: { "rating.average": { $gte: 8 } },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       //rating: 1,
//       averageRating: "$rating.average",
//       genres: 1,
//       FirstGenre: { $first: "$genres" },
//       SecondGenre: { $arrayElemAt: ["$genres", 1] },
//     },
//   },
// ]);

//? $sort => sort documents based upon value and field provided
//? 1 => Ascending Order
//? -1 => Descending Order
db.movies.aggregate([
  {
    $match: { "rating.average": { $gte: 8 } },
  },
  {
    $project: {
      _id: 0,
      name: 1,
      //rating: 1,
      averageRating: "$rating.average",
    },
  },
  {
    $sort: {
      averageRating: -1,
    },
  },
]);
