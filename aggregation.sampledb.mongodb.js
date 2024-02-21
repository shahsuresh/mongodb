//use("sample_airbnb");

//? $group aggregate
// db.listingsAndReviews.aggregate([{ $group: { _id: "$bed_type" } }]);

//? $project and $limit

// db.listingsAndReviews.aggregate([
//   {
//     $project: {
//       room_type: "Private_room",
//       _id: 0,
//     },
//   },
//   {
//     $limit: 2,
//   },
// ]);

// ? $sort

// db.listingsAndReviews.aggregate([
//   {
//     $sort: {
//       bedrooms: -1,
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       bedrooms: 1,
//       _id: 0,
//     },
//   },
// ]);

//? $match

// db.listingsAndReviews.aggregate(
//   { $match: { price: 50 } },
//   { $project: { name: 1 } },
//   { $limit: 5 }
// );

// ? $limit

// db.listingsAndReviews.aggregate([{ $limit: 2 }]);

// use("sample_mflix");
// db.movies.aggregate([{ $limit: 2 }]);

// db.movies.find({ title: "The Great Train Robbery" });

//? $addFeilds
// use("netflix");
// db.movie.aggregate([
//   {
//     $addFields: {
//       FullName: { $toUpper: "$name" },
//     },
//   },
// ]);

//? $count

// db.movie.aggregate({ $match: { name: "12th fail" } }, { $count: "length" });

//?$lookUp

// use("sample_mflix");

// db.comments.aggregate([
//   {
//     $lookup: {
//       from: "movies",
//       localField: "movie_id",
//       foreignField: "_id",
//       as: "movie_details",
//     },
//   },
//   {
//     $limit: 1,
//   },
// ]);

//? $out
// use("sample_airbnb");

// db.listingsAndReviews.aggregate([
//   {
//     $group: {
//       _id: "$property_type",
//       properties: {
//         $push: {
//           name: "$name",
//           accommodates: "$accommodates",
//           price: "$price",
//         },
//       },
//     },
//   },
//   { $out: "properties_by_type" },
// ]);

//?===================================================================================

use("imdb");

//? $match => find documents
// db.movies.aggregate([
//   {
//     $match: {
//       name: "Glee",
//     },
//   },
//   {
//     $project: {
//       name: 1,
//     },
//   },
// ]);

//? $group =>groups documents by the unique _id expression provided.

// db.movies.aggregate([
//   {
//     $group: {
//       _id: "$type",
//     },
//   },
// ]);

//? $limit =>limits the number of documents passed to the next stage.

// db.movies.aggregate([
//   {
//     $match: {
//       language: "English", // matches all movies whose language is English
//     },
//   },
//   {
//     $limit: 5, // only passes 5 movies details to next stage
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1, // only display "name" feilds of these 5 movies
//     },
//   },
// ]);

//? $sort => sorts all documents in the specified sort order.
//? 1 for ascending order, -1 for descending order

// sort movies based on id in ascending order

// db.movies.aggregate([
//   {
//     $sort: {
//       id: 1,
//     },
//   },
//   {
//     $project: {
//       id: 1,
//       _id: 0,
//     },
//   },
// ]);

//? sort movies based on their rating in descending order and dispaly
// movies name and rating

// db.movies.aggregate([
//   {
//     $sort: {
//       "rating.average": -1,
//     },
//   },
//   {
//     $project: {
//       _id: 0,
//       name: 1,
//       averageRating: "$rating.average",
//     },
//   },
// ]);

//? $addFields =>This aggregation stage adds new fields to documents.

// db.movies.aggregate([
//   {
//     $addFields: {
//       Movie_Name: { $toUpper: "$name" }, // add new field Movie_Name and show names in uppercase
//     },
//   },
//   {
//     $project: {
//       name: 1,
//       Movie_Name: 1,
//     },
//   },
// ]);

//? $count => counts the total amount of documents passed
//? from the previous stage.

//? How many English Movies are there in movies table(Collection)

// db.movies.aggregate([
//   {
//     $match: {
//       language: "English",
//     },
//   },
//   {
//     $count: "Total English Language Movie",
//   },
// ]);

//? $out => writes the returned documents from the aggregation pipeline to a collection.
//? The $out stage must be the last stage of the aggregation pipeline.

db.movies.aggregate([
  {
    $group: {
      _id: "$language",
      movies: { $push: { name: "$name", language: "$language" } },
    },
  },
  {
    $out: "English_Movies",
  },
]);
7;
