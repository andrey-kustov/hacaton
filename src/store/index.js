import Vue from 'vue';
import Vuex from 'vuex';

import {Storeage} from '@/services/store.js'

Vue.use(Vuex);

export const store = new Storeage();
