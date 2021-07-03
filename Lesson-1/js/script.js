const goods = [
	{title: 'Shirt', price: 150},
	{title: 'Socks', price: 50},
	{title: 'Jacket', price: 350},
	{title: 'Shoes', price: 250},
];

const $goodsList = document.querySelector('.goods-list');
/**
 * 2. Добавьте значения по умолчанию для аргументов функции. Как можно упростить или сократить запись функций?
 * @param title
 * @param price
 * @returns {String}
 */
const renderGoodsItem = ({title = `test`, price = 0}) => {
	return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};
const renderGoodsList = goodsList = goods => {
	/*
		3. *Сейчас после каждого товара на странице выводится запятая. Из-за чего это происходит? Как это исправить?
		Под отрисовку приходит массив строк(HTML тэгов), при отрисовке разделитель(запятая) тоже отрисовывается
		Поправить можно его убрав, то есть склеив массив в строку через некий строчный разделитель, либо вовсе без него, через символ пустой строки
	 */
	$goodsList.insertAdjacentHTML('beforeend', goods.map(good => renderGoodsItem(good)).join('\n'));
}

renderGoodsList(goods);