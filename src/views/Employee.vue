<template>
  <div class="employee">
    <Header />
    <Add />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header.vue'
import Add from '../components/Add.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'Employee',
    components: {
        Header,
        Add,
        Footer,
    }
}
</script>
