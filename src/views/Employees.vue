<template>
  <div class="employees">
    <Header />
    <Table />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Table from '@/components/Table.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Employees',
  components: {
    Header,
    Footer,
    Table,
  }
}
</script>
