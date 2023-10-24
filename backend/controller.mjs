import 'dotenv/config';
import express from 'express';
import * as foods from './model.mjs';
// import asyncHandler from 'express-async-handler';


const app = express()
const PORT = process.env.PORT;
app.use(express.json());

app.post("/log", async (req, res) => {
    foods.createFood(req.body.food, req.body.cals, req.body.date)
        .then(food => {
            res.status(201).json(food)
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'The request to create a Food document has failed.'});
        })

});

app.get("/log/:_id", async (req, res) => {
    foods.findFoodById(req.params._id)
        .then(food => {
            if (food !== null){
                res.json(food);
            } else{
                res.status(404).json({ Error: 'The Food document you requested was not found.'})
            }
        })
        .catch(error => {
            console.error(error)
            res.status(400).json({ Error: 'The request to retrieve the Food document you request failed.'})
        })
});

app.get("/log", async (req, res) => {
    foods.findFood()
        .then(food =>{
            if (food !== null){
                res.json(food)
            } else {
                res.status(404).json({ Error: 'The Food document you requested was not found.'})
            }
        })
        .catch(error => {
            console.error(error)
            res.status(400).json({ Error: 'The request to retrieve the Food document you request failed.'})
        })
});

app.put("/log/:_id", async (req, res) => {
    foods.updateFood(
        req.params._id,
        req.body.food,
        req.body.cals,
        req.body.date
        )
        .then(food => {
            res.json(food)
        })
        .catch(error =>{
            console.error(error)
            res.status(400).json({ Error: 'The request to update the Food document failed.'})
        })
});

app.delete("/log/:_id", async(req, res) => {
    foods.deleteFood(req.params._id)
        .then(deletedCount => {
            if(deletedCount > 0){
                res.status(204).send()
            } else {
                res.status(404).json({ Error: 'The document you requested to delete did no exist.'})
            }
        })
        .catch(error => {
            console.error(error)
            res.status(400).json({ Error: 'The request to delete the document failed.'})
        })
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});