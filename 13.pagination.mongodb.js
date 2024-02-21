use("imdb");

//? pagination
//? $skip
//? $limit

//? page1
//? skip =(page-1)*limit

let page = 1;
const limit = 5;
let skip = (page - 1) * limit;

db.movies.aggregate([
  { $match: {} },
  {
    $skip: skip,
  },
  {
    $limit: limit,
  },
  {
    $project: {
      _id: 0,
      name: 1,
      id: 1,
    },
  },
]);
