<template>
    <v-card style="height:100%;">
        <v-card-title class="text-h5">
            <div style="display:flex;">
                <!--Foto y nombre-->
                <div style="display: flex;">
                    <div class="foto">
                        <v-img :src="require('../../assets/paciente.png')"></v-img>
                    </div>
                    <div style="margin-left:15px;">
                        <div class="lbNombre">{{ nombre }}</div>
                        <div class="lbPaciente" style="margin-top:5px;"><p>Patient</p></div>
                    </div>
                </div>
                <!--Cerrar modal-->
                <div style="margin-top:10px; margin-left: 570px;">
                    <v-btn style="width:10px; height:20px; border-radius: 20%;" @click="cancelarInfo">X</v-btn>
                </div>
            </div>
        </v-card-title>
        <v-card-text>
<!-------Apartado de informacion personal---------------------------->
         <div class="infPersonal">
            <div class="titulo">Personal details</div>
            <!--Primera fila de textField-->
            <div style="display: flex;">
                <div>
                    <v-text-field
                        style="margin-left: 20px; margin-top: 30px;"
                        class="lbDetalles"
                        v-model="nombre"
                        label="First Name"
                        outlined
                        readonly/>
                </div>
                <div>
                    <v-text-field
                        style="margin-left: 20px; margin-top: 35px;"
                        class="lbDetalles"
                        v-model="apellido"
                        label="Last Name"
                        outlined
                        readonly/>
                </div>
            </div>
            <!--Segunda fila de textField-->
            <div style="display:flex;"> 
                <div>
                    <v-text-field
                        style="margin-left: 20px; margin-top: 35px;"
                        class="lbDetalles"
                        v-model="email"
                        label="Email id"
                        outlined
                        readonly/>
                </div>
                <div>
                    <v-text-field
                        style="margin-left: 20px; margin-top: 35px;"
                        class="lbDetalles"
                        v-model="telefono"
                        label="Phone no."
                        outlined
                        readonly/>
                </div>
            </div>
            <!--tercera fila textField-->
            <div style="display:flex;">
                <div>
                    <v-text-field
                        style="margin-left: 20px; margin-top: 35px;"
                        class="lbDetalles"
                        v-model="nacimiento"
                        label="Date of birth"
                        outlined
                        readonly/>
                </div>
                <div>
                    <v-text-field
                        style="margin-left: 20px; margin-top: 35px;"
                        class="lbDetalles"
                        v-model="edad"
                        label="Age"
                        outlined
                        readonly/>
                </div>
            </div>
            <!--Cuarta fila textField-->
            <div>
                <v-text-field
                    style="margin-left: 20px; margin-top: 35px;"
                    class="lbDetalles2"
                    v-model="direccion"
                    label="Address"
                    outlined
                    readonly/>
            </div>
         </div>
<!-------Apartado de informacion medica------------------------------>
         <div class="infMedical">
            <div class="titulo">Medical details</div>
            <!--Primera fila textFiel Apartado medico-->
            <div style="display: flex;">
                <div>
                    <v-text-field
                        style="margin-left: 20px; margin-top: 30px;"
                        class="lbDetalles"
                        v-model="tratamiento"
                        label="Treatment"
                        outlined
                        readonly/>
                </div>
                <div>
                    <v-text-field
                        style="margin-left: 20px; margin-top: 35px;"
                        class="lbDetalles"
                        v-model="sangre"
                        label="Blood group"
                        outlined
                        readonly/>
                </div>
            </div>
         </div>
        </v-card-text>
        <v-card-actions>
          
        </v-card-actions>
      </v-card>
</template>

<script>
export default {
    data(){
        return{
            nombre: this.nombre,
            apellido: this.apellido,
            email: this.email,
            telefono: this.telefono,
            nacimiento: this.nacimiento,
            edad: this.edad,
            genero: this.genero,
            direccion: this.direccion,
            tratamiento: this.tratamiento,
            sangre: this.sangre

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
    methods:{
        cancelarInfo() {
              this.$emit('update:dialogInformation', false)
          },
    }
}
</script>

<style>
    .infPersonal {
        width: 911px;
        height: 435px;
        border-radius: 15px;
        border: 1px dashed var(--primary-green, #4FB783);
        
    }
    .titulo{
        margin-left:15px; 
        margin-top:25px; 
        color: var(--secondary-dark-green, #034561);
        font-family: Open Sans;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 27px; /* 135% */
        letter-spacing: 0.4px;
    }
    .lbDetalles{
        width: 413px;
        height: 40px;
        border-radius: 15px;
        /*border: 1px solid var(--gray-palr-gray, #AAA);*/
        background: var(--gray-whte, #FFF);
        
    }
    .lbDetalles2{
        width: 846px;
        height: 50px;
        border-radius: 15px;
        /*border: 1px solid var(--gray-palr-gray, #AAA);*/
        background: var(--gray-whte, #FFF);
    }

    .infMedical{
        width: 911px;
        height: 245px;
        border-radius: 15px;
        border: 1px dashed var(--primary-green, #4FB783);
        margin-top: 40px;
    }
    .foto{
        width: 80px;
        height: 80px;
    }
    .lbPaciente{
        color: var(--primary-green, #4FB783);
        font-family: Open Sans;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 25px; /* 138.889% */
        letter-spacing: 0.36px;
    }
    .lbNombre{
        color: #000;
        font-family: Caudex;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 39px; /* 130% */
        letter-spacing: 0.3px;
        width:200px;
    }
</style>