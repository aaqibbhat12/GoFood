const mongoose = require('mongoose')
const mongoURI = 'mongodb://127.0.0.1:27017/GoFood'

const dbConnect = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("db connected successfully")

        // const fetcheddata = await mongoose.connection.db.collection("FoodItems");
        // const data = await fetcheddata.find({}).toArray()
        // console.log(data);


    }
    catch (err) {
        console.log("Some error occured" + err)
    }



}


module.exports = dbConnect;