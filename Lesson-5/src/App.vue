<template>
  <site-header/>
  <main-menu/>
  <router-view/>
  <site-footer/>
</template>
<script>
import siteHeader from '@/components/siteHeader';
import mainMenu from "@/components/mainMenu";
import siteFooter from "@/components/siteFooter";

export default {
  name: 'App',
  components: {siteHeader, mainMenu, siteFooter}
}
</script>
<style lang="sass">
html, body
  margin: 0
// USER VARIABLES SECTION

$accent: #F16D7F
// Accent Color
$fontsize: 10px
// Body Font Size
$textcolor: #333
// Text Color
$lineheight: 1.65
// Document Line Height
$userfont: Lato, sans-serif
// User Font Family
$systemfont: -apple-system, BlinkMacSystemFont, Arial, sans-serif
// System Font Family
$maxContentFieldWidth: 1140px
// wrapper max-width
// Bootstrap compatible gutter variable => $gutter
$grid-gutter-width: 30px
$gutter: $grid-gutter-width

// IMPORT SECTION

//@import 'assets/bootstrap-reboot' // Bootstrap Reboot collection
//@import 'assets/breakpoints' // Bootstrap Breakpoints mixin
// @import 'node_modules/bootstrap/scss/bootstrap-grid.scss' // Optional Bootstrap Grid
// @import 'node_modules/bootstrap/scss/utilities/_sizing.scss' // Optional Bootstrap Utilites

// FONTS LOAD SECTION

@mixin font($fname, $fstyle, $fweight, $furl)
  @font-face
    font-family: $fname
    font-style: $fstyle
    font-weight: $fweight
    src: url($furl) format('woff2')
    font-display: swap

@include font('Lato', normal, 300, './assets/fonts/Lato-Light.woff2')
@include font('Lato', italic, 300, './assets/fonts/Lato-LightItalic.woff2')
@include font('Lato', normal, 400, './assets/fonts/Lato-Regular.woff2')
@include font('Lato', italic, 400, './assets/fonts/Lato-Italic.woff2')
@include font('Lato', normal, 700, './assets/fonts/Lato-Bold.woff2')
@include font('Lato', italic, 700, './assets/fonts/Lato-BoldItalic.woff2')
@include font('Lato', normal, 900, './assets/fonts/Lato-Black.woff2')
@include font('Lato', italic, 900, './assets/fonts/Lato-BlackItalic.woff2')
// GENERAL DOCUMENT STYLES

::placeholder
  color: #222224

::selection
  background-color: $accent
  color: #fff

input, textarea
  outline: none

  &:focus:required:invalid
    border-color: red

  &:required:valid
    border-color: green

html
  font-size: $fontsize

body
  font-family: $userfont
  font-size: $fontsize
  line-height: $lineheight
  color: $textcolor
  min-width: 320px
  position: relative
  overflow-x: hidden
  background-color: #fff
  display: flex
  flex-direction: column
  min-height: 100vh

main
  flex: 1 0 auto
// GENERAL PROJECT STYLES
::-webkit-details-marker
  display: none

summary
  display: block

.bold
  font-weight: 700

.black
  font-weight: 900
  font-size: 4.8rem

.wrapper
  max-width: $maxContentFieldWidth
  margin: 0 auto
  @media (max-width: 1140px)
    max-width: 1000px
  @media (max-width: 1030px)
    max-width: 900px
  @media (max-width: 768px)
    max-width: 704px

.pad-centerier
  padding: 0 calc(50% - 1140px / 2)
  @media (max-width: 1030px)
    padding: 0 calc(50% - 900px / 2)
  @media (max-width: 768px)
    padding: 0 calc(50% - 704px / 2)

.mini-cart
  position: relative

  &__goods-count
    position: absolute
    display: inline-flex
    justify-content: center
    align-items: center
    width: 1.5em
    height: 1.5em
    box-sizing: border-box
    content: ''
    top: -.5em
    right: -.5em
    color: white
    font-size: 1.2em
    line-height: 1.45em
    background-color: $accent
    border-radius: 50%

.recolored
  color: $accent

.interaction
  display: inline-flex
  margin: 1.8rem 1.6rem

.section
  &-heading, &-annotation
    text-align: center
    color: #222

  &-heading
    line-height: 3.6rem
    font-size: 3rem

  &-annotation
    font-size: 1.4rem
    line-height: 1.7rem
    color: #9F9F9F

.text-center
  text-align: center

input[type=number]
  //appearance: textfield
  appearance: auto
  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button
    display: none

[class*=-check-marked-list]
  list-style: none

  & > li
    position: relative
    padding-left: 1.9em
    margin-bottom: 1.5em
    font-size: 16px

    &::before
      content: ""
      width: 1em
      height: 1em
      position: absolute
      left: 0
      top: .25em
      background: transparent no-repeat center
      background-size: contain

.black-check-marked-list
  & > li
    &::before
      background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABBElEQVRIie3UMUoDQRQG4E8rUTAqRE9iIWij2IhYeQAP4BUEO7EJqJ122ukhbKwsRQRFEARBsQ4WmsQiWQizs5CNs2CRH6aZ9+Z9O7C7jPJPsoNj1KtElvCDDj6wWQUyiccekq0vjKeGjgKkg8vUyDJaAfKJhZTIFJ7lb7OdEoHTCHKRGllHO0DeMJcSqeFV/jYbZYbM4kD3uyjKeQQ5K4PM4LZ3sIm1SM9WBHnBdBnoOhjQxGpfvY73oKcd9AyUm8jT9mNXkfpJWQTmcV+ANSL7T7q/n6FSx11kaLhaWBkWKYMd/hUZBHvARCqoCPvGYkokS/iC7FeBZKlhD7sYqxIaJZdfhYF6R58+xmoAAAAASUVORK5CYII=")

.filter
  &-values
    margin-top: 2.4rem
    padding-right: 1.7rem
    list-style: none
    color: #6F6E6E

    li
      margin-bottom: 1.1rem

    a
      text-decoration: none
      color: inherit

.catalog
  text-align: center
  margin-bottom: 9.5rem

  &-list
    display: flex
    flex-wrap: wrap
    margin: 0 -1.5rem
    text-align: left
    @media (max-width: 1164px)
      margin: 0 -.8rem
    @media (max-width: 1030px)
      max-width: 740px
      margin: 0 auto
    @media (max-width: 671px)
      justify-content: center

  &__controls
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    @media (max-width: 1030px)
      max-width: 740px
      margin: 0 auto
    @media (max-width: 671px)
      max-width: 360px

  &__filter, &__options
    text-align: left
    font-size: 1.4rem
    text-transform: uppercase
    position: relative
    @media (max-width: 730px)
      flex-grow: 0
      flex-shrink: 1

  &__group
    position: absolute
    content: ''
    top: 0
    left: 0
    padding-top: 2.6em
    z-index: 1
    background-color: #fff
    width: 100%
    display: none
    box-shadow: 6px 4px 35px rgba(0, 0, 0, 0.21)
    min-width: 340px

  &__filter
    flex-grow: 1
    position: relative
    max-width: 36rem
    margin-right: 3rem
    min-width: 36rem
    @media (max-width: 730px)
      max-width: 100vw
      margin-right: 0
      min-width: max-content

    &--items
      & > summary
        font-weight: 600
        background: url(assets/images/dist/icons/filter.svg) right center/1.5rem 1rem no-repeat
        display: inline-block
        padding-right: 1.5em
        margin-top: 1.3rem
        margin-left: 1.7rem
        z-index: 2
        position: relative
        transition: all .2s ease-in-out
        @media (max-width: 730px)
          font-size: 0
          width: 1.5rem
          height: 1.5rem

      &[open], &:hover
        & > summary
          color: $accent
          background: url(assets/images/dist/icons/filter-hover.svg) right center/1.5rem 1rem no-repeat

        & > [class*="__group"]
          display: block

    &--menu
      margin: 1.8rem 1.7rem
      box-sizing: border-box

      & > summary
        min-height: 3.7rem
        border-bottom: 1px solid #EBEBEB
        display: flex
        align-items: center
        border-left: .5rem solid $accent
        padding-left: 1.7rem

  &__options
    flex-grow: 1.5
    display: flex
    color: #6F6E6E
    margin-top: 1.3rem
    @media (max-width: 730px)
      flex-grow: 0

    &--list
      margin-right: 1.5em

      summary
        background: url(assets/images/dist/icons/arrow-down.svg) right center/1rem .5rem no-repeat
        padding-right: 1.5em

  &__item
    flex: 1 0 32rem
    margin: 1.5rem
    max-width: 36rem
    background: #F8F8F8
    @media (max-width: 1164px)
      margin: .8rem

  &__cart
    max-width: 100%
    position: relative
    margin: 0

    &:hover
      .add-to-cart
        z-index: 0
        opacity: 1

  &__image
    display: block
    object-fit: contain
    max-width: inherit

  &__caption
    padding: 2rem

  &__title
    display: block
    font-size: 1.4rem
    line-height: 1.6rem
    color: #000
    margin-bottom: 1.2rem

    &:hover
      color: inherit

  &__description
    color: #5D5D5D
    font-size: 1.3rem
    margin-bottom: 1.2rem
    font-weight: 300

  &__price
    font-size: 1.6rem

  &__button
    display: inline-block
    color: $accent
    border: 1px solid $accent
    padding: 1.4rem 4rem
    font-size: 1.6rem
    line-height: 1.9rem
    text-decoration: none

    &:hover
      text-decoration: none
      color: #fff
      background-color: $accent

  &__pagination
    display: inline-flex
    padding: 1.5rem
    border: .1rem solid rgba(235, 235, 235, 1)
    font-size: 1.6rem
    color: #C4C4C4
    align-items: center

    &--prev, &--next
      width: 1em
      height: 1em
      background: transparent center/contain no-repeat
      margin: 0 .5em

    &--prev
      background-image: url(assets/images/dist/icons/pagen-prev.svg)

    &--next
      background-image: url(assets/images/dist/icons/pagen-next.svg)

    &--list
      flex-grow: 1
      display: inherit
      align-items: flex-end

    &--item
      color: inherit
      display: block
      padding: 0 1em

      &.active
        color: #000

      &:hover
        color: #000
        text-decoration: none

    &--spread
      margin: 0 -1em
      color: inherit

  .add-to-cart
    display: flex
    opacity: 0
    z-index: -1
    position: absolute
    top: 0
    align-items: center
    justify-content: center
    width: 100%
    height: 100%
    color: #fff
    background: rgba(58, 56, 56, 0.86)
    transition: all .2s ease-in-out .1s

    &__button
      color: inherit
      font-size: 1.4rem
      padding: 1em 1em 1em 5.6rem
      background: url(assets/images/dist/icons/shop-cart-ico.svg) 1.4rem center no-repeat
      box-sizing: border-box
      border: 1px solid #fff

      &:hover
        text-decoration: none
</style>