<template>
    <v-row>
        Hola aqui va la pagina principal
    </v-row>
   <!-- <div class="ma-5">
        <v-row>
            <v-col cols="5">
                <ui-register/>
            </v-col>
            <v-col>
                <ui-usuarios/>
            </v-col>
        </v-row>
    </div>-->
</template>

<script>
//import uiRegister from '@/components/uiUsers/uiRegister.vue'
//import uiUsuarios from '@/components/uiUsers/uiUsuarios.vue'
export default {
    layout: 'dashboard',
    components: {
        uiRegister,
      
    }
}
</script>