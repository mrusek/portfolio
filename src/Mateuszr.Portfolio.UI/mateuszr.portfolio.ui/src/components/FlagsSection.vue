<template>
<div v-if="all" class="flags-container">
    <flag iso="pl" class="flag zoomable" @click="setCulture('pl')"></flag>
    <flag iso="gb" class="flag zoomable" @click="setCulture('gb')"></flag>
</div>
<div v-else class="flags-container">
    <flag :iso="culture" class="flag"></flag>
</div>   
</template>
<script>
export default {
  name: "Flags",
  props: [
    "all"
  ],
  computed: {
    culture: {
      get: function () {
        return this.$i18n.locale;
      },
    },
    isAll: {
      get: function () {
        return this.all;
      },
    },
  },
  methods: {
    setCulture(value) {
      this.$i18n.locale = value;
    }
  },
  setup() {
  },
  
};
</script>