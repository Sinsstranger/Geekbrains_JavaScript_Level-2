<template>
  <header class="header">
    <div class="wrapper">
      <div class="header__left">
        <router-link to="/" class="interaction interaction-to-right search"><img src="../assets/images/dist/icons/logo.svg"
                                                                                 alt="Site-search"/></router-link>
        <router-link to="#" class="interaction interaction-to-right account"><img
            src="../assets/images/dist/icons/search-leanse.svg" alt="Account"/></router-link>
      </div>
      <div class="header__right">
        <label for="main-menu-trigger" class="interaction interaction-to-left menu-trigger"><img
            src="../assets/images/dist/icons/menu-hamburger.svg" alt="menu-trigger"/></label>
        <router-link to="/registration" class="interaction interaction-to-left logo"><img
            src="../assets/images/dist/icons/login-ico.svg" alt="Login"/></router-link>
        <router-link to="/cart" class="interaction interaction-to-left mini-cart">
          <img src="../assets/images/dist/icons/shop-cart-ico.svg" alt="mini-cart"/>
          <span class="mini-cart__goods-count">0</span>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "siteHeader",
};
</script>
<style lang="sass">
$accent: #F16D7F
#main-menu-trigger
	display: none
	&:checked
		& + .main-menu__wrapper
			margin-right: 0
.menu-trigger
	cursor: pointer
.header
	background: #222
	position: sticky
	top: 0
	z-index: 2
	.wrapper
		display: flex
		justify-content: space-between
		align-items: center
		padding: 0 .8rem
	&__left, &__right
		display: inherit
		align-items: center
	&__left
		margin-left: -1.6rem
	&__right
		margin-right: -1.6rem
</style>