export default {
  async createBook({ commit }, data) {
    try {
      const response = await this.$axios.post("createBook", data, {
        validateStatus: function (status) {
          return status >= 200
        }
      })
    } catch (err) {
      console.log(err)
    }
  },

  async createCategory({ commit }, Category) {
    console.log(Category)
    try {
      const response = await this.$axios.post('createCategory', {Category:Category}, {
        validateStatus: function (status) {
          return status >= 200
        }
       
      })
      
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  },

  async editBook({ commit }, data) {
    try {
      const response = await this.$axios.post("updateBook", data, {
        validateStatus: function (status) {
          return status >= 200
        }
      })
    } catch (err) {
      console.log(err)
    }
  },


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


  async deleteBook({ commit }, id) {
    try {
      const response = await this.$axios.post("deleteBook", id, {
        validateStatus: function (status) {
          return status >= 200
        }
      })
      console.log(id)
    } catch (err) {
      console.log(err);
    }
  },



  async categoryList({ commit }) {
    try {
      const response = await this.$axios.get('categoryList', {
        validateStatus: function (status) {
          return status >= 200
        }
      });
      console.log(response.data)
      commit('set_CategoryList', response.data);
    } catch (error) {
      console.error(error);
    }
  },



}