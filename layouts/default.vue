<template>
  <div id="app">
    <Header />
    <main role="main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style lang="scss">
html,
body,
#__nuxt,
#__layout,
#app {
  height: 100%;
}

html,
body {
  font-feature-settings: 'palt';
}

#app {
  display: flex;
  flex-direction: column;
}

main {
  @apply container flex-grow px-6 mx-auto;
}

section {
  @apply mb-12;
  h1 {
    @apply font-bold text-5xl text-gray-500 mb-6;
  }
  p {
    @apply mb-6;
  }
}

.btn {
  @apply py-3 px-6;
  &-secondary {
    @apply bg-gray-500 hover:bg-gray-600 text-white border-gray-600 transition-colors;
  }
}
</style>
