<template>
  <footer>
    Footer
    <FloatBtn />
  </footer>
</template>

<script>
import FloatBtn from '~/components/FloatBtn.vue'
export default {
  components: {
    FloatBtn,
  },
}
</script>

<style lang="scss" scoped>
footer {
  @apply bg-gray-50 p-6;
}
</style>
