'use strict';
import './Product.js';

export default class ProductList {
	constructor(apiUrl) {
		this._products = this._respData(apiUrl);
	}

	async _respData(url, method = `GET`, data = {productList: true}) {
		const response = await fetch(url, /*{
			method: method, // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'same-origin', // include, *same-origin, omit
			headers: {
				// 'Content-Type': 'application/json'
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			redirect: 'follow', // manual, *follow, error
			referrerPolicy: 'no-referrer', // no-referrer, *client
			// body: JSON.stringify(data) // body data type must match "Content-Type" header
		}*/);
		this._products2 = await response.json()
	}

	showInfo() {
		console.log(this._products2);
	}

}