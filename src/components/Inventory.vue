<template>
  <div class="col-sm-9">
    <div class="row">
      <div v-for="(item,index) in items" :key="index" class="card" style="width: 15rem;">
        <img class="card-img-top" :src="item.photo"  alt="Card cap">
        <div class="card-body">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text">{{item.price}}</p>
          <a @click.prevent="addtocart(item)" href="#" class="btn btn-primary">Add To Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['items'],
  methods:{
    addtocart(item){
      this.$emit('newitemadd',item)
    }
  }
}
</script>
