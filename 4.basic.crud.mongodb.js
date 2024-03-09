use("amazon");
// db.course.find();

// db.student.insertOne({ name: "Suresh", age: "23", address: "Koteshwor" });

// db.student.insertMany([
//   { name: "Saroj", age: "23", address: "Kalimati" },
//   { name: "Manish", age: "20", address: "Tinkune" },
//   { name: "Dinesh", age: "24", address: "New Baneshwor" },
//   { name: "Krishna", age: "29", address: "New Road" },
// ]);

//? From all the documents, display only address

// db.student.find({},{_id:0,address: 1});

//? From all the documents , display name and address data

// db.student.find({}, { _id: 0, name: 1, address: 1 });

//? find students whose age is greater than 20, display their name and age
// db.student.find({ age: { $gt: 20 } }, { _id: 0, name: 1, age: 1 });

//? change name "Saroj" to "Suman"

// db.student.updateOne({ name: "Saroj" }, { $set: { name: "Suman" } });

//? update document, if not find insert into collection

// db.student.updateOne(
//   { name: "Ramesh" },
//   { $set: { name: "Ramesh", age: 26, address: "Pokhara" } },
//   { upsert: true }
// );
// db.student.find();

//? increment age of all student by 10
// db.student.updateMany({}, { $inc: { age: 10 } });

//? delete Suman's details

// db.student.deleteOne({ name: "Suman" });

db.student.find({}, { _id: 0, name: 1, age: 1 });
