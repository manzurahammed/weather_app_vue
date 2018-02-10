<template>
  <div class="col-sm-3">
    <ul class="list-group">
      <li class="list-group-item">
          <span class="item-name">Name</span>
          <span class="item-price float-right">Price</span>
      </li>
      <li v-for="(it,index) in cart" :key="index" class="list-group-item">
        <button @click.prevent="removeItem(index)" class="btn btn-sm btn-danger">-</button>
        <span class="item-name">{{it.title}}</span>
        <span class="item-price float-right">{{it.price}}</span>
      </li>
      <li class="list-group-item">
          <span class="item-name">Total</span>
          <span class="item-price float-right">{{total}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

  computed:{
    total(){
      var total = 0;
      this.cart.forEach(item =>{
        total += parseFloat(item.price.replace('$',''))
      })
      return total.toFixed(2)
    },
    cart(){
      return this.$store.getters.getcart
    }
  },
  methods:{
    removeItem(index){
      this.$store.commit('removeitem',index)
    }
  }
}
</script>