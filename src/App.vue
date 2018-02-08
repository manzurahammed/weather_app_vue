<template>
  <div id="app">
      <Navigation></Navigation>
      <div class="test">
        <div class="container">
            <div class="row">
                <Inventory @newitemadd="addtocart" :items="items"></Inventory>
                <Cart @removeitem ="removeItem" :cart="cart"></Cart>
            </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from './components/Cart'
import Inventory from './components/Inventory'
import Navigation from './components/Navigation'
import data from './data.js'
export default {
  components:{
    Cart, 
    Navigation,
    Inventory
  },
  data(){
    return {
      items: [],
      cart: []
    }
  },
  mounted(){
    this.items = data 
  },
  methods:{
    addtocart(item){
      this.cart.push(item)
    },
    removeItem (index){
      this.cart.splice(index,1)
    }
  }
}
</script>
