<template>
	<section class="cart wrapper">
		<div class="cart__area">
			<div class="cart__items">
				<cart-item v-for="(cartItem, cartIndex) in getCartList" :key="cartIndex" :cartItem="cartItem"/>
			</div>
			<div class="cart__controls">
				<router-link to="#" class="cart__control" data-role="clear" onclick="return false;">CLEAR SHOPPING CART</router-link>
				<router-link to="/catalog" class="cart__control" data-role="continue">CONTINUE SHOPPING</router-link>
			</div>
		</div>
		<div class="cart__area">
			<form action="#" method="POST" class="cart__form" data-role="getQuote">
				<fieldset class="cart__form_inputs">
					<h3 class="cart__area_title">SHIPPING ADRESS</h3>
					<input type="text" name="name" placeholder="Bangladesh"/>
					<input type="text" name="state" placeholder="State"/>
					<input type="text" name="zipCode" placeholder="Postcode / Zip"/>
					<input type="submit" value="GET A QUOTE" name="quote"/>
				</fieldset>
				<fieldset class="cart__form_order">
					<div class="cart__price">
						<p class="cart__price_sub">SUB TOTAL <span class="value">$900</span></p>
						<p class="cart__price_total">GRANG TOTAL <span class="value recolored">$900</span></p>
					</div>
					<input class="cart__button" type="submit" value="PROCEED TO CHECKOUT" name="checkout">
				</fieldset>
			</form>
		</div>
	</section>
</template>

<script>
import {mapGetters} from "vuex";
import cartItem from "./cartItem";

export default {
	name: "Cart",
	computed: mapGetters(['getCartList']),
	components: {cartItem}
}
</script>

<style lang="sass">
$accent: #F16D7F
.cart
	display: flex
	flex-wrap: wrap
	justify-content: space-between
	margin-bottom: 6.4rem
	@media (max-width: 1140px)
		justify-content: space-evenly

	&__area
		margin-bottom: 6.4rem
		@media (max-width: 1140px)
			flex-grow: 1

		&_title
			font-weight: 300
			font-size: 1.6rem
			line-height: 1.9rem
			color: #222222
			margin-bottom: 2rem
			flex-basis: 100%

	&__items
		box-sizing: border-box
		max-width: 65.2rem
		@media (max-width: 1140px)
			max-width: 100%
			padding: 0 1rem

	&__item
		display: flex
		margin-bottom: 4rem
		box-shadow: 1.7rem 1.9rem 2.4rem rgba(0, 0, 0, 0.13)

	&__title
		font-size: 2.4rem
		line-height: 2.9rem
		@media (max-width: 633px)
			font-size: 1.6rem
			line-height: 1.9rem

	&__image
		display: block
		object-fit: contain
		max-width: 26.2rem
		height: auto
		flex-shrink: 1
		@media (max-width: 633px)
			max-width: 20rem

	&__caption, &__remove
		margin: 2.8rem 2.2rem

	&__caption
		flex: 1 1 auto
		display: inherit
		flex-direction: column
		justify-content: space-between
		margin-top: calc(2.8rem - .5em)

		input
			display: inline-block
			max-width: 2em
			text-align: center
			border: 1px solid #EAEAEA

	&__remove
		width: 1.8rem
		height: 1.8rem
		background: url(../assets/images/dist/icons/cross-close.svg) center/contain no-repeat
		cursor: pointer
		flex-shrink: 0
		margin-left: 0

		&:hover
			transform: scale(1.1)

	&__props
		font-size: 2.2rem
		color: #575757
		@media (max-width: 633px)
			font-size: 1.4rem

		&_item
			line-height: 2.6rem
			margin-bottom: 1rem
			@media (max-width: 633px)
				line-height: 1.6rem

	&__controls
		display: flex
		justify-content: space-between
		align-items: center
		font-weight: 300
		font-size: 1.4rem
		line-height: 1.7rem
		color: #000
		@media (max-width: 633px)
			font-size: 1.2rem
			line-height: 1.4rem
			padding: 0 1rem

	&__control
		display: inline-block
		padding: 1.7rem 4rem
		color: inherit
		border: 1px solid #A4A4A4
		transition: all .2s ease-in-out
		text-decoration: none

		&:hover
			text-decoration: none
			color: $accent
			border-color: $accent

		@media (max-width: 633px)
			padding: 1rem 1.5rem

	&__form
		width: 36rem
		@media (max-width: 1140px)
			width: auto
			flex-grow: 1
			display: flex
			flex-wrap: wrap
			justify-content: space-between
			padding: 0 1rem
		@media (max-width: 930px)
			justify-content: space-evenly
			align-items: center

		&_inputs, &_order
			border: none
			@media (max-width: 1140px)
				flex: 0 1 100%

		&_inputs
			display: flex
			flex-direction: column
			margin-bottom: 6.4rem

			input
				border: 1px solid #A4A4A4
				box-sizing: border-box
				min-height: 45px
				margin-bottom: 2rem
				font-weight: 300
				font-size: 1.3rem
				line-height: 1.6rem
				color: #222222
				padding: 0 1.7rem
				background: #FFF

				&:placeholder
					color: #B1B1B1

				&[type="submit"]
					background-color: #fff
					font-size: 1.1rem
					align-self: flex-start
					transition: all .3s ease-in-out

					&:hover
						color: #fff
						background-color: $accent

		&_order
			background: #F5F3F3
			padding: 4rem 3.4rem
			@media (max-width: 1140px)
				align-self: flex-start

	&__price
		border-bottom: 1px solid #E2E2E2
		text-align: right
		margin-bottom: 1.7rem
		font-weight: 300

		&_sub, &_total
			.value
			display: inline-block
			padding-left: 1.3em

		&_sub
			color: #4A4A4A
			font-size: 1.1rem
			line-height: 1.3rem

		&_total
			color: #222222
			font-size: 1.6rem
			line-height: 1.9rem

	&__button
		display: block
		margin: 0 auto
		color: #fff
		background-color: $accent
		border: 1px solid transparent
		padding: 1.5rem 4rem
		text-align: center
		font-size: 1.6rem
		line-height: 1.9rem
		font-weight: 300
		box-sizing: border-box
		transition: all .2s ease-in-out
		cursor: pointer

		&:hover
			color: $accent
			border-color: $accent
			background-color: #fff
</style>