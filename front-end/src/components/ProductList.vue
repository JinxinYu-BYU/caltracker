<template>
<div class="wrapper w-100">
  <div class="w-100">
    <b-card no-body class="w-100">
      <b-tabs card content-class="mt-3 w-100" fill>
        <b-tab class="tab-title" title="All Food" active>
          <b-card-text>
            <div class="products">
              <div class="product" v-for="product in allFood" :key="product.uniqueID">
                <div class="info">
                  <h1>{{product.food_name}}</h1>
                </div>
                <div class="image">
                  <img :src=product.photo.thumb>
                </div>
                <div>
                  <Modal :product = "product" ></Modal>
                </div>
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab class="tab-title" title="Common Food">
          <b-card-text>
            <div class="products">
              <div class="product" v-for="product in products" :key="product.uniqueID">
                <div class="info">
                  <h1>{{product.food_name}}</h1>
                </div>
                <div class="image">
                  <img :src=product.photo.thumb>
                </div>
                <div class="price">
                  <Modal :product = "product"></Modal>
                </div>
              </div>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab class="tab-title" title="Branded Food">
          <b-card-text>
            <div class="products">
              <div class="product" v-for="product in branded" :key="product.uniqueID">
                <div class="info">
                  <h1>{{product.food_name}}</h1>
                  <p>{{product.locale}}</p>
                </div>
                <div class="image">
                  <img :src=product.photo.thumb>
                </div>
                <div class="price">
                  <Modal :product = "product" ></Modal>
                </div>
              </div>
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>

</div>
</template>

<script>
import Modal from "../components/Modal.vue"
export default {
  name: 'ProductList',
  components: {
    Modal
  },
  data() {
    return {
      modalShow: false,
    }
  },
  props: {
    products: Array,
    branded: Array,

  },
  methods: {
  //   fetchCommonFoods() {
  //     var searchedText;
  //     for(var item of this.products){
  //       searchedText += item.food_name;
  //       searchedText += ", ";
  //     }
  //
  //     console.log("In Fetch " + searchedText);
  //     var url = "https://trackapi.nutritionix.com/v2/natural/nutrients";
  //     console.log("URL " + url);
  //
  //   fetch(url, {
  //     headers: {
  //       'Content-Type':'application/json',
  //       'x-app-id': 'ebd9bbbe',
  //       'x-app-key': '6df509dbfc2725cbbd1df4cab6c4b4bb',
  //     'x-remote-user-id':'0'},
  //     body:JSON.stringify({query:searchedText}),
  //     method: 'POST'
  //   })
  //   .then((response) =>{
  //     console.log(response);
  //     return response.json();
  //   })
  //   .then((data) => {
  //     console.log("FoodList data");
  //     console.log(data);
  //     this.$root.$data.commonFoodList = [];
  //      for (let i = 0; i < data.foods.length; i++) {
  //        data.foods[i].uniqueID = i;
  //        this.$root.$data.commonFoodList.push(data.foods[i]);
  //      }
  //   });
  //   // console.log(commonFoodList)
  //   return this.$root.$data.commonFoodList;
  // },
    // lookForCal(product){
      // if(typeof(product.nix_item_id) != "undefined"){
      //   var searchedText = product.nix_item_id;
      //   // console.log("In Fetch " + searchedText);
      //   var url = "https://trackapi.nutritionix.com/v2/search/item?nix_item_id=" + searchedText;
      // fetch(url, {
      //   headers: {
      //     'x-app-id': 'ebd9bbbe',
      //     'x-app-key': '6df509dbfc2725cbbd1df4cab6c4b4bb',
      //   }})
      // .then((response) =>{
      //   console.log(response);
      //   return response.json();
      // })
      // .then((data) => {
      //
      //   console.log(data);
      //   console.log("FoodList");
      //   return data;
      // });
      // }else{
      //   var searchedText = product.food_name;
      //   console.log("In Fetch " + searchedText);
      //   var url = "https://trackapi.nutritionix.com/v2/natural/nutrients";
      //   console.log("URL " + url);
      //
      // fetch(url, {
      //   headers: {
      //     'Content-Type':'application/json',
      //     'x-app-id': 'ebd9bbbe',
      //     'x-app-key': '6df509dbfc2725cbbd1df4cab6c4b4bb',
      //   'x-remote-user-id':'0'},
      //   body:JSON.stringify({query:searchedText}),
      //   method: 'POST'
      // })
      // .then((response) =>{
      //   console.log(response);
      //   return response.json();
      // })
      // .then((data) => {
      //   console.log("Natural food test: ");
      //   console.log(data);
      //   console.log(data.foods[0].nf_calories);
      //   this.$root.$data.searchCalories = data.foods[0].nf_calories;
      //   return data;
      // });
  // }
// }
  },
  computed: {

    allFood() {
      return this.products.concat(this.branded);
    },

  },

}
</script>

<style scoped>
.tab-title {
  color:#7fdbda;

}
.navbar-light .navbar-nav li a:hover {
  color:#ade498 !important;

}

b-card {
  width: 100%;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
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
  background: #7fdbda;
  color: #000;
  padding: 10px 30px;
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
