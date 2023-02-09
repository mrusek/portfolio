<template>
  <q-page>
    <div class="page-container">
      <div class="fit-content">
        <img :src="cvUrl" />
        <div class="concentric-circles-1-container">
          <div class="concentric-circles" @click="isFirstVisible = true"></div>
        </div>
        <Dialog :content="firstPositionDescription" v-model="isFirstVisible" title="Staż w Transition Technologies"></Dialog>
        <div class="concentric-circles-2-container">
          <div class="concentric-circles" @click="isSecondVisible = true"></div>
        </div>
        <Dialog :content="secondPositionDescription" v-model="isSecondVisible" title="Staż w Fabrity"></Dialog>
        <div class="concentric-circles-3-container">
          <div class="concentric-circles" @click="isThirdVisible = true"></div>
        </div>
        <Dialog :content="thirdPositionDescription" v-model="isThirdVisible" title=".NET Developer Fabrity"></Dialog>
      </div>
    </div>
  </q-page>
</template>

<script>
import { computed, ref } from "vue";
import Dialog from "../components/Dialog.vue";
import {mapGetters, mapActions} from "vuex";
export default {
  name: "Cv",
  components: {
    Dialog,
  },
  data() {
    return {
    };
  },
  setup() {
    return {
      isFirstVisible: ref(false),
       isSecondVisible: ref(false),
        isThirdVisible: ref(false)
    };
  },
    computed: {
      ...mapGetters('cv',['firstPositionDescription','secondPositionDescription','thirdPositionDescription','cvUrl'])
    },

methods: {
 ...mapActions('cv',['fetchFirstPositionDescription','fetchSecondPositionDescription','fetchThirdPositionDescription','fetchCvUrl'])
},
mounted() {
  this.fetchCvUrl();
  this.fetchFirstPositionDescription();
  this.fetchSecondPositionDescription();
  this.fetchThirdPositionDescription();
  this.$watch(
      "$i18n.locale",
      (newLocale, oldLocale) => {
        if (newLocale === oldLocale) {
          return
        }

        this.fetchCvUrl();
        this.fetchFirstPositionDescription();
        this.fetchSecondPositionDescription();
        this.fetchThirdPositionDescription();
      },
      { immediate: true } //TODO: Doczytać
    )
}
  
};
</script>