export default {
    set_post_Data(state, data) {
       
        state.bookList = data
    },

    updateBook(state, data) {
        let item = state.bookList.find(book => book.id == data.id)
        if (item) {
            item.Baslik = data.Baslik
            item.Yazar = data.Yazar
            item.Yayinevi = data.Yayinevi
            item.Kategori = data.Kategori
            item.Dil = data.Dil
            item.Sayfa = data.Sayfa
            item.image = data.image
        }
    },

    deleteBook(state, id) {
        state.bookList = state.bookList.filter(book => book.id !== id.id);
    },
}