<template>
	<div class="catalog__item" :id="product.id">
		<p class="catalog__cart"><img :src="product.image" alt="#" class="catalog__image"/>
			<span class="add-to-cart">
            <router-link to="#" class="add-to-cart__button" @click.prevent="this.handleAddToCart(product)">Add to Cart</router-link>
         </span>
		</p>
		<div class="catalog__caption">
			<router-link to="#" class="catalog__title">{{ product.title }}</router-link>
			<p class="catalog__description">{{ product.description }}</p>
			<p class="catalog__price recolored">{{ product.price }}</p>
		</div>
	</div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
	name: "CatalogItem",
	props: ['product'],
	methods: mapMutations(['handleAddToCart']),
	mounted() {
	}
}
</script>