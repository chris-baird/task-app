<template>
  <div class="col-9">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Current Phase</th>
          <th scope="col">Phase Progress</th>
          <th scope="col">Due Date</th>
          <th scope="col">Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jones Baseball Academy</td>
          <td>Testing</td>
          <td>80%</td>
          <td>07-20-20</td>
          <td>
            <button>Options</button>
          </td>
        </tr>
        <tr>
          <td>Austin Retro Center</td>
          <td>Planning</td>
          <td>30%</td>
          <td>11-9-20</td>
          <td>
            <button>Options</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
export default {
  name: "Table",
};
</script>