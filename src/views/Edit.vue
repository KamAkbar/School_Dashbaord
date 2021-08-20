
<template>
  <div class="Edit">
      <Header />
    <EditSection/>
    <Footer />
  </div>
</template>

<script>
import EditSection from "@/components/EditSection";
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  components: {
    EditSection, 
    Header, 
    Footer,
    }
}
</script>
