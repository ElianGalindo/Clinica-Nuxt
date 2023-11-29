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
                </p> &nbsp; <p>Schedule</p>
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
<!-------Dias citas------------------------------->
        <div class="dias"></div>
<!------Calendario por hacer------------------------------>        
        <div class="calendario"></div>
<!------Todo list---------------------------------------->
        <div class="toDo">
            <div>
                <div style="margin-top: 20px; margin-left: 15px;"><p>Todo List</p></div>
                <div style="display: flex; margin-top: 15px; margin-left: 15px;" >
                    <div style="width: 250px;">
                        <v-text-field solo v-model="nuevaTarea" @keyup.enter="agregarTarea" placeholder="Nueva tarea"/>
                    </div>
                    <div style="margin-left:20px; margin-top:20px;"><button @click="agregarTarea">Agregar</button></div>
                </div>
                <ul>
                <li v-for="(tarea, index) in tareas" :key="index" :style="{ textDecoration: tarea.hecho ? 'line-through' : 'none' }">
                    <input type="checkbox" v-model="tarea.hecho" />
                    {{ tarea.texto }}
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            nuevaTarea: "",
            tareas: []
        }
    },
    methods: {
        agregarTarea() {
            if (this.nuevaTarea.trim() !== "") {
                this.tareas.push({ texto: this.nuevaTarea, hecho: false });
                this.nuevaTarea = "";
            }
        }
    },
}
</script>
<style>
    .dias{
        width: 705px;
        height: 226px;
        flex-shrink: 0;
        border-radius: 15px;
        background: var(--gray-whte, #FFF);
        margin-top: 20px;
        margin-left: 20px;
    }
    .calendario {
        width: 705px;
        height: 752px;
        flex-shrink: 0;
        border-radius: 15px;
        background: var(--gray-whte, #FFF);
        margin-top: 20px;
        margin-left: 20px;
    }
    .toDo{
        width: 425px;
        height: 765px;
        flex-shrink: 0;
        border-radius: 15px;
        background: var(--gray-whte, #FFF);
        margin-left: 750px;
        margin-top: -1012px;
    }
    .app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: left;
        color: #2c3e50;
        margin-top: 60px;
    }

    input {
        margin-bottom: 10px;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin-bottom: 5px;
    }
</style>