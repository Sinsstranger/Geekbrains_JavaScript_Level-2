import productExampleImage from '../../assets/images/dist/product-example.png';
export default {
	state: {
		productsList: [
			{
				id: 1, image: `${productExampleImage}`, title: `ELLERY X M'O CAPSULE`, description: `Known for her sculptural takes on traditional tailoring, Australian arbiter of
				cool Kym Ellery teams up with Moda Operandi.`, price: `$52.00`
			},
			{
				id: 2, image: `${productExampleImage}`, title: `ELLERY X M'O CAPSULE`, description: `Known for her sculptural takes on traditional tailoring, Australian arbiter of
				cool Kym Ellery teams up with Moda Operandi.`, price: `$52.00`
			},
			{
				id: 3, image: `${productExampleImage}`, title: `ELLERY X M'O CAPSULE`, description: `Known for her sculptural takes on traditional tailoring, Australian arbiter of
				cool Kym Ellery teams up with Moda Operandi.`, price: `$52.00`
			},
			{
				id: 4, image: `${productExampleImage}`, title: `ELLERY X M'O CAPSULE`, description: `Known for her sculptural takes on traditional tailoring, Australian arbiter of
				cool Kym Ellery teams up with Moda Operandi.`, price: `$52.00`
			},
			{
				id: 5, image: `${productExampleImage}`, title: `ELLERY X M'O CAPSULE`, description: `Known for her sculptural takes on traditional tailoring, Australian arbiter of
				cool Kym Ellery teams up with Moda Operandi.`, price: `$52.00`
			},
		],
	},
	mutations: {},
	actions: {},
	getters: {
		getProducts(state) {
			return state.productsList;
		}
	},
}