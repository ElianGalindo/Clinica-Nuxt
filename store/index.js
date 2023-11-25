export const state = () => ({
    newCita: false,
    newPaciente: false
})

export const mutations = {
    setNewCita(state, newCita) {
        //console.log('$$$mutation => ', newUser)
        state.newCita = newCita
    },
    setNewPaciente(state, newPaciente){
        state.newPaciente = newPaciente
    }
}