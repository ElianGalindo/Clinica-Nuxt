<template>
    <v-navigation-drawer
     app
     color="dark Lighten-4"
     permanent
     left 
     width="250"
     style="background: var(--gray-whte, #FFF); flex-shrink: 0;"
     >

        <v-list>
            <div class="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6dTMSl3M-7vHP8af_YsLpw9_ga64MZBZyg&usqp=CAU" alt="Logo Clinica">
            </div>
            <v-list-item>
                <v-list-item-avatar>
                       
                </v-list-item-avatar>
                
            </v-list-item>
        </v-list>
        
     
     <v-list nav dense>
        <v-list-item 
        v-for="(item, i) in items"
        :key="i"
        Link
        >

            <v-btn style="width: 240px; height: 50px;">
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
            </v-btn>
        </v-list-item>
     </v-list>
    </v-navigation-drawer>
        
    
</template>

<script>

export default {
    data () {
        return {
            items: [
               { text: 'Dashboard', icon: 'mdi-view-dashboard'},
               { text: 'Citas', icon: 'mdi-book-clock'},
               { text: 'Pacientes', icon: 'mdi-account-group'},
               { text: 'Calendario', icon: 'mdi-checkbox-multiple-marked-circle'}
            ]
        }
    }
   
}
</script>

<style>
    .logo{
        width: 112.969px;
        height: 45px;
        flex-shrink: 0;
        margin-left: 60px;
        margin-top: 20px;
        
       /*background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj6dTMSl3M-7vHP8af_YsLpw9_ga64MZBZyg&usqp=CAU'), rgb(235, 122, 122) 50% / cover no-repeat;
     */
    }
    img{
        object-fit: cover;
        width:90%;
        height:90%;
    }
</style>
