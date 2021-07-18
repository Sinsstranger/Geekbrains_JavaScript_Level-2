<template>
  <nav class="main-menu">
    <input type="checkbox" id="main-menu-trigger">
    <div class="main-menu__wrapper">
      <label for="main-menu-trigger" class="main-menu__close"></label>
      <p class="main-menu__title">Menu</p>
      <ul class="main-menu__list">
        <li class="main-menu__item">
          <span class="main-menu__cat"><router-link to="#" class="main-menu__link">MAN</router-link></span>
          <ul class="main-menu__sub">
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Accessories</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Bags</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Denim</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">T-Shirts</router-link></li>
          </ul>
        </li>
        <li class="main-menu__item">
          <span class="main-menu__cat"><router-link to="#" class="main-menu__link">WOMAN</router-link></span>
          <ul class="main-menu__sub">
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Accessories</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Jackets & Coats</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Polos</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">T-Shirts</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Shirts</router-link></li>
          </ul>
        </li>
        <li class="main-menu__item">
          <span class="main-menu__cat"><router-link to="#" class="main-menu__link">KIDS</router-link></span>
          <ul class="main-menu__sub">
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Accessories</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Jackets & Coats</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Polos</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">T-Shirts</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Shirts</router-link></li>
            <li class="main-menu__item"><router-link to="#" class="main-menu__link">Bags</router-link></li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "mainMenu",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
$accent: #F16D7F
.main-menu
	position: sticky
	top: 7.4rem
	z-index: 2
	font-size: 1.4rem
	line-height: 1.7rem
	color: #6F6E6E
	max-height: calc( 1vh - 7.4rem )
	box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21)
	&__sub
		padding-left: 1em
	&__wrapper
		position: absolute
		top: 0
		right: 0
		content: ''
		min-width: 23.2rem
		background-color: #fff
		box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21)
		display: flex
		flex-direction: column
		margin-right: -100%
		transition: all .3s ease-in-out .1s
	&__title
		color: #000
		font-weight: bold
		margin-bottom: 2.4rem
	&__close
		background: url(../assets/images/dist/icons/cross-close.svg) center/contain no-repeat
		width: 1.2rem
		height: 1.2rem
		margin: 1.6rem
		align-self: flex-end
		cursor: pointer
	&__cat
		color: $accent
		margin-bottom: 1.1em
		display: block
	&__item
		margin-bottom: 1.1rem
	&__list, &__sub
		list-style: none
	&__title, &__list
		padding: 0 3.3rem
	&__link
		color: inherit
		&:hover
			color: inherit
</style>
