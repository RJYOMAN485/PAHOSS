import Vue from 'vue'
import axios from 'axios'

axios.defaults.withCredentials = true

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


Vue.prototype.$axios = axios