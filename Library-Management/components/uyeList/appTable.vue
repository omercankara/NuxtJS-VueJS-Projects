<template>
    <div class="app-table ">
        <table class="table">
            <thead style="text-align: center;">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Tc no</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Address</th>
                    <th>Settings</th>
                </tr>
            </thead>
            <tbody style="text-align: center;">
                <tr v-for="i in personList">
                    <td>{{ i.id }}</td>
                    <td>{{ i.isim }}</td>
                    <td>{{ i.soyisim }}</td>
                    <td>{{ i.tc }}</td>
                    <td>{{ i.telefon }}</td>
                    <td>{{ i.cinsiyet }}</td>
                    <td>{{ i.adres }}</td>

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
        personList: Array,

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
                confirmButtonText: "Delete !",
                cancelButtonText: "Cancel!"
            }).then((result) => {
                if (result.isConfirmed) {
                    this.$swal.fire({
                        title: "Success!",
                        text: "Relevant Record Removed from the List",
                        icon: "success"
                    });
                    this.$store.dispatch('deletePerson', id)
                    this.$store.commit('deletePerson', id)
                }
            });
        },
    },
    head() {
        return {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap-vue@2.21.2/dist/bootstrap-vue.css'
                }
            ],
            script: [
                {
                    src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js',
                    type: 'text/javascript'
                }
            ]
        }
    }
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
            width: 90% !important;
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



    }
}

.app-table {
    width: 90%;
    height: 20vh;
    display: flex;
    justify-content: center;

    .table {
        width: 100% !important;
        border-radius: 1vh;
        background-color: rgb(241, 241, 241);

        td {
            border: none !important;
            background-color: rgb(255, 255, 255);
            font-family: 'Lato', sans-serif;
        }

        th {
            border: none !important;
            font-family: 'Lato', sans-serif;
        }
    }



}
</style>