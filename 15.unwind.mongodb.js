//? $unwind  :Deconstructs an array field from the input documents to output
//a document for each element. Each output document is the input document
//with the value of the array field replaced by the element.

use("imdb");

// db.teachers.insertOne({
//   name: "Sambhav",
//   hobbies: ["Cycling", "Dancing", "Singing", "Book"],
// });

db.teachers.aggregate([
  {
    $match: {},
  },
  {
    $unwind: "$hobbies",
  },
  {
    $project: {
      _id: 0,
      name: 1,
      hobbies: 1,
    },
  },
]);
