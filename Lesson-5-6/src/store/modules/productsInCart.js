export default {
	state: {
		cartList: [],
	},
	mutations: {
		handleAddToCart(state, product) {
			if (state.cartList.findIndex(item => item.id === product.id) !== -1) {
				state.cartList[state.cartList.findIndex(item => item.id === product.id)].quantity++;
			} else {
				product.quantity = 1;
				state.cartList.push(product);
			}
		},
		handleRemoveFromCart(state, product) {
			const productIndex = state.cartList.findIndex(item => item.id === product.id);
			if (productIndex !== -1 && state.cartList[productIndex].quantity > 1) {
				state.cartList[productIndex].quantity--;
			} else if (productIndex !== -1) {
				state.cartList[productIndex].splice(productIndex, 1);
			}
		}
	},
	actions: {},
	getters: {
		getCartList(state) {
			return state.cartList;
		},
		getCartCount(state) {
			return state.cartList.reduce((acc, item) => acc + item.quantity, 0) || 0;
		}
	},
}