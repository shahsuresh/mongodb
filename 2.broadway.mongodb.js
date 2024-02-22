use("broadway");
//? create operation
// db.course.insertMany([
//   { name: "MERN", price: 25000, duration: "90 days" },
//   { name: "FrontEnd", price: 10000, duration: "70 days" },
//   { name: "Flutter", price: 15000, duration: "90 days" },
// ]);

//? Read Operation
// db.course.find({ name: "MERN" });

//?update/edit operation
// db.course.updateOne({ name: "MERN" }, { $set: { duration: "100days" } });

//? delete operation

// db.course.deleteOne({ duration: "90 days" });

db.course.find();
