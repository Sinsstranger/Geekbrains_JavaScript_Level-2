import API from "./API.js";
import GoodList from "./model/GoodList.js";
import Card from "./view/Card.js";
import CartItem from "./model/CartItem.js";


const goodList = new GoodList(API.fetch());

const $product = document.querySelector('.product');

const cards = goodList.get().map(good => new Card(good));

cards.forEach(card => {
	card.render($product);
});
/**
 * Во всяком случае пока сумму всех товаров вываливаем в консоль
 */
console.log(goodList.fullPrice());
new CartItem(1,2,3,4,5,6);