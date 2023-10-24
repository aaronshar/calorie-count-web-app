import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Food collection using Mongoose.');
    }
});

const foodSchema = mongoose.Schema({
    food: { type: String, required: true },
    cals: { type: Number, required: true, min: 0 },
    date: { type: Date, required: true, default: Date.now }
});

const Food = mongoose.model("Food", foodSchema);

const createFood = async(food, cals, date) => {
    const newFood = new Food({
        food: food,
        cals: cals,
        date: date
    });
    return newFood.save();
}

const findFood = async () => {
    const query = Food.find()
    return query.exec()
}

const findFoodById = async (_id) => {
    const query = Food.findById(_id)
    return query.exec()
}

const updateFood = async(_id, food, cals, date) => {
    const result = await Food.replaceOne({_id: _id}, {
        food: food,
        cals: cals,
        date: date
    })
    return {
        _id: _id,
        food: food,
        cals: cals,
        date: date
    }
}

const deleteFood = async(_id) => {
    const result = await Food.deleteOne({_id: _id});
    return result.deletedCount
};

export { createFood, findFood, findFoodById, updateFood, deleteFood }