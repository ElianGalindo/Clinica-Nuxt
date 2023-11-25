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
                </p> &nbsp; <p>Appointments</p>
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
        <div class="citas" style="margin-top:10px;">
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
                    >Today &nbsp;&nbsp;  <v-icon class="bi bi-caret-down-fill"></v-icon>
                    </v-btn> &nbsp;
                    <p>Appointments</p>
                </div>
            </div>
            <div class="search" style="display: flex;">
                <div style="margin-top:10px; display:flex; width: 485px; height:40px; margin-left: 10px;">
                    <v-text-field
                    v-model="search"
                    @input="filterCitas"
                    label="Search patients"
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
                    <v-btn 
                    @click.stop="dialog=true"
                    style="margin-top: 6px;
                                  margin-left: 40px;
                                  display: block;
                                  width: 40px;
                                  height: 60px;
                                  border-radius:90% ;
                                  border: 1px solid var(--primary-green, #4FB783);
                                background-color:#EBFFF5;"
                    > + 
                    </v-btn>
                    <!--Aqui va el modal de registro-->
                    <v-dialog v-model="dialog" max-width="500" style="height: 658px; border-radius: 15px;">
                        <v-card>
                            <div style="display:flex; margin-left: 100px;">
                                <div>
                                    <v-card-title>
                                    Add new Appointment
                                    </v-card-title>
                                </div>
                                <div><v-btn style="width:10px; height:20px; border-radius: 20%; margin-top:25px; margin-left: 80px;" @click="dialog=false">X</v-btn></div>
                            </div>
                            <v-card-text>
                            <!-- Contenido de tu ventana modal -->
                                <v-form ref="frmCita" v-model="frmCita">
                                    <v-row align="center">
                                        <div>
                                            <div>
                                                <label for="" style="margin-left:18px;">Name</label>
                                            </div>
                                            <v-text-field
                                                class="ml-3"
                                                type="text"
                                                v-model="nombre"
                                                placeholder="Nombre"
                                                solo
                                                style="width: 350px;
                                                       height: 40px;
                                                       border-radius: 15px;
                                                        border: 1px solid var(--gray-light-gray, #DDD);
                                                        background: var(--gray-whte, #FFF);"
                                                :rules="[reglas.requerido]"
                                            />
                                        </div>
                                    </v-row>
                                    <v-row align="center">
                                        <div style="margin-top:20px;">
                                            <div><label for="" style="margin-left:18px;">Email</label></div>
                                            <v-text-field
                                                class="ml-3"
                                                type="email"
                                                v-model="email"
                                                placeholder="Correo electronico"
                                                solo
                                                style="width: 350px;
                                                       height: 40px;
                                                       border-radius: 15px;
                                                        border: 1px solid var(--gray-light-gray, #DDD);
                                                        background: var(--gray-whte, #FFF);"
                                                :rules="[reglas.requerido]"
                                            />
                                        </div>
                                    </v-row>
                                    <v-row align="center">
                                        <div style="margin-top:20px;">
                                            <div><label for="" style="margin-left:18px;">Phone</label></div>
                                            <v-text-field
                                                class="ml-3"
                                                type="phone"
                                                v-model="telefono"
                                                placeholder="Telefono"
                                                solo
                                                style="width: 350px;
                                                       height: 40px;
                                                       border-radius: 15px;
                                                        border: 1px solid var(--gray-light-gray, #DDD);
                                                        background: var(--gray-whte, #FFF);"
                                                :rules="[reglas.requerido]"
                                            />
                                        </div>
                                    </v-row>
                                    <div style="display: flex; margin-top:20px;">
                                        <div>
                                            <v-row align="center">
                                                <div style="margin-top:20px;">
                                                    <div><label for="" style="margin-left:18px;">Age</label></div>
                                                    <v-text-field
                                                        class="ml-3"
                                                        type="int"
                                                        v-model="edad"
                                                        placeholder="Edad"
                                                        solo
                                                        style="width: 120px;
                                                               height: 40px;
                                                               border-radius: 15px;
                                                                border: 1px solid var(--gray-light-gray, #DDD);
                                                                background: var(--gray-whte, #FFF);"
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
                                    <div style="display: flex; margin-top:20px;">
                                        <div>
                                            <v-row align="center">
                                                <div style="margin-top:20px;">
                                                    <div><label for="" style="margin-left:18px;">Date</label></div>
                                                    <v-text-field
                                                        class="ml-3"
                                                        type="date"
                                                        v-model="date"
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
                                        <div style="margin-left:120px;">
                                            <v-row align="center">
                                                <div style="margin-top:20px;">
                                                    <div><label for="" style="margin-left:18px;">Time</label></div>
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
            <div class="tablaCitas">
                <v-data-table
                    :headers= "headers"
                    :items = "filteredCitas"
                    elevation="2"
                >
                    <template v-slot:item="{ item }">
                        <tr>
                        <td>{{ item.numero }}</td>
                        <td>{{ item.nombre }}</td>
                        <td>{{ item.telefono }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.date }}</td>
                        <td>{{ item.time }}</td>
                        <!-- Aplicar colores condicionales según el estatus -->
                        <td :style="{ color: item.status === 'upcoming' ? '#4FB783' : '#DC143C' }">{{ item.status }}</td>
                        <!-- Otras columnas... -->
                        </tr>
                    </template>
                </v-data-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        headers: [
            {text: 'Sr no.', align: 'center', sortable: true, value: 'numero', width:'70px'},
            {text: 'Name', align: 'left', sortable: true, value: 'nombre'},
            {text: 'Phone', align: 'left', sortable: true, value: 'telefono'},
            {text: 'Email', align: 'left', sortable: true, value: 'email'},
            {text: 'Date', align: 'left', sortable: true, value: 'date'},
            {text: 'Time', align: 'left', sortable: true, value: 'time'},
            {text: 'Status', align: 'left', sortable: false, value: 'status',}
        ],
        citas: [],
        search:'',
        frmCita: false,
        dialog: false,
        genero: null,
        numero:'',
        nombre: '',
        email: '',
        telefono: '',
        edad: '',
        genero: '',
        date: '',
        time: '',
        reglas: {
            requerido: value => !!value || 'Campo requerido!'
        }
      }
    },
    computed: {
        newCita () {
            return this.$store.state.newCita
        },
        filteredCitas() {
      // Filtrar citas por día
        return this.citas.filter(cita => cita.date.includes(this.search));
        }
    },
    watch: {
        newCita () {
            if (this.newCita) {
                this.citas = []
                this.loadCitas()
                this.$store.commit('setNewCita', false)
            }
        }
    },
    mounted () {
        this.loadCitas()
    },
    methods:{
        //Cargar citas a la tabla
        async loadCitas () {
            const citas = await fetch('http://localhost:5020/get-citas')
            const data = await citas.json()
            if(data.alert === 'success'){
                this.citas = data.citas.map((cita,index) => ({...cita, numero: index + 1}))
            }
            console.log('$$ citas => ', citas, data)
        },
        //filtrar las citas 
        filterCitas(){

        },
        //Registrar las citas
        async RegistrarCita () {
                const frmCita= this.$refs.frmCita.validate()
                if (this.frmCita) {
                    //Registramos la cita
                    const sendData = {
                        nombre: this.nombre,
                        email: this.email,
                        telefono: this.telefono,
                        edad: this.edad,
                        genero: this.genero,
                        date: this.date,
                        time: this.time
                    }
                    const rawResponse = await fetch('http://localhost:5020/new-cita', {
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
                        this.email=''
                        this.telefono=''
                        this.edad=''
                        this.genero=''
                        this.date=''
                        this.time=''
                        this.dialog=false
                        this.loadCitas()
                    } else {
                        alert('Ya existe una cita a la misma hora y mismo dia o el paciente no esta registrado!')
                    }
                }
        },
    },
}
</script>
<style>
.citas{
    width: 1200px;
    height: 1054px;
    flex-shrink: 0;
    border-radius: 15px;
    /*background: var(--gray-whte, #FFF);*/
    background-color: #FFF;
    margin-left: 30px;
}
.encabezado1{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    
}
.encabezado1 > * {
    margin-right: 10px;
}
.search {
    width: 1160px;
    height: 80px;
    flex-shrink: 0;
    background: var(--gray-shaded-white, #F6F6F6);
    margin-left:20px;
    margin-top:20px;
}
.notificaciones {
    margin-left: 900px;
}
.cuerpo{
  background: var(--gray-shaded-white, #F6F6F6);
}
</style> 