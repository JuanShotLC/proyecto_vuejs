<template>
  <footer
    v-show="isFooterBarVisible"
    class="footer"
  >
    <div class="container-fluid">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="footer-copyright">
              <b>&copy; {{ year }}, SICMED</b>.
            </div>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item">
            <div class="logo">
              <a
                href=""
                target="_blank"
              >
                <img
                  src="../assets/SICMED.png"
                  alt="SICMED"
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { useStore } from '@/store'
import { computed } from '@vue/composition-api'

export default {
  name: 'FooterBar',
  setup () {
    const year = new Date().getFullYear()

    const store = useStore()

    const isFooterBarVisible = computed(() => store.state.isFooterBarVisible)

    return {
      year,
      isFooterBarVisible
    }
  }
}
</script>
