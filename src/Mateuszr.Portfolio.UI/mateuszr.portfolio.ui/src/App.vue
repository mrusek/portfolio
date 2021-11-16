<template>
  <div class="q-pa-md">
    <q-layout view="lHh Lpr lff" class="shadow-2 rounded-borders">
      <q-header class="bg-teal shadow-2">
        <q-toolbar class="glossy">
          <!-- <q-btn flat @click="drawer = !drawer" round dense icon="menu" /> -->
          <q-toolbar-title></q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        elevated
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area style="height: calc(100% - 100px); margin-top: 50px; border-right: 1px solid #ddd">
          <q-list >
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="far fa-list-alt" class="text-teal" />
              </q-item-section>

              <q-item-section> CV </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-edit" class="text-teal" />
              </q-item-section>

              <q-item-section> Description </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-hat-wizard" class="text-teal" />
              </q-item-section>

              <q-item-section> Skills </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="fas fa-address-card" class="text-teal" />
              </q-item-section>

              <q-item-section> Contact </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>
        <q-img
          class="absolute-top"
          src="https://cdn.quasar.dev/img/material.png"
          style="height: 50px"
        >
          <div class="absolute-bottom bg-transparent padding-3">
            <q-avatar size="46px" class="q-mb-sm margin-bottom-0">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </div>
        </q-img>
      </q-drawer>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
      <q-footer style="background-color: white; color: black">
        <span>© Mateusz Rusek 2021</span></q-footer
      >
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",

  components: {
    // HelloWorld
  },

  setup() {
    return {
      drawer: ref(false),
      miniState: ref(true),
    };
  },
};
</script>
