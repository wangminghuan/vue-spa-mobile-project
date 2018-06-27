

const state = {
   isShow:true
}

const mutations = {
    setLoading(state,status){
        state.isShow=status;
     }
}

export default {
    state,
    mutations
}