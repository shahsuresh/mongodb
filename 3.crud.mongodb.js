use("daraz"); // created database named "daraz"

// CRUD operation
//? create => Add

//methods=> insertOne(), insertMany()
//? insertOne()
//db.product.insertOne({ name: "Zenbook", brand: "Asus" });

//db.product.insertOne({ name: "Mouse", brand: "Logi", price: 3000 });
// db.product.insertOne({ name: "Keyboard", brand: "logi", price: "1200" });
//? insertMany()
// db.product.insertMany([
//   { name: "Vivobook", brand: "Asus", price: 113000 },
//   { name: "xps", brand: "Dell", price: 333000 },
//   { name: "vostro", brand: "Dell", price: 302200 },
// ]);

// db.customer.insertOne({
//   name: "Suresh",
//   address: "Kathmandu",
//   email: "shah@gmail.com",
// });

//find()=> get or read items from table
// db.product.find();
// db.customer.find();

//? Read operation
//?methods: findOne()=>returns first item that matches the criteria,
//find()=>returns all product that matches the condition

// db.product.findOne({ name: "Mouse" });
// db.product.find({ brand: "Dell" });

//? delete operation => deletes item from table
//methods=> deleteOne()=> deletes one data from table that matches the condition
// db.product.deleteOne({ brand: "Dell" });

//?deleteMany()

// db.product.deleteMany({ brand: "Dell" });
// db.product.find();

//? update operation=> changes values/edit values

//? methods=> updateOne()=> update one data values

// db.product.updateOne({ brand: "logi" }, { $set: { price: 1500 } });

//? updateMany()
// db.product.updateMany({ brand: "Logi" }, { $set: { brand: "Logitech" } });

db.product.find();
