<template>
  <q-page>
    <div class="page-container">
      <div class=".fit-content-vertical">
        <div style="min-width: 900px">
          <DataTable
            btnColor="teal-3"
            :rows="softSkills"
            :columns="softColumns"
            title="Umiejętności miękkie"
            :showExpand="false"
          ></DataTable>
        </div>
        <div style="min-width: 900px">
          <DataTable
            btnColor="teal-3"
            :rows="technicalSkills"
            :columns="techColumns"
            title="Umiejętności techniczne"
            :showExpand="true"
          >
            <template v-slot:subRows="props"><!--TODO: Ogarnąć propsy-->
              <!-- <div v-if="row.values" v-for="item in row.values" :key="item.key"> -->
                <div class="flex-container-td">{{ props.row.name }}</div>
                <div class="flex-container-td-right">
                  <div class="rating">
                    <span v-bind:class="row.stars > 0 ? 'marked': 'unmarked'">★</span>
                    <span v-bind:class="row.stars > 1 ? 'marked': 'unmarked'">★</span>
                    <span v-bind:class="row.stars > 2 ? 'marked': 'unmarked'">★</span>
                  </div>
                </div>
              <!-- </div> -->
            </template>
          </DataTable>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
const softColumns = [
  {
    name: "name",
    required: true,
    label: "Nazwa",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "acquisitionDate",
    align: "center",
    label: "Data otrzymania",
    field: "acquisitionDate",
    format: (val) => `${val ?? "-"}`,
    sortable: true,
  },
  {
    name: "isConfirmed",
    label: "Certyfikat",
    field: "certification",
    sortable: true,
    format: (val) => `${val ?? "-"}`,
  },
];
const techColumns = [
  {
    name: "name",
    required: true,
    label: "",
    align: "left",
    field: (row) => row.name,
    sortable: true,
    classes:"regular-row"

  }
];

import DataTable from "../components/DataTable.vue";
import {mapActions,mapGetters} from 'vuex';
import { computed } from '@vue/reactivity';
export default {
  name: "Skills",
  components: { DataTable },
  data() {
    return {softColumns, techColumns };
  },
  setup() {
    return {};
  },
  methods: {
    ...mapActions('skills', ['fetchTechnicalSkills','fetchSoftSkills'])
  },

  computed: {
    ...mapGetters('skills', ['technicalSkills','softSkills'])
  },
  mounted() {
    this.fetchTechnicalSkills();
    this.fetchSoftSkills();
  }
};
</script>