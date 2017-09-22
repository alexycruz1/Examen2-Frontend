import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);
var url = 'https://prueba-examen.herokuapp.com/PE2/';

export default {
    getPeople() {
        return Vue.http.get(url + 'People');
    },

    createPerson(newPerson) {
        return Vue.http.post(url + 'Person', newPerson);
    },

    editPerson(updatedFields, IDPerson) {
        return Vue.http.put(url + 'Person/' + IDPerson, updatedFields);
    },

    deletePerson(IDPerson) {
        return Vue.http.delete(url + 'Person/' + IDPerson);
    },

    getPersonById(IDPerson){
        return Vue.http.get(url + 'PersonById/' + IDPerson);
    }
}
