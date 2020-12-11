<template>
  <div class="wrapper">
    <div v-if="empty()">
      <h1>Your Favorite Food List is Empty</h1>
    </div>
    <div v-else>
      <h1>Your Favorite Foods list:</h1>
      <div>
      <b-card-group deck>
        <b-card class="product" v-for="product in products" :key="product.id" :title="product.name">
          <b-card-text>
            <p>Calories:&nbsp; {{product.calories}}</p>
          </b-card-text>
          <b-button @click="deleteFoodCart(product)" variant="info" class="auto">Remove</b-button>
          <b-button @click="addToCart(product)" class="auto" variant="info">Add to Cart</b-button>
          <b-button @click="addToTrack(product)" class="auto" variant="info">Add to Track</b-button>
        </b-card>
      </b-card-group>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
// import CartList from "../components/CartList.vue"
export default {
  name: 'FavFoodGroup',
  data() {
    return {
      items: [],
    }
  },
  methods: {
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
      return this.items.slice(0,5);
    }

  },
  created: function() {
    this.getItems();
  },
}
</script>

<style scoped>
/* .wrapper {
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
*/

.auto {
  margin-left: auto;
}
</style>
