<template>
    <div v-if="load" class="row">
      <div v-for="(item,index) in items" :key="index" class="card" style="width: 15rem;">
        <router-link :to="'item/'+item.id">
         <img class="card-img-top" :src="item.photo"  alt="Card cap">
        </router-link>
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">{{item.price}}</p>
          <a @click.prevent="addtocart(item)" href="#" class="btn btn-primary">Add To Cart</a>
        </div>
      </div>
    </div>
    <h2 v-else>Loading.......</h2>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      load:false
    }
  },
  mounted(){
    this.featchdata()
  },
  methods:{
    addtocart(item){
      //this.$emit('newitemadd',item)
      this.$store.dispatch('addtocart',item) 
    },
    featchdata(){
      var t = this;
      axios.get('http://localhost:3000/items')
        .then(function (response) {
          t.$store.commit('setinventory',response.data) 
          t.load = true;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  computed:{
    items(){
      return this.$store.getters.getinventory
    }
  }
}
</script>
