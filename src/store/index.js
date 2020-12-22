
export default {
    state: {
        cartItems: []
    },
    mutations:{
        ADD_TO_CART(state, item) {
            state.cartItems.push(item);
        },
        REMOVE_FROM_CART(state,i){     
          state.cartItems.splice(i,1);
        },
    },
    actions: {
      removeFromCart({state,commit},item){
        let cartItem = state.cartItems.find(i=>i._id == item._id)
        let index = state.cartItems.indexOf(cartItem)
        commit("REMOVE_FROM_CART",index)
      },
        addToCart({commit},item) {
            commit("ADD_TO_CART",item)
        },
    },
    getters: {
      total(state){
        if (state.cartItems.length)
        return state.cartItems.reduce((a, b) => a + (b["price"] || 0), 0);
        return 0;
      },
      cartItemCount(state){
        return state.cartItems.length;
      },
        distinctCartItems(state){
            const result = [];
            for (const cartItem of state.cartItems) {
              let item = result.find(i=>i._id == cartItem._id)
              if (!item) {
                let obj = Object.assign({},cartItem);
                obj.amount = 1;
                result.push(obj);
              } else{
                item.amount++
              }
            }
            return result;
        }
    },
  };