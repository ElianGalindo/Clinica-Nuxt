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
                <v-img :src="require('../../assets/logo.png')"></v-img>
            </div>
            <v-list-item>
                <div>
                    <div>
                        <v-list-item-avatar style="width: 100px; height:100px; margin-left: 55px;">
                            <v-img :src="require('../../assets/doctor.png')"></v-img>
                        </v-list-item-avatar>
                    </div>
                    <div style="margin-left: 55px;">
                        <p>Doctor Elian</p>
                    </div>
                </div>
                
            </v-list-item>
        </v-list>
        
     
     <v-list nav dense>
        <v-list-item 
        v-for="(item, i) in items"
        :key="i"
        Link
        >

            <div style="width: 240px; height: 50px; display: flex;" @click="navigateTo(item.route)">
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
            </div>
        </v-list-item>
     </v-list>
    </v-navigation-drawer>
</template>

<script>
import router from '../../router.js'
export default {
    router,
    data () {
        return {
            items: [
               { text: 'Dashboard', icon: 'mdi-view-dashboard', route: '/inicio'},
               { text: 'Citas', icon: 'mdi-book-clock', route: '/citas'},
               { text: 'Pacientes', icon: 'mdi-account-group', route: '/pacientes'},
               { text: 'Calendario', icon: 'mdi-checkbox-multiple-marked-circle', route: '/calendario'}
            ],
            
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
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
