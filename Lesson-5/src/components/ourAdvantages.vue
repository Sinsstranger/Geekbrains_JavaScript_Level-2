<template>
  <section class="our-advantages">
    <div class="our-advantages__list wrapper">
      <div class="our-advantages__item">
        <img :src="`${advantages.delivery}`" alt="#" class="our-advantages__image"/>
        <p class="our-advantages__title">Free Delivery</p>
        <div class="our-advantages__caption">Worldwide delivery on all. Authorit tively morph next-generation innov tion
          with extensive models.
        </div>
      </div>
      <div class="our-advantages__item">
        <img :src="`${advantages.interest}`" alt="#" class="our-advantages__image"/>
        <p class="our-advantages__title">Sales & discounts</p>
        <div class="our-advantages__caption">Worldwide delivery on all. Authorit tively morph next-generation innov tion
          with extensive models.
        </div>
      </div>
      <div class="our-advantages__item">
        <img :src="`${advantages.crown}`" alt="#" class="our-advantages__image"/>
        <p class="our-advantages__title">Quality assurance</p>
        <div class="our-advantages__caption">Worldwide delivery on all. Authorit tively morph next-generation innov tion
          with extensive models.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import delivery from '@/assets/images/dist/infographic/delivery.svg'
import interest from '@/assets/images/dist/infographic/interest.svg'
import crown from '@/assets/images/dist/infographic/crown.svg'

export default {
  name: "ourAdvantages",
  data: () => {
    return {
      advantages: {
        delivery,
        interest,
        crown
      }
    }
  }
}
</script>

<style scoped lang="sass">
.our-advantages
  background: #222
  color: #fff
  padding: 8.5rem 0

  &__list
    display: flex
    flex-wrap: wrap
    @media (max-width: 1300px)
      max-width: 640px
      margin: 0 auto
    @media (max-width: 768px)
      align-items: center
      flex-direction: column
      justify-content: flex-start

  &__item
    flex: 1 0 32rem
    text-align: center
    font-size: 1.4rem
    box-sizing: border-box
    padding: .7rem 1.4rem
    display: inherit
    flex-direction: column
    align-items: center
    @media (max-width: 1300px)
      flex-grow: 0
    @media (max-width: 768px)
      flex-basis: auto
      margin-bottom: 2.8rem

  &__image
    margin-bottom: 2.8rem
    object-fit: contain
    display: inline-block
    width: 5rem
    height: 5rem
    @media (max-width: 768px)
      margin-bottom: 2rem

  &__title
    font-size: 1.9rem
    line-height: 2.4rem

  &__caption
    max-width: 36rem
    color: rgba(251, 251, 251, .7)
    font-weight: 300
    font-size: 1.3rem
    line-height: 1.7rem
</style>