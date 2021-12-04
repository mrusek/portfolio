<template>
  <q-dialog v-model="isVisible" @show="onOpen" @hide="onClose">
    <q-card>
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">{{ title }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <q-card-section>
        {{ content }}
      </q-card-section>
    </q-card>
  </q-dialog>
</template>


<script>
export default {
  name: "Dialog",
  props: ["visible", "title", "content", "onClose", "onOpen"],
  model: {
    prop: "visible",
    event: "visibleChange",
  },
  computed: {
    isVisible: {
      get: function () {
        return this.visible;
      },
      set: function (value) {
        this.$emit("visibleChange", value);
      },
    },
  },
  setup() {},
  data() {
    return {};
  },
};
</script>