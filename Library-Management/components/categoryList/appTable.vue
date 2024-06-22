<template>
    <div class="app-table ">
        <table class="table">
            <thead style="text-align: center;">
                <tr>
                    <th scope="col" class="left-align">id</th>
                    <th scope="col" class="left-align">Title</th>
                    <th scope="col" class="right-align">Settings</th>
                </tr>
            </thead>
            <tbody style="text-align: center;">
                <tr v-for="item in categoryList">
                    <td class="left-align">{{ item.id }}</td>
                    <td class="left-align">{{ item.Category }}</td>
                    <td class="right-align"><i @click="edit(item)" style="font-size: 20px; color:blue; cursor: pointer;"
                            class="bx bx-edit"></i>
                        <i @click="deleteItem(item)" style="font-size: 20px; color: red; cursor: pointer;"
                            class="bx bx-trash"></i>
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

        }
    },
    props: {
        categoryList: Array
    },
    methods: {
        edit(e) {
            let shallowCopy1 = Object.assign({}, e);
            this.$emit('updateData', shallowCopy1);
            this.$emit('modalVisible', true)
        },
        deleteItem(e) {
            let id = { id: e.id }
            this.$swal.fire({
                title: "Do you want to delete it?",
                text: "Once deleted it cannot be undone",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "green",
                cancelButtonColor: "#d33",
                confirmButtonText: "Evet, Sil !",
                cancelButtonText: "İptal !"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.fire({
                        title: "Success!",
                        text: "Relevant Record Removed from the List",
                        icon: "success"
                    });
                    this.$store.dispatch('deleteCategory', id.id)
                    this.$store.commit('deleteCategory', id.id)
                }
            });
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
        width: 90%;
        height: 20vh;
        display: flex;
        justify-content: center;

        .table {
            border-radius: 1vh;
            background-color: rgb(255, 255, 255);

            .left-align {
                text-align: left;
                width: 10%;
            }

            .right-align {
                text-align: right;
                width: 90%;
            }

            td {
                font-size: 13px;
                color: rgb(90, 90, 90);
                font-family: 'Lato', sans-serif;
                border: none;
            }

            th {
                background-color: rgb(236, 235, 235);
                font-size: 13px;
                color: rgb(90, 90, 90);
                font-family: 'Lato', sans-serif;
                border: none;
            }





        }


        .app-info {
            width: 90%;
            height: 10vh;
            display: flex;
            justify-content: flex-end;
            align-items: center;


            .app-button {
                display: flex;
                height: 100%;
                justify-content: flex-start;
                align-items: center;
                width: 10%;

                button {
                    height: 80%;
                    width: 85%;
                    margin: 0px;
                    padding: 0px;
                }
            }

            .app-book-size {
                height: 80%;
                width: 10%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: rgb(0, 30, 75);
                border-radius: 5px;

                p {
                    font-size: 15px;
                    margin: 0px;
                    font-family: Arial, Helvetica, sans-serif;
                    color: white;
                }

                .number {
                    background-color: rgb(0, 12, 173);
                    width: 30%;
                    text-align: center;
                    padding: 0px;
                    margin: 0px;
                    border-radius: 1vh;
                }
            }
        }
    }
}
</style>