<template>
  <q-page>
    <div class="page-container">
      <div class="fit-content">
        <img src="../assets/CV_PL.jpg" />
        <div class="concentric-circles-1-container">
          <div class="concentric-circles" @click="isFirstVisible = true"></div>
        </div>
        <Dialog content="Transition technologies" v-model="isFirstVisible" title="Staż w Transition Technologies"></Dialog>
        <div class="concentric-circles-2-container">
          <div class="concentric-circles"></div>
        </div>
        <div class="concentric-circles-3-container">
          <div class="concentric-circles"></div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import Dialog from "../components/Dialog.vue";
export default {
  name: "Cv",
  components: {
    Dialog,
  },
  data() {
    return {};
  },
  setup() {
    return {
      isFirstVisible: ref(false),
    };
  },
};
</script>