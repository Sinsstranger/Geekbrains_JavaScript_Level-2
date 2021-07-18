<template>
<section class="catalog wrapper">
	<h2 class="section-heading">Fetured Items</h2>
	<p class="section-annotation">Shop for items based on what we featured in this week</p>
	<!-- 2 ряд специально не полный, чтобы понять замысел позиционирования -->
	<div class="catalog-list">
		<div class="catalog__item">
			<p class="catalog__cart"><img :src="`${productExample}`" alt="#" class="catalog__image" />
         <span class="add-to-cart">
            <router-link to="#" class="add-to-cart__button">Add to Cart</router-link>
         </span>
         </p>
			<div class="catalog__caption">
				<router-link to="#" class="catalog__title">ELLERY X M'O CAPSULE</router-link>
				<p class="catalog__description">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
				<p class="catalog__price recolored">$52.00</p>
			</div>
		</div>
		<div class="catalog__item">
			<p class="catalog__cart"><img :src="`${productExample}`" alt="#" class="catalog__image" />
         <span class="add-to-cart">
            <router-link to="#" class="add-to-cart__button">Add to Cart</router-link>
         </span>
         </p>
			<div class="catalog__caption">
				<router-link to="#" class="catalog__title">ELLERY X M'O CAPSULE</router-link>
				<p class="catalog__description">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
				<p class="catalog__price recolored">$52.00</p>
			</div>
		</div>
		<div class="catalog__item">
			<p class="catalog__cart"><img :src="`${productExample}`" alt="#" class="catalog__image" />
         <span class="add-to-cart">
            <router-link to="#" class="add-to-cart__button">Add to Cart</router-link>
         </span>
         </p>
			<div class="catalog__caption">
				<router-link to="#" class="catalog__title">ELLERY X M'O CAPSULE</router-link>
				<p class="catalog__description">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
				<p class="catalog__price recolored">$52.00</p>
			</div>
		</div>
		<div class="catalog__item">
			<p class="catalog__cart"><img :src="`${productExample}`" alt="#" class="catalog__image" />
         <span class="add-to-cart">
            <router-link to="#" class="add-to-cart__button">Add to Cart</router-link>
         </span>
         </p>
			<div class="catalog__caption">
				<router-link to="#" class="catalog__title">ELLERY X M'O CAPSULE</router-link>
				<p class="catalog__description">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
				<p class="catalog__price recolored">$52.00</p>
			</div>
		</div>
		<div class="catalog__item">
			<p class="catalog__cart"><img :src="`${productExample}`" alt="#" class="catalog__image" />
         <span class="add-to-cart">
            <router-link to="#" class="add-to-cart__button">Add to Cart</router-link>
         </span>
         </p>
			<div class="catalog__caption">
				<router-link to="#" class="catalog__title">ELLERY X M'O CAPSULE</router-link>
				<p class="catalog__description">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
				<p class="catalog__price recolored">$52.00</p>
			</div>
		</div>
	</div>
	<!-- Для центрирования кнопки употреблен text-align: canter у родителя, на сколько такое решение хорошее? -->
	<router-link to="catalog" class="catalog__button">Browse All Product</router-link>
</section>

</template>

<script>
import productExample from '@/assets/images/dist/product-example.png';
export default {
  name: "feturedItems",
  data: () => {
    return {productExample}
  }
}
</script>

<style scoped>

</style>