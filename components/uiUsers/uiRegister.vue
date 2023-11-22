<template>
    <v-container>
        <v-row >
                <v-col cols="12" md="6">
                <div style="  text-align: center; padding: 180px 0; background-color: bisque;">
                <v-card-text class="white--text" >
                    <h3 class="text-center " style="color:black;">¿Ya tienes una cuenta?</h3>
                    <h6
                    class="text-center"
                    style="color: black;"
                    >Inicia sesion y comienza a usar<br>  todas las funciones que ofrecemos</h6>
                </v-card-text>
                <div class="text-center">
                    <v-btn tile outlined dark @click="iniciarSesion" style="color:white; background-color: rgb(38, 117, 235);">Iniciar sesión</v-btn>
                </div>
                </div>
                </v-col>
                <v-col cols="12" md="6">
                <v-card-text class="mt-12">
                    <h4
                    class="text-center"
                    >Registra una cuenta</h4>
                    <h6
                    class="text-center  grey--text "
                    >Empieza creando tu cuenta</h6> <br>
                    <v-row align="center" justify="center">
                    <v-col cols="12" sm="8">
                        <v-form ref="frmRegistro" v-model="frmRegistro">
                            <v-row align="center">
                                <v-text-field
                                    class="ml-3"
                                    type="email"
                                    v-model="email"
                                    placeholder="Email"
                                    filled
                                    :rules="[reglas.requerido]"
                                />
                            </v-row>
                            <v-row align="center">
                                <v-text-field
                                    class="ml-3"
                                    type="password"
                                    v-model="password"
                                    placeholder="Escribe tu password"
                                    filled
                                    :rules="[reglas.requerido, reglas.cantidad]"
                                />
                            </v-row>
                            <v-row align="center">
                                <v-text-field
                                    class="ml-3"
                                    type="password"
                                    v-model="passwordVerifica"
                                    placeholder="Verifica tu password"
                                    filled
                                    :rules="[reglas.requerido, reglas.cantidad, reglas.verifica]"
                                />
                            </v-row>
                        </v-form>
                        <v-row>
                        <v-col cols="12" sm="7">
                            <v-checkbox
                    label="Acepto Todo"
                    class="mt-n1"
                    color="blue"
                > </v-checkbox>
                        </v-col>
                        <v-col cols="12" sm="5">
                            <span class="caption blue--text ml-n4">Terminos y condiciones</span>
                        </v-col>
                        </v-row>
                    <v-btn color="blue" dark block tile @click="registraUsuario">Registrarse</v-btn>
                    <h5
                    class="text-center  grey--text mt-4 mb-3"
                    >O registrate usando</h5>
                    <div class="d-flex  justify-space-between align-center mx-10 mb-11">
                        <v-btn depressed outlined color="grey">
                            <v-icon color="red" class="bi bi-google"></v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                            <v-icon color="blue" class="bi bi-facebook"></v-icon>
                        </v-btn>
                        <v-btn depressed outlined color="grey">
                            <v-icon color="black" class="bi bi-twitter-x"></v-icon>
                        </v-btn>
                    </div>
                    </v-col>
                    </v-row>
                </v-card-text>
                </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            frmRegistro: false,
            email: '',
            password: '',
            passwordVerifica: '',
            reglas: {
                requerido: value => !!value || 'Campo requerido!',
                cantidad: value => value.length > 8 || 'Minimo 9 caracteres',
                verifica: value =>  value === this.password || 'Las contraseñas no coinciden'
            }
        }
    },
    methods: {
        iniciarSesion() {
            this.$router.push('/')
        },
        async registraUsuario () {
            const frmRegistro = this.$refs.frmRegistro.validate()

            if (this.frmRegistro) {
                //Registramos el usuario
                const sendData = {
                    email: this.email,
                    password: this.password
                }

                const rawResponse = await fetch('http://localhost:5020/new-user', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(sendData)

                });
                const content = await rawResponse.json()
                if (content.alert === 'success'){
                    this.email=''
                    this.password=''
                    this.passwordVerifica=''
                    //this.$store.commit('setNewUser', true)
                    this.$router.push('../dashboard')
                } else if (content.alert === 'El usuario ya existe'){
                    alert('El usuario ya existe')
                }
                console.log('$$$ response => ', content)
            } else {
                //Notificacion error
            }
        }
    }
}
</script>