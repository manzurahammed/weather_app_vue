<template>
  <nav class="navbar navbar-dark bg-dark">
	<router-link class="navbar-brand" :to="'/'">
		Navbar
	</router-link>
	<form @submit.prevent="search" class="form-inline">
	  <input v-model="keyword" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
	  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
	</form>
</nav>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      keyword:null
    }
  },
  methods:{
    search(){
      var t = this;
      axios.get('http://localhost:3000/search/'+this.keyword)
        .then(function (response) {
          t.$store.commit('setinventory',response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>


