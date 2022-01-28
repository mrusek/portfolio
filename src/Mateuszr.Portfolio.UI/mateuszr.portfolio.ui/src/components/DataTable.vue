<template>
  <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
      :rows-per-page-options="rowsPerPage ?? [0]"
      hide-bottom
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th auto-width />
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
      <template v-slot:top="props">
        <div class="table-title">{{ title }}</div>
      </template>
      <template v-slot:pagination="props">
        <div v-if="showPagination"></div>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td auto-width>
            <q-btn
              v-show="showExpand"
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
        <q-tr v-show="props.expand" v-for="item in props.row.values" :key="`e_${props.row.index}`" :props="props" class="table-alternate-row-color" >
            <q-td  colspan="100%">
              <div class="flex-container-td">{{ item.label }}</div>
              <div class="flex-container-td-right">
                <div class="rating">
                  <span v-bind:class="item.stars > 0 ? 'marked' : 'unmarked'"
                    >★</span
                  >
                  <span v-bind:class="item.stars > 1 ? 'marked' : 'unmarked'"
                    >★</span
                  >
                  <span v-bind:class="item.stars > 2 ? 'marked' : 'unmarked'"
                    >★</span
                  >
                </div>
              </div>
              <div></div>
            </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>
<script>
export default {
  name: "DataTable",
  props: [
    "btnColor",
    "rows",
    "columns",
    "title",
    "showPagination",
    "showExpand",
    "rowsPerPage",
  ],
  setup() {},
};
</script>