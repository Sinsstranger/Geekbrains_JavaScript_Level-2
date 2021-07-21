<template>
  <main class="main">
    <section class="breadcrumbs pad-centerier">
      <h1 class="breadcrumbs__title recolored">SHOPPING CART</h1>
    </section>
    <cart/>
  </main>
</template>
<script>
import Cart from "../components/Cart";
export default {
  data: () => {
    return {}
  },
  components : {Cart}
}
</script>
<style lang="sass">
$accent: #F16D7F
.breadcrumbs
	background-color: #F8F3F4
	display: flex
	justify-content: space-between
	align-items: center
	flex-wrap: wrap
	min-height: 14.8rem
	margin-bottom: 5rem
	@media (max-width: 768px)
		justify-content: space-evenly
	@media (max-width: 449px)
		min-height: 10rem
	&__title, &__item
		text-transform: uppercase
	&__title, &__list
		@media (max-width: 768px)
			padding: 0 1rem
	&__title
		font-size: 2.4rem
		line-height: 2.9rem
		font-weight: normal
		@media (max-width: 449px)
			margin-bottom: 1rem
	&__list
	&__item
		font-size: 1.4rem
		line-height: 1.6rem
		color: #636363
		&:hover
			color: $accent
			text-decoration: none
		&.recolored
			color: $accent
		&:not(span)::after
			content: ' / '
</style>