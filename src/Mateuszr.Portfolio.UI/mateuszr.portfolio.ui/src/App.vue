<template>
  <div class="q-pa-md bg-main">
    <q-layout view="lHh Lpr lff">
      <q-header class="bg-teal shadow-2">
        <q-toolbar class="glossy">
          <!-- <q-btn flat @click="drawer = !drawer" round dense icon="menu" /> -->
          <q-toolbar-title></q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        class="shadow-12"
        v-model="drawer"
        show-if-above
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        :width="200"
        :breakpoint="500"
      >
        <q-scroll-area style="height: calc(100% - 100px); margin-top: 50px">
          <q-list>
            <q-item
              clickable
              v-ripple
              @click="$router.push({ path: '/cv', replace: true })"
            >
              <q-item-section avatar>
                <q-icon name="far fa-list-alt" class="text-teal" />
              </q-item-section>

              <q-item-section
                ><span style="color: whitesmoke; font-size: 21px">
                  CV
                </span></q-item-section
              >
            </q-item>
            <q-separator size="2px" :dark="true" />
            <q-item
              clickable
              v-ripple
              @click="$router.push({ path: '/description', replace: true })"
            >
              <q-item-section avatar>
                <q-icon name="fas fa-edit" class="text-teal" />
              </q-item-section>

              <q-item-section
                ><span style="color: whitesmoke; font-size: 21px">
                  Description
                </span></q-item-section
              >
            </q-item>
            <q-separator size="2px" :dark="true" />
            <q-item
              clickable
              v-ripple
              @click="$router.push({ path: '/skills', replace: true })"
            >
              <q-item-section avatar>
                <q-icon name="fas fa-hat-wizard" class="text-teal" />
              </q-item-section>

              <q-item-section
                ><span style="color: whitesmoke; font-size: 21px">
                  Skills
                </span></q-item-section
              >
            </q-item>

            <q-separator size="2px" :dark="true" />

            <q-item
              clickable
              v-ripple
              @click="$router.push({ path: '/contact', replace: true })"
            >
              <q-item-section avatar>
                <q-icon name="fas fa-address-card" class="text-teal" />
              </q-item-section>

              <q-item-section
                ><span style="color: whitesmoke; font-size: 21px">
                  Contact
                </span></q-item-section
              >
            </q-item>
          </q-list>
        </q-scroll-area>
        <div
          class="absolute-top bg-teal glossy"
          src="https://cdn.quasar.dev/img/material.png"
          style="height: 50px"
        >
          <div
            class="absolute-bottom bg-transparent padding-3 link"
            @click="$router.push({ path: '/', replace: true })"
          >
            <q-avatar size="46px" class="q-mb-sm margin-bottom-0">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
            </q-avatar>
          </div>
        </div>
      </q-drawer>
      <q-page-container>
        <router-view></router-view>
      </q-page-container>
      <q-footer style="background: none">
        <span>© Mateusz Rusek 2021</span></q-footer
      >
    </q-layout>
  </div>
</template>

<script>
import { ref } from "vue";
//import HelloWorld from './components/HelloWorld.vue'
import router from "vue-router";
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
