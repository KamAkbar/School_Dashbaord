<template>
  <section class="container">
    <h2 class="table__title mt-3">All Empoleyees</h2>
    <table class="table mt-5">
      <tr>
        <th scope="col">#</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Position</th>
        <th scope="col">Department</th>
        <th scope="col">Gender</th>
        <th scope="col">Date of birth</th>
        <th scope="col">Activity</th>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
    name: 'Table'
};
</script>

<style lang="scss">
  .table{
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;

    display: table;
    border-collapse: separate;
    box-sizing: border-box;
    text-indent: initial;
    border-spacing: 2px;
    border-color: grey;
  }
</style>
