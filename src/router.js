import Vue from 'vue'
import VueRouter from 'vue-router'

import ResultadosChoice from './componentes/ResultadosChoice.vue'
import Formulario from './componentes/Formulario/index.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        //{ path: '/', redirect: '/usuarios'},
        { path: '/resultadoschoice', component: ResultadosChoice},
        { path: '/formulario', component: Formulario}

    ]
})