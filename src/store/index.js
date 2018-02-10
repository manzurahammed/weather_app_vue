export const stores = {
	state:{
		inventory:[],
		cart:[]
	},
	getters: {
    	getinventory(state){
    		return state.inventory
    	},
    	getcart(state){
    		return state.cart
    	}
  	},
  	mutations: {
		addtocart(state,payload){
			state.cart.push(payload);
		},
		removeitem(state,payload){
			state.cart.splice(payload,1);
		},
		setinventory(state,payload){
			state.inventory = payload;
		}
	},
	actions:{
		addtocart(context,payload){
			context.commit('addtocart',payload)
		}
	}
}