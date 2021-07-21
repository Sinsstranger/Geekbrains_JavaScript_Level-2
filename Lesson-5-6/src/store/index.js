import { createStore } from "vuex";
import products from "./modules/products";
import productsInCart from "./modules/productsInCart";
export default createStore({
  modules: {
    products,
    productsInCart
  },
});
