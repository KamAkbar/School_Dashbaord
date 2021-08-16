<template>
  <div class="home">
    <Header />
    <Cards />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '../components/Footer.vue'
import Cards from '../components/Cards.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Cards,
  }
}
</script>
