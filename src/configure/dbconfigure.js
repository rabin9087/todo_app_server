import mongoose from "mongoose";

const mongose_url = 'mongodb://localhost:27017/todo_list';

export const connectMongoose = () => {
    try {
        const connect = mongoose.connect(process.env.MONGO_URL);
        connect && console.log("Mongo Database is Connected")
    } catch (error) {
        console.log(error)
    }
}


