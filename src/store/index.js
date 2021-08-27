import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        students: [],
        signs: []
    },
    mutations: {
        getStudents(state, student) {
            state.students.push(student)
        },
        getSigns(state, sign) {
            state.signs.push(sign)
        },
        getStudentsState(state, student) {
            state.students = student
        },
        getSignsState(state, sign) {
            state.signs = sign
        },
        DELETE_ITEM(state, index) {
            state.students.splice(index, 1)
        },
        ADD_ITEM(state, item) {
            state.items.push(item)
        },
        UPDATE_ITEM(state, { index, student }) {
            if (state.students[index]) {
                Object.assign(state.students[index], student)
            }
        },
    },
    actions: {
        saveDataToLocalStorage({state}) {
            const data = JSON.stringify(state.students)
            localStorage.setItem('students', data)
        },
        saveSignDataToLocalStorage({state}) {
            const signData = JSON.stringify(state.signs)
            localStorage.setItem('signs', signData)
        },
        loadDataToLocalStorage() {
            let data = JSON.parse(localStorage.getItem('students'))

            if(data) {
                this.commit('getStudentsState', data)
                
            }
        },
        loadSignDataToLocalStorage() {
            let signData = JSON.parse(localStorage.getItem('signs'))

            if(signData) {
                this.commit('getSignsState', signData)
                console.log(signData)
            }
        },
        async LOAD_FROM_LOCALSTORAGE({commit}) {
            const rawItems = await localStorage.getItem('students')
            let students = []
    
            if (rawItems && rawItems.length) {
                try {
                    students = await JSON.parse(rawItems)
                } catch (e) {
                    students = []
                }
            }
    
            commit('SET_ITEMS', students)
        },
        async SAVE_TO_LOCALSTORAGE({state}) {
            await localStorage.setItem('students', JSON.stringify(state.students))
        },
    },
    getters: {

    },
    moduler: {

    }
})