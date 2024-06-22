export default {

    set_personList(state, data) {
      
        state.personList = data
        
    },

    updatePerson(state, data) {
       
        let item = state.personList.find(book => book.id == data.id)
        if (item) {
            item.isim = data.isim
            item.soyisim = data.soyisim
            item.tc = data.tc
            item.telefon = data.telefon
            item.adres = data.adres
            item.cinsiyet = data.cinsiyet
            item.image = data.image
        }
    },

    deletePerson(state, id) {
        state.personList = state.personList.filter(person => person.id !== id.id);
    },
}