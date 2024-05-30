export default {
    set_post_Data(state, data) {
        state.bookList = data
    },


    updateBook(state, { id, Baslik, Yazar, Yayinevi, Kategori, Dil, Sayfa, image }) {
        let item = state.bookList.find(book => book.id === id)
        if (item) {
            item.Baslik = Baslik
            item.Yazar = Yazar
            item.Yayinevi = Yayinevi
            item.Kategori = Kategori
            item.Dil = Dil
            item.Sayfa = Sayfa,
            item.image = image
        }
    }
    ,
    set_CategoryList(state, data) {
        state.categoryList = data
    }
}