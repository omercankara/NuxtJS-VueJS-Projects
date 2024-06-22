<template>
    <div class="app-table ">
        <div class="app-title">
            <h5 style="color: black; font-family: 'Lato', sans-serif; color:#696969">Registered member list
            </h5>
        </div>
        <div class="app-search mb-2">
            <input v-model="searchTerm" placeholder="Search..." type="text" class="form-control w-25 h-75">
        </div>
        <table class="table ">
            <thead style="text-align: center;">
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Tc no</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Address</th>
                </tr>
            </thead>
            <tbody style="text-align: center;">
                <tr v-for="i in filteredItem" @click="selectRow($event)">
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.id }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.isim }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.soyisim }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.tc }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.telefon }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.cinsiyet }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.adres }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>


<script>
export default {
    data() {
        return {
            item: {},
            searchTerm: ''
        }
    },
    props: {
        personList: Array,
    },
   computed:{
    filteredItem() {
        if (!this.searchTerm) {
            return this.personList
        }
        return this.personList.filter(person => person.tc.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }
   },
    methods: {
        selectRow(event) {
            const row = event.currentTarget;
            const cells = row.querySelectorAll('td');
            const cellData = Array.from(cells).map(cell => cell.innerText);
            this.$swal.fire({
                title: "Member Selection Completed",
                text: `Selection Member ${cellData[2]}`,
                icon: "success"
            });
            this.item = {
                selectedId: cellData[0],
                person_id: cellData[0],
                person_name: cellData[1],
                person_tc: cellData[3]
            }
            this.$emit('personalItem', this.item)
        }
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
    .selectedBg {
        background-color: rgb(164, 211, 250) !important;
    }

    .app-table {
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .app-search {
            width: 100%;

            height: 10%;
            display: flex;
            align-items: center;
        }

        .table {
            display: block;
            overflow-y: auto;
            height: 1000px !important;
            width: 100%;
            border-radius: 1vh;

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
                width: calc(100% / 11);
            }

            &::-webkit-scrollbar {
                width: 6px;
                /* Kaydırma çubuğu genişliği */
            }

            &::-webkit-scrollbar-track {
                background: rgb(240, 240, 240) !important;
                /* Kaydırma çubuğu arka plan rengi */
            }

            &::-webkit-scrollbar-thumb {
                background-color: rgba(9, 9, 194, 0.178);
                /* Kaydırma çubuğu rengi */
                border-radius: 5px;
                /* Kaydırma çubuğu kenar yuvarlama */

            }
        }


    }
}
</style>