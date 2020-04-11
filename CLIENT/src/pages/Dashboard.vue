<template>
  <div class="table-responsive-sm row">
    <h1 class="col-12 text-left">TASK APP</h1>
    <Table />
    <!-- <Sidebar /> -->
  </div>
</template>

<script>

import Table from '../components/Table'
// import Sidebar from '../components/Sidebar'
export default {
  name: 'Dashboard',
  components: {   
      Table,
      // Sidebar
  }
};
</script>

<style scoped>
</style>