<template>
    <v-card>
        <div style="display:flex; margin-left: 270px;">
            <div>
                <v-card-title>
                    Edit Patient
                </v-card-title>
            </div>
            
        </div>
        <v-card-text>
            <v-form ref="frmRegistroPaciente" v-model="frmRegistroPaciente">
                <div style="display: flex; margin-top:20px;">
                    <div>
                        <v-row align="center">
                            <div class="mover1">
                                <div>
                                    <label for="" style="margin-left:18px;">Name</label>
                                </div>
                                <v-text-field
                                    class="ml-4"
                                    type="text"
                                    v-model="editUserData.nombre"
                                    placeholder="Nombre"
                                    solo
                                    :rules="[reglas.requerido]"
                                />
                            </div>
                        </v-row>
                    </div>
                    <div class="mover">
                        <v-row align="center">
                            <div>
                                <div>
                                    <label for="" style="margin-left:18px;">Last Name</label>
                                </div>
                                <v-text-field
                                    class="ml-4"
                                    type="text"
                                    v-model="editUserData.apellido"
                                    placeholder="Apellido"
                                    solo
                                    :rules="[reglas.requerido]"
                                />
                                
                            </div>
                        </v-row>
                    </div>
                </div>

                <div style="display: flex; margin-top:20px;">
                    <div class="mover1">
                        <v-row align="center">
                            <div style="margin-top:20px;">
                                <div><label for="" style="margin-left:18px;">Email</label></div>
                                <v-text-field
                                    class="ml-4"
                                    type="email"
                                    v-model="editUserData.email"
                                    placeholder="Correo electronico"
                                    solo
                                    :rules="[reglas.requerido]"
                                />
                            </div>
                        </v-row>
                    </div>
                    <div class="mover">
                        <v-row align="center">
                            <div style="margin-top:20px;">
                                <div><label for="" style="margin-left:18px;">Phone</label></div>
                                <v-text-field
                                    class="ml-4"
                                    type="phone"
                                    v-model="editUserData.telefono"
                                    placeholder="Telefono"
                                    solo
                                    :rules="[reglas.requerido]"
                                />
                            </div>
                        </v-row>
                    </div>
                </div>
                <div style="display: flex; margin-top:20px;">
                    <div class="mover1">
                        <v-row align="center">
                            <div style="margin-top:20px;">
                                <div><label for="" style="margin-left:18px;">Date of birth</label></div>
                                <v-text-field
                                    class="ml-3"
                                    type="date"
                                    v-model="editUserData.nacimiento"
                                    placeholder="Nacimiento"
                                    solo
                                    id="inputChico"
                                    :rules="[reglas.requerido]"
                                />
                            </div>
                        </v-row>
                    </div>
                    <div style="margin-left: 60px;">
                        <v-row align="center">
                            <div style="margin-top:20px;">
                                <div><label for="" style="margin-left:18px;">Age</label></div>
                                <v-text-field
                                    class="ml-3"
                                    type="number"
                                    v-model="editUserData.edad"
                                    placeholder="Edad"
                                    solo
                                    :rules="[reglas.requerido]"
                                />
                            </div>
                        </v-row>
                    </div>
                    <div style="margin-left:70px; margin-top: 20px;">
                        <h4>Gender</h4>
                        <div style="margin-top:-20px;">
                            <v-section>
                                <v-row>
                                    <v-col>
                                        <v-radio-group v-model="editUserData.genero" row>
                                            <v-radio label="Male" value="Hombre"></v-radio>
                                            <v-radio label="Female" value="Mujer"></v-radio>
                                            <v-radio label="Other" value="Otro"></v-radio>
                                        </v-radio-group>
                                        <span>Selected value: {{ genero }}</span>
                                    </v-col>
                                </v-row>
                            </v-section>
                        </div>
                    </div>
                </div>
                <div class="mover1" style="display: flex; margin-top:20px;">
                    <v-row align="center">
                        <div style="margin-top:20px;">
                            <div><label for="" style="margin-left:18px;">Address</label></div>
                            <v-text-field
                                class="ml-3"
                                type="text"
                                v-model="editUserData.direccion"
                                solo
                                style="width: 738px;
                                        height: 40px;
                                        border-radius: 15px;
                                        border: 1px solid var(--gray-light-gray, #DDD);
                                        background: var(--gray-whte, #FFF);"
                                :rules="[reglas.requerido]"
                            />
                        </div>
                    </v-row>
                </div>
                <!--inputs Tratamiento y sangre-->
                <div style="display: flex; margin-top:40px;">
                    <div>
                        <v-row align="center">
                            <div class="mover1">
                                <div>
                                    <label for="" style="margin-left:18px;">Treatment</label>
                                </div>
                                <v-text-field
                                    class="ml-4"
                                    type="text"
                                    v-model="editUserData.tratamiento"
                                    solo
                                    :rules="[reglas.requerido]"
                                />
                            </div>
                        </v-row>
                    </div>
                    <div class="mover">
                        <v-row align="center">
                            <div>
                                <div>
                                    <label for="" style="margin-left:18px;">Blood Group</label>
                                </div>
                                <v-text-field
                                    class="ml-4"
                                    type="text"
                                    v-model="editUserData.sangre"
                                    solo
                                    :rules="[reglas.requerido]"
                                />  
                            </div>
                        </v-row>
                    </div>
                </div>
                <div style="margin-top:20px;">
                    <v-row align="center">
                        <div style="margin-top:20px;">
                            <div><label for="" style="margin-left:18px;">Reports / Files</label></div>
                            <v-file-input v-model="editUserData.documento" @change="handleFileUpload"/>
                        </div>
                    </v-row>
                </div>
            </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="cancelarEdit"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="editar()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    data(){
        return{
            reglas: {
                requerido: value => !!value || 'Campo requerido!'
            },
            frmRegistroPaciente: false,
            documento: null,
            email:null,
            editUserData: {}
        }
    },
    props: {
        nombre: String,
        apellido: String,
        email: String,
        telefono: String,
        nacimiento: String,
        edad: String,
        genero: String,
        direccion: String,
        tratamiento: String,
        sangre: String,
        
    },
    methods: {
        cancelarEdit(){
            this.$emit('update:dialogEdit', false)
        },
        async editar(){
            const valid = this.$refs.frmRegistroPaciente.validate()
                if (valid){
                    //console.log('$$$ editUserData => ', this.editUserData)
                    const rawResponse = await fetch('http://localhost:5020/edit-paciente',{
                    method: 'POST',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sendData)
                })
                const res = await rawResponse.json()
                this.$emit('update:dialogEdit', false)
                console.log('$$$ res => ', res)
            }
        },
        handleFileUpload(file) {
      // Acciones cuando se carga un archivo
            console.log('Archivo cargado:', file);
        },
    }
}
</script>

<style>
    .mover {
        margin-left: 40px;
    }
    .mover1 {
        margin-left: 15px;
    }
    .ml-4 {
        width: 350px;
        height: 40px;
        border-radius: 15px;
        border: 1px solid var(--gray-light-gray, #DDD);
        background: var(--gray-whte, #FFF);
    }
    .ml-3{
        width: 120px;
        height: 40px;
        border-radius: 15px;
        border: 1px solid var(--gray-light-gray, #DDD);
        background: var(--gray-whte, #FFF);
    }
    
</style>