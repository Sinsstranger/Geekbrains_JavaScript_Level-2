<template>
  <div class="wrapper">
    <section class="caregories">
      <router-link to="/catalog" class="caregories__item"
                   :style="{background: `url(${categoriesImages.forWoman}) center/cover no-repeat`}">
        <p class="caregories__event">30% OFF</p>
        <p class="caregories__title recolored">FOR WOMEN</p>
      </router-link>
      <router-link to="/catalog" class="caregories__item"
                   :style="{background: `url(${categoriesImages.forMen}) center/cover no-repeat`}">
        <p class="caregories__event">HOT DEAL</p>
        <p class="caregories__title recolored">FOR MEN</p>
      </router-link>
      <router-link to="/catalog" class="caregories__item"
                   :style="{background: `url(${categoriesImages.forKids}) center/cover no-repeat`}">
        <p class="caregories__event">NEW ARRIVALS</p>
        <p class="caregories__title recolored">FOR KIDS</p>
      </router-link>
      <router-link to="/catalog" class="caregories__item"
                   :style="{background: `url(${categoriesImages.accesories}) center/cover no-repeat`}">
        <p class="caregories__event">LUXIROUS & TRENDY</p>
        <p class="caregories__title recolored">ACCESORIES</p>
      </router-link>
    </section>
  </div>
</template>

<script>
import forWoman from '@/assets/images/dist/categories/for-woman.png'
import forMen from '@/assets/images/dist/categories/for-men.png'
import forKids from '@/assets/images/dist/categories/for-kids.png'
import accesories from '@/assets/images/dist/categories/accesories.png'

export default {
  name: "Categories",
  data: () => {
    return {
      categoriesImages: {
        forWoman,
        forMen,
        forKids,
        accesories
      }
    }
  }
}
</script>

<style scoped lang="sass">
.caregories
  display: flex
  flex-wrap: wrap
  margin: 6.5rem -1.5rem
  @media (max-width: 1140px)
    margin: 6.5rem 0

  &__item
    flex: 1 0 32rem
    min-height: 26rem
    display: inherit
    flex-flow: column nowrap
    align-items: center
    justify-content: center
    margin: 1.5rem
    font-size: 1.6rem
    text-decoration: none
    position: relative
    @media (max-width: 1140px)
      flex-basis: 22rem
      min-height: 23rem
      margin: .6rem

    &::before
      display: block
      position: absolute
      content: ''
      background: rgba(33, 22, 22, 0.7)
      width: 100%
      height: 100%
      transition: all .2s ease-in-out .1s

    &:hover
      text-decoration: none
      transform: scale(1.02)

      &::before
  // background: transparent
  &__event, &__title
    z-index: 1

  &__event
    line-height: .25em
    color: #FFF

  &__title
    font-size: 1.5em

</style>