<template>
	<footer class="footer pad-centerier">
		<div class="copiryght">&copy; 2021 Brand All Rights Reserved.</div>
		<div class="footer__socials">
			<router-link to="#" class="footer__icon"><img src="../assets/images/dist/icons/facebook-ico.svg" alt="#"><img src="../assets/images/dist/icons/facebook-ico-white.svg" alt="#"></router-link>
			<router-link to="#" class="footer__icon"><img src="../assets/images/dist/icons/twitter-ico.svg" alt="#"><img src="../assets/images/dist/icons/twitter-ico-white.svg" alt="#"></router-link>
			<router-link to="#" class="footer__icon"><img src="../assets/images/dist/icons/pinterest-ico.svg" alt="#"><img src="../assets/images/dist/icons/pinterest-ico-white.svg" alt="#"></router-link>
			<router-link to="#" class="footer__icon"><img src="../assets/images/dist/icons/instagram-ico.svg" alt="#"><img src="../assets/images/dist/icons/instagram-ico-white.svg" alt="#"></router-link>
		</div>
	</footer>
</template>

<script>
export default {
  name: "siteFooter"
}
</script>

<style scoped lang="sass">
$accent: #F16D7F
.footer
   background: #222224
   display: flex
   justify-content: space-between
   align-items: center
   padding-top: 2.4rem
   padding-bottom: 2.4rem
   color: #FBFBFB
   font-size: 1.6rem
   line-height: 1.9rem
   @media (max-width: 440px)
      flex-direction: column
   &__socials
      display: flex
      justify-content: inherit
      font-size: 1.4rem
   &__icon
      display: inherit
      background-color: #fff
      padding: .8rem
      margin: .8rem
      box-sizing: border-box
      min-width: 3.2rem
      &>img
         &:last-child
            display: none
      &:hover
         color: #fff
         background-color: $accent
         &>img
            &:last-child
               display: initial
            &:first-child
               display: none
   .copiryght
      @media (max-width: 440px)
         margin-bottom: 1rem

</style>