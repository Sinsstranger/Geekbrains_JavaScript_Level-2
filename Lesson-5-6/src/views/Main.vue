<template>
  <main class="main">
    <main-promo/>
    <categories/>
    <fetured-items/>
    <our-advantages/>
    <subscribe/>
  </main>
</template>

<script>
// @ is an alias to /src
import mainPromo from "../components/mainPromo";
import Categories from "../components/Categories";
import feturedItems from "../components/feturedItems";
import ourAdvantages from "../components/ourAdvantages";
import subscribe from "../components/subscribe";
export default {
  name: "Main",
  components: { mainPromo, Categories, feturedItems,ourAdvantages, subscribe },
};
</script>
