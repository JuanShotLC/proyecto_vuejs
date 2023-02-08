<template>
  <div class="b-tabs is-horizontal">
    <nav class="tabs is-boxed is-small">
      <ul
        role="tablist"
      >
        <li
          v-for="tab in tabs"
          :key="tab"
          role="tab"
          aria-selected="true"
          :class="{ 'is-active' : tab === selected }"
        >
          <a
            @click="setTab(tab)"
          >
            <span>{{ tab }}</span>
          </a>
        </li>
      </ul>
    </nav>
    <slot />
  </div>
</template>
<script>
export default ({
  props: {
    tabs: {
      type: Array,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  methods: {
    setTab (tab) {
      this.$emit('selected', tab)
    }
  }
})
</script>
