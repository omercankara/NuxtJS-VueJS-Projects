
export default {
  async bookList({ commit }) {
    try {
      const response = await this.$axios.get('bookList', {
        validateStatus: function (status) {
          return status >= 200
        }
      });
      commit('set_post_Data', response.data);
    } catch (error) {
      console.error(error);
    }
  },

  async createBook({ dispatch, commit }, data) {
    try {
      const response = await this.$axios.post('createBook', data, {
        validateStatus: function (status) {
          return status >= 200;
        }
      });
      await dispatch('bookList');
    } catch (err) {
      console.log(err);
    }
  },

  async editBook({ commit }, data) {
    try {
      await this.$axios.post('updateBook', data, {
        validateStatus: function (status) {
          return status >= 200;
        }
      });
    } catch (err) {
      console.log(err);
    }
  },

  async deleteBook({ commit }, id) {
    try {
      await this.$axios.post('deleteBook', id, {
        validateStatus: function (status) {
          return status >= 200;
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
}