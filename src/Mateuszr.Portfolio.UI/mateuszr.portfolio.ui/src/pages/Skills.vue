<template>
  <q-page>
    <div class="page-container">
      <div class=".fit-content-vertical">
        <div style="min-width: 900px">
          <DataTable
            btnColor="teal-3"
            :rows="softRows"
            :columns="softColumns"
            title="Umiejętności miękkie"
            :showExpand="false"
          ></DataTable>
        </div>
        <div style="min-width: 900px">
          <DataTable
            btnColor="teal-3"
            :rows="techRows"
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
    label: "Name",
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
    label: "Nazwa",
    align: "left",
    field: (row) => row.name,
    sortable: true,
  },
  {
    name: "acquisitionDate",
    align: "center",
    label: "Data nabycia kompetencji",
    field: "acquisitionDate",
    format: (val) => `${val ?? "-"}`,
    sortable: true,
  },
  {
    name: "isConfirmed",
    label: "Wystawiający certyfikat",
    field: "certification",
    sortable: true,
    format: (val) => `${val ?? "-"}`,
  },
];

const softRows = [
  {
    name: "Prawo jazdy kat. B",
    acquisitionDate: "11.2011",
    certification: "Starostwo powiatowe w pabianicach",
  },
  {
    name: "Język angielski poziom C1",
    acquisitionDate: "01.2016",
    certification: "Politechnika Łódzka",
  },
  {
    name: "Praca w zwinnych metodykach tworzenia oprogramowania",
    acquisitionDate: null,
    certification: null,
  },
];

const techRows = [
  {
    name: ".NET",
    values: 
      [
        {
          label: "ASP.NET",
          stars: 3
        },
        {
          label: ".NET Framework",
          stars: 3
        },
        {
          label: "SSRS",
          stars: 2
        },
        {
          label: ".NET core/.NET 5",
          stars: 2
        },
      ]
  },
  {
    name: "Javascript",
    values: 
    [
      {
        label: "Knockout.JS",
        stars: 3
      },
      {
        label: "Vue.JS",
        stars: 2
      },
      {
        label: "Angular.JS",
        stars: 2
      },
      {
        label: "React",
        stars: 1
      }
    ]
  },
  {
    name: "SQL",
    values: 
    [
      {
      label:"SQL Server",
      stars: 3
      }
    ]
  },
  {
    name: "Business Process Management",
    values: 
    [
      {
        label: "K2 Five (blackpearl)",
        stars: 3
      }
    ]
  },
  {
    name: "Sharepoint",
    values: 
    [
      {
        label: "Sharepoint 2013/2016/2019 on premises",
        stars: 2
      }
    ]
  },
  {
    name: "Other",
    values: []
  },
];
import DataTable from "../components/DataTable.vue";
export default {
  name: "Skills",
  components: { DataTable },
  data() {
    return { softRows, softColumns, techRows, techColumns };
  },
  setup() {
    return {};
  },
};
</script>