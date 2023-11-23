export const state = () => ({
    newCita: false
})

export const mutations = {
    setNewCita(state, newCita) {
        //console.log('$$$mutation => ', newUser)
        state.newCita = newCita
    }
}