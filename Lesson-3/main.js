'use strict';
import ProductList from "./Classes/ProductList.js";

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

/**
 * 1. Переделайте makeGETRequest() так, чтобы она использовала промисы.
 * @param url
 * @param callback
 * @returns {Promise<void>}
 */
async function makeGETRequest(url = API_URL, callback = (error = false) => console.log(error ? `Не удалось получить данные с сервера` : `Callback отработал`)) {
	let response = await fetch(`${url}/catalogData.json`);
	if (response.ok) {
		response = await response.json();
		callback();
	} else {
		callback(true);
	}
}

makeGETRequest();

let one = await new ProductList(`${API_URL}/catalogData.json`);
// one._respData('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json').then(r => r);
one.showInfo()