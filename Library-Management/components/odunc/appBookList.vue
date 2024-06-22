html
Kodu kopyala
<template>
    <div class="app-table">
        <div class="app-title">
            <h5 style="color: black; font-family: 'Lato', sans-serif; color:#696969" class="ml-2">Registered book list
            </h5>
        </div>
        <div class="app-search mb-2">
            <input v-model="item.searchTerm" placeholder="Search..." type="text" class="form-control w-25 h-75">
        </div>
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
                    
                </tr>
            </thead>
            <tbody style="text-align: center;">
                <tr v-for="i in filteredItem" :key="i.id" @click="selectRow($event)">
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.id }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.Baslik }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.Yazar }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.Yayinevi }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.Kategori }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.Dil }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }">{{ i.Sayfa }}</td>
                    <td :class="{ 'selectedBg': item.selectedId == i.id }"><img
                            style="height: 35px; width: 20px; object-fit: contain;" :src="i.image" alt=""></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        bookList: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            item: {
                selectedId: false,
                book_name: null,
                searchTerm: ''
            }
        }
    },
    computed: {
        filteredItem() {
            if(!this.item.searchTerm){
                return this.bookList
            }
            return this.bookList.filter(book => book.Baslik.toLowerCase().includes(this.item.searchTerm.toLowerCase()))
        }
    },
    methods: {
        selectRow(event) {
            const row = event.currentTarget;
            const cells = row.querySelectorAll('td');
            const cellData = Array.from(cells).map(cell => cell.innerText);
            this.$swal.fire({
                title: "Book Selection Completed",
                text: `Selection book ${cellData[2]}`,
                icon: "success"
            });
            this.item = {
                selectedId: cellData[0],
                book_name: cellData[1]
            }
            this.$emit('bookItem', this.item)

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
        background-color: rgb(176, 255, 202) !important;
    }

    .app-table {
        width: 100%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .table {
            display: block;
            overflow-y: auto;
            height: 1000px !important;
            width: 100%;
            border-radius: 1vh;

            th {
                background-color: rgb(240, 237, 237);
                font-size: 13px;
                color: rgb(90, 89, 89);
                font-family: 'Lato', sans-serif;
                border: none;
            }
            td {
                font-size: 13px;
                color: rgb(54, 54, 54);
                font-family: 'Lato', sans-serif;
                border: none;
                width: calc(100% / 11);
            }

          

           

            &::-webkit-scrollbar {
                width: 8px;
                /* Kaydırma çubuğu genişliği */
            }

            &::-webkit-scrollbar-track {
                background: rgb(240, 240, 240) !important;
                /* Kaydırma çubuğu arka plan rengi */
            }

            &::-webkit-scrollbar-thumb {
                background-color: rgba(215, 215, 250, 0.966);
                /* Kaydırma çubuğu rengi */
                border-radius: 5px;
                /* Kaydırma çubuğu kenar yuvarlama */

            }
        }


    }
}
</style>