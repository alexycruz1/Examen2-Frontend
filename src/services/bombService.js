import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
var url = 'https://prueba-examen.herokuapp.com/PE2/';

export default {
    getBombs() {
        return Vue.http.get(url + 'Bombs');
    },

    createBomb(newBomb) {
        return Vue.http.post(url + 'Bomb', newBomb);
    },

    editBomb(updatedFields, IDBomb) {
        return Vue.http.put(url + 'Bomb/' + IDBomb, updatedFields);
    },

    deleteBomb(IDBomb) {
        return Vue.http.delete(url + 'Bomb/' + IDBomb);
    },

    getBombById(IDBomb){
        return Vue.http.get(url + 'BombById/' + IDBomb);
    }
}
