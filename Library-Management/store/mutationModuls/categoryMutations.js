export default {
    updateCategory(state, data) {
        let item = state.categoryList.find(category => category.id === data.id)
        if (item) {
            item.Category = data.Category
        }
    },

    set_CategoryList(state, data) {
        state.categoryList = data
    },

    deleteCategory(state, id) {
        state.categoryList = state.categoryList.filter(Category => Category.id !== id);
        
    },
}