use("imdb");
// db.friends.updateOne({name:"Suresh","scores.sub":"Nepali"},{$set:{"scores.$.point":68}})

// db.friends.updateMany({name:"Suresh","scores.sub":"English"},{$set:{
//     "scores.$.sub":"Nepali", "scores.$.point":65

// }})


//? to update all value

// db.friends.updateOne({name:"Suresh"},{
//     $set:{
//     "scores.$[].point":70
// }})




//? decrease points of all by 10

// db.friends.updateOne({name:"Suresh"},{
//     $inc:{
//     "scores.$[].point": -10
// }})
// db.friends.find()


//? update Swimming to Rafting

// db.friends.updateOne({name:"Jibana",hobbies:"Swimming"},{$set:{
//     "hobbies.$":"Rafting"
// }})

//? update items based on condition

db.friends.updateOne({ name: "Jibana" }, {
    $set: {
        "scores.$[item].point": 75,
    },
},
    {
        arrayFilters: [{ "item.point": { $gte: 50 } }]
    });


db.friends.find();