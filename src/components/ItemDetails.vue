<template>
  <div class="row">
    <div class="col-md-6">
      <img :src="item.photo">
    </div>
    <div class="col-md-6">
      <p>{{item.title}}</p>
      <p>{{item.description}}</p>
      <p>{{item.price}}</p>
      <a @click.prevent="addtocart(item)" href="#" class="btn btn-primary">Add To Cart</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      item:null
    }
  },
  mounted(){
    this.featchdata()
  },
  methods:{
    featchdata(){
      var t = this;
      axios.get('http://localhost:3000/item/'+this.$route.params.id)
        .then(function (response) {
          t.item = response.data.item;
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    addtocart(item){
      //this.$emit('newitemadd',item)
      this.$store.commit('addtocart',item)
    }
  }
}
</script>