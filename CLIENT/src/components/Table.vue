<template>
  <div class="col-sm-12 col-lg-12 table-responsive">
    <Toolbar />
    <table class="table text-left">
      <thead>
        <tr>
          <th>Project</th>
          <th>Phase</th>
          <th>Stage</th>
          <th>Phase Progress</th>
          <th>Project Progress</th>
          <th>Due Date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jones Baseball Academy</td>

          <td>
            <p class="d-block mx-auto">Testing</p>
          </td>
          <td>Browser Support</td>
          <td class="pt-3">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 25%;"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </td>
          <td class="pt-3">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 75%;"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </td>
          <td>07-20-20</td>
          <td class="pt-2">
            <div class="dropdown">
              <button
                class="btn btn-sm btn-secondary"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
                <i class="fas fa-chevron-circle-up"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Austin's Retro Emporium</td>

          <td>
            <p class="d-block mx-auto">Planning</p>
          </td>
          <td>Wireframing</td>
          <td class="pt-3">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 10%;"
                aria-valuenow="10"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </td>
          <td class="pt-3">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style="width: 5%;"
                aria-valuenow="5"
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </td>
          <td>12-20-20</td>
          <td class="pt-2">
            <div class="dropdown">
              <button
                class="btn btn-sm btn-secondary"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Menu
                <i class="fas fa-chevron-circle-up"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import Toolbar from "./Toolbar.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Table",
  data() {
    return { userData: [] };
  },
  methods: {
    ...mapActions(["fetchUserData"]),
  },
  computed: mapGetters(["userData"]),
  created() {
    this.fetchUserData(1);
  },
  components: {
    Toolbar,
  },
};
</script>
