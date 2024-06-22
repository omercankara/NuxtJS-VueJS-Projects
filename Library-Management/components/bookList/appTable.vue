<template>
    <div class="app-table ">
        <table class="table">
            <thead style="text-align: center;">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Title</th>
                    <th scope="col">Writer</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">Category</th>
                    <th scope="col">Language</th>
                    <th scope="col">Page</th>
                    <th scope="col">İmage</th>
                    <th>Settings</th>
                </tr>
            </thead>
            <tbody style="text-align: center;">
                <tr v-for="i in bookList">
                    <td>{{ i.id }}</td>
                    <td>{{ i.Baslik }}</td>
                    <td>{{ i.Yazar }}</td>
                    <td>{{ i.Yayinevi }}</td>
                    <td>{{ i.Kategori }}</td>
                    <td>{{ i.Dil }}</td>
                    <td>{{ i.Sayfa }}</td>
                    <td><img style="height: 40px ;width: 50px; object-fit: contain;" :src=i.image alt=""></td>
                    <td>
                        <i @click="edit(i)" style="font-size: 20px; color:blue; cursor: pointer;"
                            class="bx bx-edit"></i>
                        <i @click="deleteItem(i)" style="font-size: 20px; color: red; cursor: pointer;"
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
        bookList: Array,

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
                title: "Silmek İstiyor Musunuz ?",
                text: "Silme işlemi tamamlandıktan sonra geri alınamaz",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "green",
                cancelButtonColor: "#d33",
                confirmButtonText: "Evet, Sil !",
                cancelButtonText: "İptal !"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.fire({
                        title: "Tamamlandı!",
                        text: "İlgili Kayıt Listeden Kaldırıldı",
                        icon: "success"
                    });
                    this.$store.dispatch('deleteBook', id)
                    this.$store.commit('deleteBook', id)
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
            background-color: rgb(241, 241, 241);
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

.app-table {
    width: 90%;
    height: 20vh;
    display: flex;
    justify-content: center;

    .table {
        border-radius: 1vh;
        background-color: rgb(241, 241, 241);

        td {
            border: none !important;
            background-color: rgb(255, 255, 255);
        }

        th {
            border: none !important;
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
</style>