<template>
  <div>
    <!-- <title-bar :title-stack="titleStack" /> -->
    <hero-bar :has-right-visible="false">
      Dashboard
    </hero-bar>
    <section class="section is-main-section">
    </section>
  </div>
</template>

<script>
import { onMounted } from '@vue/composition-api'
import HeroBar from '@/components/HeroBar.vue'

export default {
  name: 'Home',
  components: {
    HeroBar
  },
  setup (props, { root: { $buefy } }) {
    const titleStack = ['Admin', 'Dashboard']
    onMounted(() => {
      $buefy.snackbar.open({
        message: 'Welcome back',
        queue: false
      })
    })
    return {
      titleStack
    }
  }
}
</script>
