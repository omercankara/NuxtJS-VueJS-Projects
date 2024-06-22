export default {
    async createPersonBook({ dispatch, commit }, data) {
        try {
            await this.$axios.post('createPersonBook', data, {
                validateStatus: function (status) {
                    return status >= 200;
                }
            });
            dispatch('sendBookList')
        } catch (err) {
            console.log(err);
        }
    },

    async sendBookList({ commit }) {
        try {
            const response = await this.$axios.get("sendBookList", {
                validateStatus: function (status) {
                    return status >= 200
                }
            })
            commit('set_personBookList', response.data)
        } catch (err) {
            console.log(err);
        }
    },
    async deletePersonBook({ commit }, id) {
        try {
            await this.$axios.post("deletePersonBook", id, {
                validateStatus: function (status) {
                    return status >= 200
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
}