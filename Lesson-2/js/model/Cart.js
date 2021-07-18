export default class Cart {
	constructor(CartItems) {
		this._items = CartItems;
	}

	get getItems() {
		return this._items
	}

	addItem(cartItem) {
		this._items.push(cartItem);
	}

	removeItem(cartItem) {
		this._items.splice(this._items.indexOf(cartItem, 0), 1);
	}
}