<template>
<section class="main-promo">
   <div class="wrapper main-promo__content">
      <h1 class="main-promo__title"><span class="black">THE BRAND</span><br>OF LUXERIOUS <span class="recolored">FASHION</span></h1>
   </div>
</section>
</template>

<script>
export default {
  name: "mainPromo"
}
</script>

<style scoped lang="sass">
$accent: #F16D7F
.main-promo
   background: #F1E4E6
   &__content
      display: flex
      justify-content: flex-end
      align-items: center
      background: url(../assets/images/dist/man.png) -65% bottom/70% no-repeat
      min-height: 76.4rem
      @media (max-width: 930px)
         min-height: 368px
         background: url(../assets/images/dist/man.png) -5% bottom/contain no-repeat
      @media (max-width: 680px)
         background: none
         justify-content: center
   &__title
      font-size: 3.2rem
      flex-basis: 50%
      border-left: 1.6rem solid $accent
      padding-left: 3.2rem
      line-height: 3.84rem
      @media (max-width: 680px)
         flex-basis: 50vw
         font-size: 2rem
         padding-left: 1.5rem
         border-left-width: 1.2rem
      .black
         line-height: 5.76rem
         font-size: 4.8rem
         @media (max-width: 680px)
            font-size: 3.6rem
</style>