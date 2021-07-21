<template>
  <section class="subscribe pad-centerier">
    <div class="subscribe__hello subscribe__item">
      <img :src="`${faceImage}`" alt="#" class="subscribe__image">
      <p class="subscribe__caption">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus
        condimentum“</p>
    </div>
    <div class="subscribe__item subscribe__form">
      <form method="POST">
        <h3 class="subscribe__title">SUBSCRIBE</h3>
        <p class="subscribe__caption subscribe__caption--form">FOR OUR NEWLETTER AND PROMOTION</p>
        <fieldset class="subscribe__fieldset">
          <!-- Проверяем по RFC 5322  (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])-->
          <input type="email" placeholder="Enter Your Email" required>
          <input type="submit" value="Subscribe"></fieldset>
      </form>
    </div>
  </section>
</template>

<script>
import faceImage from '@/assets/images/dist/face.png'

export default {
  name: "subscribe",
  data: () => {
    return {
      faceImage
    }
  }
}
</script>

<style scoped lang="sass">
$accent: #F16D7F
.subscribe
  background: linear-gradient(rgba(244, 244, 244, 0.7), rgba(244, 244, 244, 0.7)), url('../assets/images/dist/subscribe-background.png') left bottom/cover no-repeat
  min-height: 45rem
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  @media (max-width: 768px)
    flex-direction: column
    justify-content: stretch
    align-items: center

  &__item
    flex: 1 0 32rem
    display: inherit
    flex-direction: column
    justify-content: center
    align-items: center
    max-width: 36rem
    @media (max-width: 768px)
      flex-basis: auto

  &__image
    margin-bottom: 3rem

  &__caption
    font-size: 2rem
    line-height: 2.4rem
    text-align: center
    color: #222224

    &--form
      font-size: 1.8rem
      line-height: 3rem

  &__title
    font-size: 2.4rem
    line-height: 4rem
    text-align: center

  &__hello

  &__form

  &__fieldset
    display: flex
    justify-content: center
    border: none
    & > input
      display: block
      height: 5rem
      background: #E1E1E1
      padding: .7rem 2.2rem
      font-size: 1.4rem
      color: #222224
      box-sizing: border-box
      border: 1px solid transparent

      &[type="email"], &[type="text"]
        border-top-left-radius: 2.5rem
        border-bottom-left-radius: 2.5rem

      &[type="submit"]
        background-color: $accent
        border-color: $accent
        color: #E1E1E1
        border-top-right-radius: 2.5rem
        border-bottom-right-radius: 2.5rem
        box-sizing: border-box

        &:hover
          background-color: #E1E1E1
          color: $accent
</style>