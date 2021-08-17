<template>
  <div class="about">
    <Header />
    <h1  class="about__title mt-5 container">School  System</h1>
    <p class="about__text fs-5 container mt-5">Generation of reports on employee attendance, taking into account work schedules, time off, sick leave, late arrivals and overtime. Information is presented in visual infographics. <br><br>
    An auto-filled time sheet saves the accountant's time and simplifies payroll accounting in the company. <br><br>
    Setting and tracking KPIs helps to improve work efficiency and allows you to deservedly pay employees. <br><br>
    </p>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    Header,
    Footer,
  }
}
</script>
