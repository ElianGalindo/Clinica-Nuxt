<template>
    <v-container>
      <v-row align="center" justify="center" >
          <v-col cols="12" sm="10">
            <v-card class="elevation-6 mt-10">
                  <v-row>
                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h4
                          class="text-center"
                        >Inicia sesion con tu cuenta</h4> <br>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                           
                            <v-form v-model="isValid" ref="formLogin">
                                <v-row>
                                    <v-text-field
                                    v-model="email"
                                    placeholder="Escribe tu usuario"
                                    label="Usuario"    
                                    filled
                                    :rules="[regla.vacio]" 
                                    />
                                </v-row>
                                <v-row>
                                    <v-text-field
                                    v-model="password"
                                    type="password"
                                    placeholder="Escribe tu contraseña"
                                    label="Contraseña"    
                                    filled
                                    :rules="[regla.vacio, regla.cantidad]" 
                                    />
                                </v-row>
                            </v-form>
                            <v-row>
                              <v-col cols="12" sm="7">
                                <v-checkbox
                                    label="Recordarme"
                                    class="mt-n1"
                                    color="blue"
                                > 
                                </v-checkbox>
                              </v-col>
                              <v-col cols="12" sm="5">
                                <span class="caption blue--text">¿Olvidaste tu contraseña?</span>
                              </v-col>
                            </v-row>
                          <v-btn color="blue" dark block tile @click="logeaUsuario">Iniciar sesión</v-btn>
                     
                         <h5
                          class="text-center  grey--text mt-4 mb-3"
                        >O inicia sesión usando</h5>
                         <div class="d-flex  justify-space-between align-center mx-10 mb-16">
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
                    <v-col cols="12" md="6">
                    <div style="  text-align: center; padding: 180px 0; background-color: bisque;" class="imglogin">
                      <v-card-text class="white--text" >
                        <h3 class="text-center " style="color:black;">¿Aún no tienes cuenta?</h3>
                        <h6
                          class="text-center"
                          style="color: black;"
                        >Crea una cuenta y aprovecha los beneficios<br> que ofrecemos</h6>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn tile outlined dark @click="registrarse" style="color:white; background-color: rgb(38, 117, 235);">Registrarse</v-btn>
                      </div>
                      </div>
                    </v-col>
                  </v-row>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
  </template>
  
  <script>
  export default {
  data() {
      return {
          email: "",
          password: "",
          isValid: false,
          regla: {
                vacio: value => !!value || 'Campo requerido!',
                cantidad: value => value.length > 8 || 'Minimo 9 caracteres'
            }
      };
  },
  methods: {
    registrarse() {
        this.$router.push('/registro')
    },
    logeaUsuario() {
      const url = 'http://localhost:5020/login';
      const data = {
        email: this.email,
        password: this.password,
      };

      // Configurar la solicitud
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };

      // Realizar la solicitud
      fetch(url, options)
        .then(response => response.json())
        .then(data => {
          // Manejar la respuesta del backend
          if (data.alert === 'success') {
            // Inicio de sesión exitoso
            console.log('Inicio de sesión exitoso:', data);
            this.$router.push('/dashboard')
          } else {
            // Manejar otras respuestas
            console.log('Error en el inicio de sesión:', data.alert);
          }
        })
        .catch(error => {
          // Manejar errores de la solicitud
          console.error('Error al realizar la solicitud:', error);
        });
    },
  },
}

  
  </script>

