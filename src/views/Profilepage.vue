<template>
  <section>
    <Header />
    <Profile />
    <Footer />
  </section>
</template>

<script>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Profile from '../components/Profile.vue'
export default {
    name: 'Profilepage',
    components: {
        Header,
        Profile,
        Footer
    }
}
</script>