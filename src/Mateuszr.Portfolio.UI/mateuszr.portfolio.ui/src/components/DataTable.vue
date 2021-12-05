<template>
  <div class="q-pa-md">
    <q-table 
    title="Treats" 
    :rows="rows" 
    :columns="columns" 
    row-key="name"
    :rows-per-page-options="rowsPerPage??[0]" 
    hide-bottom>
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:top="props">
        <div class="table-title">{{title}}</div>
      </template>
         <template v-slot:pagination="props">
             <div v-if="showPagination">
             </div>
             
           </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              size="sm"
              v-bind:color="btnColor"
              round
              dense
              @click="props.expand = !props.expand"
              :icon="props.expand ? 'remove' : 'add'"
            />
          </q-td>
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
        <q-tr v-show="props.expand" :props="props">
          <q-td colspan="100%">
            <div class="text-left">
              This is expand slot for row above: {{ props.row.name }}.
            </div>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  name: "DataTable",
  props: ["btnColor", "rows", "columns", "title", "showPagination", "rowsPerPage"],
  setup() {},
};
</script>