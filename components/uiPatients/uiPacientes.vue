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
                <div style="margin-top:10px; display:flex; width: 485px; height:40px; margin-left: 10px;">
      <!------------input para buscar pacientes----------------->              
                    <v-text-field
                    label="Search patients"
                    v-model="buscar"
                    @input="filtrarPacientes"
                    class="ml-3"
                    type="text"
                    solo
                    style="width: 485px;
                           height: 40px;
                           flex-shrink: 0;
                           border-radius: 15px;"
                    />
                </div> 
                <div style="display: flex; 
                            margin-top:10px;
                            width: 43px;
                            height: 52px;">
    <!--------------Boton para abrir la ventana modal------------------------->                        
                    <v-btn
                    @click.stop="dialog=true" 
                    id="botonAddPaciente"
                    > Add new patient +
                    </v-btn>
    <!--------------contenido de la ventana modal--------------------------------------------------------------------------------------------------------------->
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
        <!-------------------- inputs de la ventana modal ------------------------------------------->
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
                                                        type="number"
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
                                                <v-file-input v-model="documento" @change="handleFileUpload"/>
                                            </div>
                                        </v-row>
                                    </div>
                                </v-form>
                            </v-card-text>
              <!------------Boton para registrar paciente------------------------------------->              
                            <v-card-actions>
                            <v-btn
                                color="#4FB783"
                                style="width:434px; height:40px; border-radius:15px"
                                @click="RegistrarPaciente"
                            >
                                Guardar
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </div>
            </div>
 <!-------Contenedor donde se mustran los pacientes existentes----------------------------->
            <div class="tablaPacientes">
     <!---------Tabla para mostrar los pacientes------------------------------------------->
                <v-data-table
                    :headers= "headers"
                    :items = "filteredPacientes"
                    elevation="2"
                >
                    <template v-slot:item="{ item }">
                        <tr>
                        <td>{{ item.numero }}</td>
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.telefono }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.edad }}</td>
                        <td>{{ item.tratamiento }}</td>
<!---------------------Botones de las acciones para borrar y editar--------------------------------------------->
                        <td> 
                           <template>
        <!---------------------Boton de borrar paciente------------------>
                                <v-tooltip top>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="red"
                                            icon
                                            @click="deletePaciente(item.email)"
                                            v-bind="attrs"
                                            v-on="on">
                                            <v-icon>mdi-account-minus</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>
                                        Borrar el paciente {{ item.nombre }}
                                    </span>
                                    </v-tooltip>
                                        <!---------------------Boton de editar paciente------------------>
                                    <v-tooltip top>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn color="orange darken-1"
                                                icon
                                                @click="editPaciente(item)"
                                                v-bind="attrs"
                                                v-on="on">
                                                <v-icon>mdi-account-edit</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>
                                            Editar el paciente {{ item.nombre }}
                                        </span>
                                </v-tooltip>
                           </template>
                        </td>
                        </tr>
                    </template>
                </v-data-table>
                <v-dialog v-model="dialogDelete" max-width="290">
                    <borrar-pacientes :email="email" @update:dialogDelete="handleDialogDelete"/>
                </v-dialog>
                <v-dialog v-model="dialogEdit" max-width="800">
                    <editar-paciente 
                        :nombre="nombre"
                        :apellido="apellido"
                        :email="email"
                        :telefono="telefono"
                        :nacimiento="nacimiento"
                        :edad="edad"
                        :genero="genero"
                        :direccion="direccion"
                        :tratamiento="tratamiento"
                        :sangre="sangre"
                        :documento="documento"
                        @update:dialogEdit="handleDialogEdit"/>
                </v-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import borrarPacientes from '../acciones/borrarPacientes.vue';
import EditarPaciente from '../acciones/editarPaciente.vue';

export default {
    components: {
        borrarPacientes,
        EditarPaciente
    },
    data(){
        return{
            headers: [
            {text: 'Sr no.', align: 'center', sortable: true, value: 'numero', width:'70px'},
            {text: 'Name', align: 'left', sortable: true, value: 'nombre'},
            {text: 'Mobile', align: 'left', sortable: true, value: 'telefono'},
            {text: 'Email', align: 'left', sortable: true, value: 'email'},
            {text: 'Age', align: 'left', sortable: true, value: 'edad'},
            {text: 'Treatmen', align: 'left', sortable: true, value: 'tratamiento'},
            {text: 'Action', align: 'left', sortable: false, value: 'Acciones',}
            ],
            pacientes: [],
            reglas: {
                requerido: value => !!value || 'Campo requerido!'
            },
            dialog: false,
            dialogDelete: false,
            dialogEdit: false,
            buscar: '',
            documento: null,
            frmRegistroPaciente: false,
            numero:'',
            nombre: '',
            apellido: '',
            email: '',
            telefono: '',
            nacimiento: '',
            edad: '',
            genero: '',
            direccion: '',
            tratamiento: '',
            sangre: '',
            usuario: ''
        }
    },
    computed: {
        newPaciente () {
            return this.$store.state.newPaciente
        },
        // Filtrar citas por correo-----------------------------------------------------------
        filteredPacientes() {
        return this.pacientes.filter(paciente => paciente.email.includes(this.buscar));
        }
    },
    watch: {
        newPaciente () {
            if (this.newPaciente) {
                this.pacientes = []
                this.loadPacientes()
                this.$store.commit('setNewPaciente', false)
            }
        }
    },
    mounted () {
        this.loadPacientes()
    },
    methods: {
        //Cargar pacientes en la tabla----------------------------------------------------------------
        async loadPacientes () {
            const pacientes = await fetch('http://localhost:5020/get-pacientes')
            const data = await pacientes.json()
            if(data.alert === 'success'){
                this.pacientes = data.pacientes.map((paciente,index) => ({...paciente, numero: index + 1}))
            }
            console.log('$$ pacientes => ', pacientes, data)
        },
        //Registrar pacientes-------------------------------------------------------------------------
        async RegistrarPaciente () {
            const frmRegistroPaciente= this.$refs.frmRegistroPaciente.validate()
            if (this.frmRegistroPaciente) {
                //Registramos la cita
                const sendData = {
                    
                    nombre: this.nombre,
                    apellido: this.apellido,
                    email: this.email,
                    telefono: this.telefono,
                    nacimiento: this.nacimiento,
                    edad: this.edad,
                    genero: this.genero,
                    direccion: this.direccion,
                    tratamiento: this.tratamiento,
                    sangre: this.sangre,
                   documento: this.documento
                }
                const rawResponse = await fetch('http://localhost:5020/new-paciente', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(sendData)

                });
                const content = await rawResponse.json()
                if(content.alert === 'success'){
                    this.nombre=''
                    this.apellido=''
                    this.email=''
                    this.telefono=''
                    this.nacimiento=''
                    this.edad=''
                    this.genero=''
                    this.direccion=''
                    this.tratamiento=''
                    this.sangre=''
                    this.dialog=false
                    this.loadPacientes()
                }else {
                    alert('Ya existe un paciente con este correo!')
                }
            }
        },
        handleFileUpload(file) {
      // Acciones cuando se carga un archivo
            console.log('Archivo cargado:', file);
        },
        filtrarPacientes(){

        },
        deletePaciente(email) {
            this.email = email
            this.dialogDelete = true
        },
        handleDialogDelete(value){
            this.dialogDelete = value;
            if (!value) {
                this.loadPacientes();
            }
        },
        editPaciente(paciente){
            this.nombre = paciente.nombre
            this.apellido = paciente.apellido
            this.email = paciente.email
            this.telefono = paciente.telefono
            this.nacimiento = paciente.nacimiento
            this.edad = paciente.edad
            this.genero = paciente.genero
            this.direccion = paciente.direccion
            this.tratamiento = paciente.tratamiento
            this.sangre = paciente.sangre
            this.documento = paciente.documento
            this.dialogEdit = true
        },
        handleDialogEdit(value){
            this.dialogEdit = value;
            if (!value) {
                this.loadPacientes();
            }
        },
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