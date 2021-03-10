<template>
  <div class="fixed right-3 bottom-3">
    <button class="btn btn-primary" @click="reset()">
      <i class="fas fa-sync-alt"></i>
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    reset: () => location.reload(),
  },
}
</script>

<style lang="scss" scoped>
.btn {
  @apply leading-none p-6 rounded-full shadow-md;
}
</style>
