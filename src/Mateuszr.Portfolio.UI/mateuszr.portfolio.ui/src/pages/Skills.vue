<template>
  <q-page>
    <div class="page-container">
      <div class=".fit-content-vertical">
        <div style="min-width:900px">
          <DataTable
            btnColor="teal-3"
            :rows="softRows"
            :columns="softColumns"
            title="Soft skills"
            :showExpand="false"
          ></DataTable>
        </div>
        <div style="min-width:900px">
          <DataTable
            btnColor="teal-3"
            :rows="techRows"
            :columns="techColumns"
            title="Technical skills"
            :showExpand="true"
          ></DataTable>
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
    sortable: true
  },
  {
    name: "acquisitionDate",
    align: "center",
    label: "Acquisition date",
    field: "acquisitionDate",
    format: (val) => `${val?? "-"}`,
    sortable: true
  },
  { name: "isConfirmed", label: "Certification", field: "certification", sortable: true, format: (val) => `${val?? "-"}`}
];
const techColumns = [
  {
    name: "name",
    required: true,
    label: "Name",
    align: "left",
    field: (row) => row.name,
    sortable: true
  },
  {
    name: "acquisitionDate",
    align: "center",
    label: "Acquisition date",
    field: "acquisitionDate",
    format: (val) => `${val?? "-"}`,
    sortable: true
  },
  { name: "isConfirmed", label: "Certification authority", field: "certification", sortable: true, format: (val) => `${val?? "-"}`}
];

const softRows = [
  {
    name: 'Driving license cat. B',
    acquisitionDate: '11.2011',
    certification: 'Starostwo powiatowe w pabianicach'
  },
   {
    name: 'English - C1 level',
    acquisitionDate: '01.2016',
    certification: 'Politechnika Łódzka'
  },
  {
    name: 'Agile development',
    acquisitionDate: null,
    certification: null
  },
  
];

const techRows = [
  {
    name: ".NET",
   
  },
    {
    name: "Javascript",
   
  },
  {
    name: "SQL",
  
  },
    {
    name: "K2 Five (blackpearl)",
   
  },
  {
    name: "Sharepoint",
  },
  {
    name: "Other",
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