<template>
    <v-app>
      <uiDrawerVue />
      <v-main>
        <Nuxt />
      </v-main>
    </v-app>
</template>
    
    <script>
    import uiDrawerVue from '~/components/uiDashboard/uiDrawer.vue'
      export default {
        components: {
          uiDrawerVue
        },
        data () {
          return {
          }
        }
      }
    </script>