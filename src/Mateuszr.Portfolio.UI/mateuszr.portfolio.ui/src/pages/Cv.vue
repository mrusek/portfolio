<template>
  <q-page>
    <div class="page-container">
      <div class="fit-content">
        <img src="../assets/CV_PL.png" />
        <div class="concentric-circles-1-container">
          <div class="concentric-circles" @click="isFirstVisible = true"></div>
        </div>
        <Dialog :content=firstPositionDescription v-model="isFirstVisible" title="Staż w Transition Technologies"></Dialog>
        <div class="concentric-circles-2-container">
          <div class="concentric-circles" @click="isSecondVisible = true"></div>
        </div>
        <Dialog :content=secondPositionDescription v-model="isSecondVisible" title="Staż w Fabrity"></Dialog>
        <div class="concentric-circles-3-container">
          <div class="concentric-circles" @click="isThirdVisible = true"></div>
        </div>
        <Dialog :content=thirdPositionDescription v-model="isThirdVisible" title=".NET Developer Fabrity"></Dialog>
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
    return {
      firstPositionDescription: "Zakres obowiązków: R&D, implementacja oraz prezentacja rozwiązania IoT zbudowanego na platformie Thingworx",
      secondPositionDescription: "Zakres obowiązków: Implementacja systemu zarządzania zapytaniami ofertowymi w technologii ASP.NET MVC + Knockout.JS",
      thirdPositionDescription: "Zakres obowiązków: projektowanie oraz implementacja rozwiązań webowych z zakresu BPM, CRM czy Document Management przy użyciu stosu technologicznego .NET, języka SQL oraz frameworków języka Javascript.",
    };
  },
  setup() {
    return {
      isFirstVisible: ref(false),
       isSecondVisible: ref(false),
        isThirdVisible: ref(false)
    };
  },
};
</script>