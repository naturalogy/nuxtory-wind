<template>
  <section>
    <h1>Section Heading</h1>
    <p>Hello, beautiful world!</p>
    <p>
      <nuxt-link to="/example" class="btn btn-secondary">
        Example Page
        <i class="fas fa-chevron-right ml-2"></i>
      </nuxt-link>
    </p>
  </section>
</template>

<script>
export default {
  head: {
    titleTemplate: '',
    title: process.env.npm_package_name,
  },
}
</script>

<style lang="scss" scoped></style>
