<template>
<div>
  <!-- <b-button @click="modalShow = !modalShow">Open Modal</b-button> -->
  <button @click="modalShow = !modalShow; $emit('lookForCal')" class="auto">Look For Calories</button>


  <b-modal v-model="modalShow">
    <h1>{{product.food_name}}</h1>
    <div v-if="true">
      <h2 >{{product.brand_name}}</h2>
      <hr />
      <h2 >Calories: {{product.nf_calories}}</h2>
      <h3>Or Type in your own calories:</h3>
      <input type="text" v-model="product.nf_calories" :placeholder="product.nf_calories"/>
    </div>
    <!-- <div v-else>
      <h2 >{{product.brand_name}}</h2>
      <hr />
      <h2>Natural Calories: {{searchCalorie}}</h2>
      <h3>Or Type in your own calories:</h3>
      <input type="text" v-model="searchCalorie" :placeholder="searchCalorie"/>

    </div> -->
    <img :src=product.photo.thumb>
    <button @click="addToCart">Add To Cart</button>
    <button @click="addNow">Add Now</button>
    <button @click="addToFav">Add To Favorite List</button>
  </b-modal>
</div>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
  name: "Modal",
  data() {
    return {
      modalShow: false
    }
  },
  props:{
    product: Object
  },

  methods: {
    async addToCart() {
      try {
        await axios.post("/api/foodcart", {
          name: this.product.food_name,
          calories: this.product.nf_calories,
          date: moment().format('lll'),
        });
        return true;
      } catch (error) {
        console.log(error);
      }

    },
    async addToFav() {
      try {
        await axios.post("/api/favfood", {
          name: this.product.food_name,
          calories: this.product.nf_calories,
          date: moment().format('lll'),
        });
        return true;
      } catch (error) {
        console.log(error);
      }

    },
    async addNow() {
      try {
        await axios.post("/api/food", {
          name: this.product.food_name,
          calories: this.product.nf_calories,
          date: moment().format('lll')
        });
        return true;
      } catch (error) {
        console.log(error);
      }

    },
    // isCommon(product){
    //   if(typeof(product.nix_item_id)!="undefined")
    //   return true;
    // }
  },
  computed:{
    // searchCalorie(){
    //   return this.$root.$data.searchCalories;
    // }
  }
}
</script>
