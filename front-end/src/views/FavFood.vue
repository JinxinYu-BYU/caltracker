<template>
  <div class="wrapper container-fluid">
    <div v-if="empty()">
      <h1>Your Cart is Empty</h1>
    </div>
    <div v-else class="w-70">
      <h1>Your Favorite Food List:</h1>
      <div class="products" >
        <ul>
          <li class="product" v-for="product in items" :key="product.id">
            <p>{{product.name}}&nbsp; &nbsp; </p>
            <p>Calories:&nbsp; {{product.calories}}</p>
            <p>Date: {{product.date}}</p>
            <b-button @click="deleteFoodCart(product)" class="auto" >Remove</b-button>
            <b-button @click="addToCart(product)" class="auto" >Add to Cart</b-button>
            <b-button @click="addToTrack(product)" class="auto" >Add to Track</b-button>
          </li>
        </ul>
        <h2>Total Calories: {{getTotal}}</h2>
      </div>
      <!-- <button @click="checkout" class="auto">Add to Your Track</button> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
// import CartList from "../components/CartList.vue"
export default {
  name: 'FavFood',
  data() {
    return {
      items: [],
    }
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get("/api/favfood");
        this.items = response.data.foods;
        console.log("test get Items in FavFood");
        console.log(response.data.foods);
      } catch (error) {
        console.log(error);
      }
    },
    async addToCart(product) {
      try {
        await axios.post("/api/foodcart", {
          name: product.name,
          calories: product.calories,
          date: moment().format('lll'),
        });
        return true;
      } catch (error) {
        console.log(error);
      }

    },
    async addToTrack(product) {
      try {
        await axios.post("/api/food", {
          name: product.name,
          calories: product.calories,
          date: moment().format('lll')
        });
        return true;
      } catch (error) {
        console.log(error);
      }

    },
    empty(){
      return (this.items.length===0);
    },
   async deleteFoodCart(product) {
  try {
    await axios.delete("/api/favfood/" + product.id);
    this.getItems();
    return true;
  } catch (error) {
    console.log(error);
  }
}
  },
  computed: {
    products() {
      return this.items;
    },
    getTotal(){
  let sum = 0;
  var item;
  for(item of this.items){
    sum += item.calories;
  }
  return sum.toFixed(2);
}

  },
  created: function() {
    this.getItems();
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  border: 2px solid black;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  color: #000;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}


.auto {
  margin-left: auto;
  padding-left: 20px;
}
</style>
