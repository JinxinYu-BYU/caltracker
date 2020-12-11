const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
// let dailyFoodBasket = [];
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const foodSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  date: String,
});
const foodCartSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  date: String,
});

// create a virtual paramter that turns the default _id field into id
foodSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });

// Ensure virtual fields are serialised when we turn this into a JSON object
foodSchema.set('toJSON', {
  virtuals: true
});

// create a model for tickets
const Food = mongoose.model('Food', foodSchema);
const FavFoodList = mongoose.model('FavFoodList', foodSchema);
const FoodCart = mongoose.model('FoodCart', foodSchema);


app.get('/api/food', async (req, res) => {
  try {
    let foods = await Food.find();
    res.send({
      foods: foods
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/foodcart', async (req, res) => {
  try {
    let foods = await FoodCart.find();
    res.send({
      foods: foods
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
app.get('/api/favfood', async (req, res) => {
  try {
    let foods = await FavFoodList.find();
    res.send({
      foods: foods
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
app.post('/api/food', async (req, res) => {
  const food = new Food({
    name: req.body.name,
    calories: req.body.calories,
    date: req.body.date,
  });
  try {
    await food.save();
    res.send({
      food: food
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/favfood', async (req, res) => {
  const food = new FavFoodList({
    name: req.body.name,
    calories: req.body.calories,
    date: req.body.date,
  });
  try {
    await food.save();
    res.send({
      food: food
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/foodcart/checkout', async (req, res) => {
  try {
    let foods = await FoodCart.find();
    for(food of foods){
      const item = new Food({
        name: food.name,
        calories: food.calories,
        date: food.date,
      })
      await item.save();
      await FoodCart.deleteMany();
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/foodcart', async (req, res) => {
  const food = new FoodCart({
    name: req.body.name,
    calories: req.body.calories,
    date: req.body.date,
  });
  try {
    await food.save();
    res.send({
      food: food
    });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/foodcart/:id', async (req, res) => {
  try {
    await FoodCart.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/favfood/:id', async (req, res) => {
  try {
    await FavFoodList.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/food/:id', async (req, res) => {
  try {
    await Food.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(5000, () => console.log('Server listening on port 5000!'));
