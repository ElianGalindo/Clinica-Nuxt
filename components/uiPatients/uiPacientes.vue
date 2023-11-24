<template>
    <div class="cuerpo">
        <div class="header" style="display:flex;background:var(--gray-whte, #FFF); height:78px;">
            <div class="ubicacion" style="display:flex; margin-top:20px; margin-left: 10px;">
                <p style="color: #000;
                        font-family: Open Sans;
                        font-size: 18px;
                        font-style: normal;
                        font-weight: 700;
                        line-height: 25px; /* 138.889% */
                        letter-spacing: 0.36px;"
                >   Doctor >
                </p> &nbsp; <p>Patients</p>
            </div>
            <div class="notificaciones" style="display:flex;">
                <v-icon class="bi bi-bell-fill"
                        style="display: flex;
                                color: black;
                                margin-top: -10px;">
                </v-icon> &nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn style="width: 140px;
                                height: 45px;
                                flex-shrink: 0;
                                border-radius: 23px;
                                background: var(--primary-green, #4FB783);
                                margin-top: 15px;"
                >
                    Available
                </v-btn>
            </div>
        </div>

        <!--Aqui va la tabla y sus funciones-->
        <div class="pacientes" style="margin-top:10px;">
            <div class="encabezado1">
                <div class="infoIzq" style="display:flex; margin-top:20px;">
                    <p>show</p>&nbsp;
                    <v-btn 
                        style="width: 175px;
                               height: 40px;
                               flex-shrink: 0;
                               border-radius: 15px;
                               border: 1px solid var(--primary-green, #4FB783);
                               background-color:#EBFFF5;"
                    >Recent &nbsp;&nbsp;  <v-icon class="bi bi-caret-down-fill"></v-icon>
                    </v-btn> &nbsp;
                    <p>Patients</p>
                </div>
            </div>
            <div class="buscador" style="display:flex;">
                <div style="margin-top:10px; display:flex; width: 485px; height:60px; margin-left: 10px;">
                    <v-text-field
                    label="Search patients"
                    class="ml-3"
                    type="text"
                    solo
                    style="width: 485px;
                           height: 60px;
                           flex-shrink: 0;
                           border-radius: 15px;"
                    />
                </div> 
                <div style="display: flex; 
                            margin-top:10px;
                            width: 43px;
                            height: 52px;">
                    <v-btn
                    @click.stop="dialog=true" 
                    id="botonAddPaciente"
                    > Add new patient +
                    </v-btn>
                    <!--Aqui va el modal de registro-->
                    <v-dialog v-model="dialog" max-width="800" style="height: 749px; border-radius: 17px; border: 2px solid var(--primary-green, #4FB783);">
                        <v-card>
                            <div style="display:flex; margin-left: 270px;">
                                <div>
                                    <v-card-title>
                                    Add new Patient
                                    </v-card-title>
                                </div>
                                <div><v-btn style="width:10px; height:20px; border-radius: 20%; margin-top:25px; margin-left: 80px;" @click="dialog=false">X</v-btn></div>
                            </div>
                            <v-card-text>
                            <!-- Contenido de tu ventana modal -->
                                <v-form ref="frmCita" v-model="frmCita">
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
                                                        v-model="nombre"
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
                                                        v-model="apellido"
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
                                                        v-model="email"
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
                                                        v-model="telefono"
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
                                                        v-model="nacimiento"
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
                                                        type="int"
                                                        v-model="edad"
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
                                                            <v-radio-group v-model="genero" row>
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
                                                    v-model="direccion"
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
                                                        v-model="tratamiento"
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
                                                        v-model="sangre"
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
                                                <v-text-field
                                                    class="ml-3"
                                                    type="time"
                                                    v-model="time"
                                                    solo
                                                    style="width: 155px;
                                                            height: 40px;
                                                            border-radius: 15px;
                                                            border: 1px solid var(--gray-light-gray, #DDD);
                                                            background: var(--gray-whte, #FFF);"
                                                    :rules="[reglas.requerido]"
                                                />
                                            </div>
                                        </v-row>
                                    </div>
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                            <v-btn
                                color="#4FB783"
                                style="width:434px; height:40px; border-radius:15px"
                                @click="RegistrarCita"
                            >
                                Guardar
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            reglas: {
                requerido: value => !!value || 'Campo requerido!'
            },
            dialog: false
        }
    }
}
</script>

<style>
    .pacientes{
    width: 1200px;
    height: 1054px;
    flex-shrink: 0;
    border-radius: 15px;
    /*background: var(--gray-whte, #FFF);*/
    background-color: #FFF;
    margin-left: 30px;
    }

    .buscador {
    width: 1160px;
    height: 80px;
    flex-shrink: 0;
    background: var(--gray-shaded-white, #F6F6F6);
    margin-left:20px;
    margin-top:20px;
    }

    .mover {
        margin-left: 40px;
    }
    .mover1 {
        margin-left: 15px;
    }

    #botonAddPaciente {
        margin-top: 2px;
        margin-left: 40px;
        display: block;
        width: 140px;
        height: 35px;
        border-radius:12.5px ;
        border: 1px solid var(--primary-green, #4FB783);
        background-color: #EBFFF5;
        font-family:Arial, Helvetica, sans-serif ;
        font-size: 10px;
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