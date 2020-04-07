<template>
  <div class="table-responsive-sm row">
    <Toolbar />
    <Table />
    <Sidebar />
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar'
import Table from '../components/Table'
import Sidebar from '../components/Sidebar'
export default {
  name: 'Dashboard',
  components: {
      Toolbar,
      Table,Sidebar
  }
};
</script>

<style scoped>
</style>