<template>
    <v-card>
        <v-card-title class="text-h5">
          Borrar Paciente
        </v-card-title>
        <v-card-text>
          Estas seguro que deseas borrar el paciente?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="cancelarDelete"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="borrar"
          >
            Borrar
          </v-btn>
        </v-card-actions>
      </v-card>
</template>

<script>
    export default {
      props: {
        email: String
      },
      methods: {
        //Cerrar la ventana modal
          cancelarDelete() {
              this.$emit('update:dialogDelete', false)
          },
          async borrar () {
            const sendData = {
                email: this.email
            }
            const rawResponse = await fetch('http://localhost:5020/delete-paciente',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(sendData)
            })
            const res = await rawResponse.json()
            if(res.alert === 'success'){
              this.editUserData.nombre=''
              this.editUserData.apellido=''
              this.editUserData.email=''
              this.editUserData.telefono=''
              this.editUserData.nacimiento=''
              this.editUserData.edad=''
              this.editUserData.genero=''
              this.editUserData.direccion=''
              this.editUserData.tratamiento=''
              this.editUserData.sangre=''
              this.$emit('update:dialogDelete', false)
            }
          },
      }
    }
</script>