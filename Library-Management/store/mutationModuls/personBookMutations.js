export default {
    set_personBookList(state, data) {
        state.personBookList = data
    },
    deletePersonBook(state, id) {
        console.log(id);
        state.personBookList = state.personBookList.filter(personBook => personBook.id !== id.id);
    },
}