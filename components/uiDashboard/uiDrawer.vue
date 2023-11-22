<template>
    <v-navigation-drawer
     app
     color="dark Lighten-4"
     permanent
     left 
     width="300"
     >

        <v-list>
            
            <v-list-item>
                <v-list-item-avatar>
                       <v-img :src="require('../../assets/logo.png')" style="width: 100px; height: 100px; flex-shrink: 0;"></v-img>
                </v-list-item-avatar>
                
            </v-list-item>
        </v-list>
        
     
     <v-list nav dense>
        <v-list-item 
        v-for="(item, i) in items"
        :key="i"
        Link
        >

            <v-list-item-icon>
                <v-icon >
                    {{ item.icon }}
                </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
                <v-list-item-title>
                    {{ item.text }}
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
     </v-list>
    </v-navigation-drawer>
        
    
</template>

<script>

export default {
    data () {
        return {
            items: [
               { text: 'Dashboard', icon: 'mdi-account'},
               { text: 'Citas', icon: 'mdi-account'},
               { text: 'Pacientes', icon: 'mdi-account'},
               { text: 'Calendario', icon: 'mdi-account'}
            ]
        }
    }
   
}
</script>

<style>
    .logo{
       width: 112px;
       height: 45px;
       flex-shrink: 0;
       /*background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6dTMSl3M-7vHP8af_YsLpw9_ga64MZBZyg&usqp=CAU'), lightgray 50% / cover no-repeat;
     */
    }
</style>
