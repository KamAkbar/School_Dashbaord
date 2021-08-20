import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        students: []
    },
    mutations: {
        getStudents(state, student) {
            state.students.push(student)
        },
        getStudentsState(state, student) {
            state.students = student
        },
        DELETE_ITEM(state, index) {
            state.students.splice(index, 1)
        },
        ADD_ITEM(state, item) {
            state.items.push(item)
        },
        UPDATE_ITEM(state, { index, item }) {
            if (state.items[index]) {
                Object.assign(state.items[index], item)
            }
        },
    },
    actions: {
        saveDataToLocalStorage({state}) {
            const data = JSON.stringify(state.students)
            localStorage.setItem('students', data)
        },
        loadDataToLocalStorage() {
            let data = JSON.parse(localStorage.getItem('students'))

            if(data) {
                this.commit('getStudentsState', data)
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