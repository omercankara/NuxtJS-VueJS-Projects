
// store/actions/personActions.js
export default {
  async createPerson({ dispatch, commit }, data) {
    try {
      await this.$axios.post('createPerson', data, {
        validateStatus: function (status) {
          return status >= 200;
        }
      });
      await dispatch('personList');
    } catch (err) {
      console.log(err);
    }
  },


  async personList({ commit }) {
    try {
      const response = await this.$axios.get('personList', {
        validateStatus: function (status) {
          return status >= 200
        }
      });
      commit('set_personList', response.data);
      
    } catch (error) {
      console.error(error);
    }
  },

  async deletePerson({ commit }, id) {
    try {
      await this.$axios.post('deletePerson', id, {
        validateStatus: function (status) {
          return status >= 200
        }
      })
    } catch (err) {
      console.log(err)
    }
  },

  async editPerson({ commit }, data) {
    try {
      await this.$axios.post('updatePerson', data, {
        validateStatus: function (state) {
          return state >= 200
        }
      })
    }
    catch (err) {
      console.log(err);
    }
  }
}




