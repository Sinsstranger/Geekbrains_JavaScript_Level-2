export default class CartItem {
	constructor(id, title, description, image, price, discount) {
		[this._id, this.title, this.description, this.image, this._price, this._discount] = arguments;
		console.log(`Test cart Item Creation\n`, this._id, this.title, this.description, this.image, this._price, this._discount);
	}
	render(){
		return ``;
	}
}