<template>
  <q-page>
    <div class="page-container">
      <div class="fit-content">
        <img src="../assets/letter-horizontal.png " />
        <div class="skewed-text">
         <span v-html="text"></span>
          <span style="float:right">{{signature}}</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Description",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters('description',['signature','text'])
  },
  methods: {
    ...mapActions('description',['fetchSignature','fetchDescriptionText'])
  },
  mounted() {
    this.fetchDescriptionText();
    this.fetchSignature();
  }
};
</script>