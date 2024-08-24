let students


db.students.insertMany([
    {
        name: 'Rajan',
        age: 19,
        subject: 'Java',
        marks: 86
    },
    {
        name: 'Rahul',
        age: 19,
        subject: 'c++',
        marks: 78
    },
    {
        name: 'Priya',
        age: 21,
        subject: 'OS',
        marks: 90
    }
])

db.students.updateMany(
    {},
    {
        $set: {
            subject: "Datascience",
            address: "Coding Blocks"
        }
    }
)


db.students.find({
    $and: [
        { age: 22 },
        { marks: 90 }
    ]
})



db.students.find({
    $and: [
        {
            age: {
                $gt: 20
            }
  
        },
        {marks:{
            $gte:80
        }
    }
    ]
})

db.students.insertOne({
    name:'Srashti',
    age:18,
    subject:'Data Science',
    marks:85
})



db.students.updateMany(
    {
    marks:90
    },
    {
        $set:{
            grades:"A+"
        }
    }
)


