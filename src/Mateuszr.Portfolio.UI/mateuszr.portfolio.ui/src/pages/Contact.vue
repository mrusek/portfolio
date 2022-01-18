<template>
  <q-page>
    <div class="card-container">
      <div class="card">
        <div class="card-back">
        <div><a href="https://github.com/mrusek">github.com/mrusek</a></div>
        <div><a href="https://www.linkedin.com/in/mateusz-rusek-b3b275113">/in/mateusz-rusek</a></div>
        <div><a href="https://t.me/mrusek">t.me/mrusek</a></div>
        </div>
        <div class="card-front">
          <img :src="github" class="icon" />
          <img :src="linkedin" class="icon" />
          <img :src="telegram" class="icon"  />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Contact",
  components: {},
  data() {
    return {
      github: require("../assets/github.png"),
      linkedin: require("../assets/linkedin.png"),
      telegram: require("../assets/telegram.png")
    };
  },
};
</script>