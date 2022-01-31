import Vue from "vue";
import Vuex, { createStore } from "vuex";


export const store = new Vuex.Store({
    state: {
        products: [
            { name: "gold skin", price: 100 },
            { name: "silver skin", price: 120 },
            { name: "platinum skin", price: 140 },
            { name: "star skin", price: 160 },
    ]
  },
  getters:{
      saleProducts: state =>{
        let saleProducts = state.products.map((product) => {
            return {
              name: " ** " + product.name + " ** ",
              price: product.price / 2,
            };
          });
          return saleProducts;
      }
  },
  mutations:{
      reducePrice: (state,reduce) =>{
        state.products.forEach(product => {
            product.price -= reduce
        });
      }
  },
  actions:{
     reducePrice:(context,payload) =>{
       setTimeout(function(){
         context.commit('reducePrice',payload)
       },2000)
     }
  }
});
