<template>
	<div class="cart__item">
		<img :src="cartItem.image" alt="#" class="cart__image"/>
		<div class="cart__caption">
			<div class="cart__title">{{ cartItem.title }}</div>
			<div class="cart__props">
				<div class="cart__props_item">Price: <span
					class="cart__props_value recolored">{{ cartItem.price * cartItem.quantity }}</span></div>
				<div class="cart__props_item">Color: <span class="cart__props_value">Red</span></div>
				<div class="cart__props_item">Size: <span class="cart__props_value">Xl</span></div>
				<label class="cart__props_item">Quantity: <input type="number" name="count" id="#"
																				 :value="cartItem.quantity"
																				 min="0"
																				 max="10"/></label>
			</div>
		</div>
		<div class="cart__remove" @click="this.handleRemoveFromCart(cartItem)"></div>
	</div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
	name: "cartItem",
	props: ['cartItem'],
	methods: mapMutations['handleRemoveFromCart']
}
</script>

<style scoped>

</style>