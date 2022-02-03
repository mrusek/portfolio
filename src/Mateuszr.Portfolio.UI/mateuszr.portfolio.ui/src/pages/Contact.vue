<template>
  <q-page>
    <div class="card-container">
      <div class="card">
        <div class="card-back">
          <div class="card-link shadow-4">
            <a :href="github" target="_blank">github.com/mrusek</a>
          </div>
          <div class="card-link shadow-4">
            <a :href="linkedin" target="_blank">/in/mateusz-rusek</a>
          </div>
          <div class="card-link shadow-4">
            <a :href="telegram" target="_blank">t.me/mrusek</a>
          </div>
        </div>
        <div class="card-front">
          <img :src="githubImg" class="icon" />
          <img :src="linkedinImg" class="icon" />
          <img :src="telegramImg" class="icon" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Contact",
  components: {},
  data() {
    return {
      githubImg: require("../assets/github.png"),
      linkedinImg: require("../assets/linkedin.png"),
      telegramImg: require("../assets/telegram.png"),
    };
  },
  computed: {
    ...mapGetters("contact", ['linkedin','github','telegram']),
  },
  methods: {
    ...mapActions("contact", ["fetchLinkedin", "fetchGithub", "fetchTelegram"]),
  },
  mounted() {
    this.fetchLinkedin();
    this.fetchGithub();
    this.fetchTelegram();
  },
};
</script>