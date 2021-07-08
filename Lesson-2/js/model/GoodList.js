import Good from "./Good.js";

export default class GoodList {
	constructor(goods) {
		this.goods = goods.map(item => new Good(item));
	}

	get() {
		return this.goods;
	}

	add(good) {
		this.goods.push(good);
	}

	remove(id) {
		const index = this.goods.findIndex(good => good.id === id);
		this.goods.splice(index, 1);
	}

	/**
	 * 2. Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
	 * @returns {*}
	 */
	fullPrice() {
		return this.goods.reduce((sum, good) => sum + good._price - good._discount, 0);
	}
}