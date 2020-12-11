<template>
<div class="Home-Middle">
  <div class="container-fluid">

    <form v-on:keyup.prevent="fetchREST" class="container-fluid">
      <!-- <label>Search your food to add to track</label> -->
      <div class="search-bar container-fluid">
        <div class="searchbox md-form active-cyan active-cyan-2 mb-3">
          <input class="form-control" type="text" v-model="searchText" placeholder="Search your food to add to track" aria-label="Search">
        </div>

        <div class="links w-30">
          <router-link to="/cart" class="nav-link" id="Home">Cart </router-link>
          <router-link to="/favfood" class="nav-link" id="Home">Favorite Foods </router-link>
        </div>
      </div>

    </form>
  </div>

  <FavFoodGroup></FavFoodGroup>
  <div class="content w-100">

    <ProductList v-if="searchText!=''" :products="commonProducts" :branded="brandedProducts" />
  </div>

  <!-- <div>
  <b-card-group>
    <b-card title="Title">
      <b-card-text>
        This is a wider card with supporting text below as a natural lead-in to additional content.
        This content is a little bit longer.
      </b-card-text>
    </b-card>

    <b-card title="Title">
      <b-card-text>
        This card has supporting text below as a natural lead-in to additional content.
      </b-card-text>
    </b-card>

    <b-card bg-variant="dark" text-variant="white" title="Card Title">
  <b-card-text>
    With supporting text below as a natural lead-in to additional content.
  </b-card-text>
  <b-button href="#" variant="primary">Go somewhere</b-button>
</b-card>

  </b-card-group>
</div> -->

</div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
import FavFoodGroup from "../components/FavFoodGroup.vue";
export default {
  name: "Search",
  components: {
    ProductList,
    FavFoodGroup
  },
  data() {
    return {
      searchText: '',
      // searchCalories: Number,
    }
  },
  methods: {

    fetchREST() {
      let tempCommonFoodList = [];
      this.$root.$data.searchfulText = this.searchText;
      console.log("In Fetch " + this.searchText);
      var url = "https://trackapi.nutritionix.com/v2/search/instant?query=" + this.searchText;
      console.log("URL " + url);
      var headers = {
        headers: {
          'x-app-id': 'ebd9bbbe',
          'x-app-key': '6df509dbfc2725cbbd1df4cab6c4b4bb'
        }
      };
      fetch(url, headers)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log("FoodList data");
          console.log(data);
          this.$root.$data.brandedFoodList = [];
          for (let i = 0; i < data.common.length; i++) {
            data.common[i].uniqueID = i;
            tempCommonFoodList.push(data.common[i]);
          }

          let commonFoodNameList = '';
          for (var item of tempCommonFoodList) {
            commonFoodNameList += item.food_name;
            commonFoodNameList += ", ";
          }

          console.log("In Fetch " + commonFoodNameList);
          url = "https://trackapi.nutritionix.com/v2/natural/nutrients";

          fetch(url, {
              headers: {
                'Content-Type': 'application/json',
                'x-app-id': 'ebd9bbbe',
                'x-app-key': '71fe313f79a47d83cfe07e3747570666',
                'x-remote-user-id': '0'
              },
              body: JSON.stringify({
                query: commonFoodNameList
              }),
              method: 'POST'
            })
            .then((response) => {
              console.log(response);
              return response.json();
            })
            .then((data) => {
              console.log("commonList data");
              console.log(data);
              this.$root.$data.commonFoodList = [];
              for (let i = 0; i < data.foods.length; i++) {
                data.foods[i].uniqueID = i;
                this.$root.$data.commonFoodList.push(data.foods[i]);
              }
            });

          for (let i = 0; i < data.branded.length; i++) {
            // console.log(data.branded[i].food_name);
            data.common[i].uniqueID = 50 + i;
            this.$root.$data.brandedFoodList.push(data.branded[i]);
          }
        });

    },


  },
  computed: {
    commonProducts() {
      return this.$root.$data.commonFoodList;
    },
    brandedProducts() {
      return this.$root.$data.brandedFoodList;
    },

  }

}
</script>

<style scoped>
.Home-Middle{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.nav-link {
  color:#7fdbda;

}
.links{
  display: flex;
  font-size: 1.5rem;
  text-decoration: underline;
}
.links :hover{
  color: black;
}

.active-cyan-2 input.form-control[type=text]:focus:not([readonly]) {


 border: 0 0 1px 0;
 border-bottom: 1px solid #4dd0e1;
 box-shadow: 0 1px 0 0 #4dd0e1;

}
.active-cyan input.form-control[type=text] {
 border-bottom: 1px solid #4dd0e1;
 box-shadow: 0 1px 0 0 #4dd0e1;
   border-top: 0;
   border-left: 0;
   border-right: 0;

}
.active-cyan .fa, .active-cyan-2 .fa {
 color: #4dd0e1;
}
.active-cyan .fa-search, .active-cyan-2 .fa-search {
 color: #4dd0e1;
}

.searchbox{
  width:40%;
}

.search-bar{
  display: flex;
  justify-content:space-around;
  padding-bottom: 5%;
}
.content{


}
#function{
  color: #595238;
}

  </style>
