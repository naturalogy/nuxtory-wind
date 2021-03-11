<template>
  <section>
    <h1>Example Page</h1>
    <p>Blazing-fast routing huh?</p>
    <p>
      <nuxt-link to="/" class="btn btn-secondary">
        <i class="fas fa-home mr-2"></i>
        Home
      </nuxt-link>
    </p>
  </section>
</template>

<script>
export default {
  head: {
    title: 'Example Page',
  },
}
</script>

<style lang="scss" scoped></style>
