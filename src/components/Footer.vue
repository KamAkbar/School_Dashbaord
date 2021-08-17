<template>
  <footer class="footer">
      <h3 class="footer__title">School System</h3>
      <p class="footer__text">Powered by <a target="_blank" href="https://github.com/KamAkbar" class="footer__link link">Akbar</a></p>
  </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang='scss'>
    .footer{
        text-align: center;
        margin-top: 100px;
        background-color: #283044;
        padding: 40px 0 20px;
        color: #fff;
        &__link{
            color: #fff!important;
            border-radius: 80px;
            padding: 6px 8px;
            background: #c04848; /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #c04848, #480048); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #c04848, #480048);
        }
    }
</style>