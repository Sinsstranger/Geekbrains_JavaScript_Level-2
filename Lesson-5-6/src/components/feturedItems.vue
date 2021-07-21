<template>
	<section class="catalog wrapper">
		<h2 class="section-heading">Fetured Items</h2>
		<p class="section-annotation">Shop for items based on what we featured in this week</p>
		<!-- 2 ряд специально не полный, чтобы понять замысел позиционирования -->
		<div class="catalog-list">
		<catalog-item v-for="product of this.getProducts" v-bind:product="product" :key="product.id"/>
		</div>
		<!-- Для центрирования кнопки употреблен text-align: canter у родителя, на сколько такое решение хорошее? -->
		<router-link to="/catalog" class="catalog__button">Browse All Product</router-link>
	</section>

</template>

<script>
import CatalogItem from "./CatalogItem";
import {mapGetters} from 'vuex';

export default {
	name: "feturedItems",
	components: {CatalogItem},
	computed: mapGetters(['getProducts']),
	data() {
		return {}
	}
}
</script>
