
export default {
  async categoryList({ commit }) {
    try {
      const response = await this.$axios.get('categoryList', {
        validateStatus: function (status) {
          return status >= 200;
        }
      });
      commit('set_CategoryList', response.data);
    } catch (error) {
      console.error(error);
    }
  },

  async createCategory({ dispatch, commit }, Category) {
    try {
      const response = await this.$axios.post('createCategory', Category, {
        validateStatus: function (status) {
          return status >= 200;
        }
      });
      await dispatch('categoryList');
    } catch (err) {
      console.log(err);
    }
  },

  async editCategory({ commit }, data) {
    try {
      await this.$axios.post('updateCategory', data, {
        validateStatus: function (status) {
          return status >= 200;
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  async deleteCategory({ commit }, id) {
    try {
      await this.$axios.post('deleteCategory', { id: id }, {
        validateStatus: function (status) {
          return status >= 200;
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
}