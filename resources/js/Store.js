import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
export const store =new Vuex.Store({
    state:{
     token:localStorage.getItem('access_token') || null,
    },
    mutations:{
        getToken(state,token){

            state.token=token;
        }
    },
    actions:{
        retreiveToken(context,credentials){
        axios.post('http://127.0.0.1:8000/api/login',{
            email:credentials.email,
            password:credentials.password
        }).then(response=>{
            const token=response.data.data.token;
            localStorage.setItem('access_token',token);
            console.log(token);
             context.commit("getToken",token);
            //context.commit('addTodo',response.data);
        }).catch(error=>{
            console.log(error);
        });
        }
    }

});
