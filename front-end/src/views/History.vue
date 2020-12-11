<template>
  <div class="Home-Middle container-fluid">

      <div class="content container-fluid" >
        <div class="Analysis">
          <div class="row">
            <div class="col mt-3">
              <div class="card" >
                <img class="card-img-top" src="/combination chart.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Your Daily Analysis <br /> To be added</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">See Details</a>
                </div>
              </div>
            </div>
            <div class="col mt-3">
              <div class="card" >
                <img class="card-img-top" src="/combination chart.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Your Weekly Analysis <br /> To be added</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">See Details</a>
                </div>
              </div>
            </div>
            <div class="col mt-3">
              <div class="card">
                <img class="card-img-top" src="/combination chart.png" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">Your Monthly Analysis <br /> To be added</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">See Details</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div v-if="empty()">
            <h1>Your Don't Have Anything In Your Track</h1>
          </div>
          <div v-else>
            <h1>Your Food Track:</h1>
            <div class="products">
              <ul>
                <li class="product" v-for="product in items" :key="product.id">
                  <p>{{product.name}}&nbsp; &nbsp; </p>
                  <p>Calories:&nbsp; {{product.calories}}</p>
                  <p>Date: {{product.date}}</p>
                  <button @click="deleteFoodCart(product)" class="auto">Remove</button>
                </li>
              </ul>
              <h2>Total Calories: {{getTotal}}</h2>
            </div>
            <!-- <button @click="checkout" class="auto">Add to Your Track</button> -->
          </div>
        </div>
    </div>
</div>
</template>


<script>
import axios from 'axios';
export default {
  name: 'History',
  data() {
    return {
      items: [],
    }
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get("/api/food");
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
    await axios.delete("/api/food/" + product.id);
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
.content{

  }
  #history{
    color: #595238;
  }
.card{
  width:25rem;
}
.col{
  display: flex;
  justify-content: center;
}
.btn{
  color:#7fdbda;
  background-color: white;
  border-color: #7fdbda;;
}
.btn:hover{
  background-color: black;
}
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
}
</style>
