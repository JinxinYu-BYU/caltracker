<template>
<div>
  <CartList :cart="products" />
</div>
</template>

<script>
import axios from 'axios';
import CartList from "../components/CartList.vue"
export default {
  name: 'Cart',
  data() {
    return {
      items: [],
    }
  },
  components: {
    CartList
  },
  methods: {
    async getItems() {
      try {
        const response = await axios.get("/api/foodcart");
        this.items = response.data;
        console.log("test get Items in Cart");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    products() {
      return this.items;
    },

  },
  created: function() {
    this.getItems();
  },
}
</script>
