export const state = () => ({
    tasks:{}
});

//getters 
export const getters = {
        tasks(state){
            return state.tasks
        }
}

//mutations 
export const mutations = {
    SET_TASKS(state, tasks){
        state.tasks = tasks
    }
}

// setters
export const actions = {
    setTasks({commit}, tasks){
        commit("SET_TASKS", tasks)
    }
}