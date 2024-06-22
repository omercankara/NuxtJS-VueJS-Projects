html
Kodu kopyala
<template>
    <div class="app-table">
        <div class="app-title">
            <h5 style="color: black; font-family: 'Lato', sans-serif;" class="ml-2">Personal List</h5>
        </div>
        <div class="app-search mb-2 w-50">
            <input v-model="searchTerm" placeholder="Search..." type="text" class="form-control w-25 h-75">
        </div>
        <table class="table">
            <thead style="text-align: center;">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Book name</th>
                    <th scope="col">Delivery area</th>
                    <th scope="col">Delivery area ID</th>
                    <th scope="col">Ayarlar</th>
                </tr>
            </thead>
            <tbody style="text-align: center;">
                <tr v-for="i in filteredItem" :key="i.id">
                    <td>{{ i.id }}</td>
                    <td>{{ i.book_name }}</td>
                    <td>{{ i.person_name }}</td>
                    <td>{{ i.person_tc }}</td>
                    <td><i @click="deleteItem(i)" style="font-size: 20px; color: red; cursor: pointer;" class="bx bx-trash"></i>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchTerm: ''
        }
    },
    methods: {
        deleteItem(e) {
            let id = { id: e.id }
            this.$swal.fire({
                title: "Do you want to delete it?",
                text: "Once deleted it cannot be undone",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "green",
                cancelButtonColor: "#d33",
                confirmButtonText: "Delete!",
                cancelButtonText: "Cancel"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.fire({
                        title: "Success!",
                        text: "Relevant Record Removed from the List",
                        icon: "success"
                    });
                    this.$store.dispatch('deletePersonBook', id)
                    this.$store.commit('deletePersonBook', id)
                }
            });
        },
    },
    computed: {
        allItem() {
            return this.$store.getters.getPersonBook
        },
        filteredItem() {
            if (!this.searchTerm) {
                return this.allItem
            }
            return this.allItem.filter(book => book.book_name.toLowerCase().includes(this.searchTerm.toLowerCase()))
        },

    },
    // head() {
    //     return {
    //         link: [
    //             {
    //                 rel: 'stylesheet',
    //                 href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
    //             },
    //             {
    //                 rel: 'stylesheet',
    //                 href: 'https://cdn.jsdelivr.net/npm/bootstrap-vue@2.21.2/dist/bootstrap-vue.css'
    //             }
    //         ],
    //         script: [
    //             {
    //                 src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js',
    //                 type: 'text/javascript'
    //             }
    //         ]
    //     }
    // }
}
</script>





<style scoped lang="scss">
@media screen and (min-width: 1440px) {


    .app-table {
        width: 100%;
        height: 50vh;
        display: flex;

        flex-direction: column;
        justify-content: center;

        .table {
            border-radius: 1vh;
            display: block;
            overflow-y: auto;
            height: 1000px !important;
            width: 100%;

            th {
                background-color: rgb(236, 235, 235);
                font-size: 13px;
                color: rgb(90, 90, 90);
                font-family: 'Lato', sans-serif;
                border: none;
            }

            tbody {
                tr {
                    background-color: rgb(252, 252, 252);
                }
            }


            td {
                font-size: 13px;
                color: rgb(90, 90, 90);
                font-family: 'Lato', sans-serif;
                border: none;
                width: calc(100% / 15);
            }

            &::-webkit-scrollbar {
                width: 12px;
                /* Kaydırma çubuğu genişliği */
            }

            &::-webkit-scrollbar-track {
                background: rgb(217, 234, 255) !important;
                /* Kaydırma çubuğu arka plan rengi */
            }

            &::-webkit-scrollbar-thumb {
                background-color: rgba(0, 0, 255, 0.178);
                /* Kaydırma çubuğu rengi */
                border-radius: 10px;
                /* Kaydırma çubuğu kenar yuvarlama */

            }
        }


    }
}
</style>