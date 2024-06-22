<template>
    <div class="app-form">
        <div class="app-info">
            <div class="app-card-box">
                <div class="app-person-list" v-for="i in itemLength" :key="i.title" :style="i.style">
                    <div class="img-content">
                        <i :class=i.icon></i>
                    </div>
                    <div class="info">
                        <p class="number">{{ i.number }}</p>
                        <p class="totalBook">{{ i.title }}</p>
                    </div>
                </div>
            </div>
            <div class="app-settings">
                <div class="app-button">
                    <button @click="createData()" class="btn btn">Create +</button>
                </div>
            </div>
        </div>

        <div class="app-table-container">
            <div class="app-person-table">
                <appPersonTable @personalItem="personalHandler" :personList="filteredPerson" />
            </div>
            <div class="app-book-table">
                <appBookTable @bookItem="bookHandler" :bookList="filteredBook" />
            </div>
        </div>
        <hr style="width:90%">
        <div class="app-all-list">
            <appList :bookList="filteredBook" />
        </div>
    </div>
</template>

<script>
import appPersonTable from "../../components/odunc/appPersonList"
import appBookTable from "../../components/odunc/appBookList"
import appList from "../../components/odunc/appList"

export default {
    data() {
        return {
            infoList: [],
            bookList: [],
            personList: [],
            bookTerm: '',
            personTerm: '',
            showModal: false,
            bookPerson: {
                bookId: null,
                book_name: null,
                personId: null,
                person_name: null,
                person_tc: null,
            }
        }
    },
    mounted() {
    },
    computed: {
        itemLength() {
            let list = [
                {
                    title: "Total Book",
                    number: this.$store.getters.getBookList.length,
                    style: 'background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);',
                    icon: 'bx bx-book-content',
                },
                {
                    title: "Total Personal",
                    number: this.$store.getters.getPersonList.length,
                    style: 'background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);',
                    icon: 'bx bx-user'
                },
                {
                    title: "Total Transfer",
                    number: this.$store.getters.getPersonBook.length,
                    style: 'background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);',
                    icon: 'bx bx-transfer'
                }
            ]
            return list
        },
        filteredBook() {
            let bookList = this.$store.getters.getBookList
            let item = bookList.filter(item => item.Baslik.toLowerCase().includes(this.bookTerm.toLowerCase()));
            if (item) {
                return item
            }
            return bookList
        },
        filteredPerson() {
            let personList = this.$store.getters.getPersonList
            let item = personList.filter(item => item.tc.toLowerCase().includes(this.personTerm.toLowerCase()));
            if (item) {
                return item
            }
            return personList
        },
    },
    methods: {
        bookHandler(item) {
            this.bookPerson = {
                ...this.bookPerson,
                bookId: item.selectedId,
                book_name: item.book_name
            }
        },
        personalHandler(item) {
            this.bookPerson = {
                ...this.bookPerson,
                personId: item.person_id,
                person_name: item.person_name,
                person_tc: item.person_tc
            }
        },
        createData() {
            this.$store.dispatch('createPersonBook', this.bookPerson)
            this.$swal.fire({
                title: "Success!",
                text: "Transfer Transaction Completed",
                icon: "success"
            });
        }
    },
    components: {
        appPersonTable,
        appBookTable,
        appList
    },
    async fetch({ store }) {
        await store.dispatch('bookList');
        await store.dispatch('personList');
        await store.dispatch('sendBookList')
    }
}
</script>


<style scoped>
.app-form {
    display: flex;
    height: 120vh;
    flex-direction: column;
    align-items: center;
    width: 100%;


    .app-info {
        width: 90%;
        height: 10vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2vh;

        .app-card-box {
            width: 48%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 10px 0px 10px 10px;

            .app-person-list {
                width: 30%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                box-shadow: 0px 3px 4px 0px rgb(204, 204, 204);
                border-radius: 1vh;
                color: black;
                font-weight: bold;
                font-family: 'Lato', sans-serif;
                font-size: 14px;

                .img-content {
                    width: 40%;
                    height: 40%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .bx {
                        font-size: 25px;
                        color: black;
                    }
                }

                .info {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    height: 50%;
                    width: 45%;

                    .number {
                        font-weight: bold;
                        margin: 0px;
                    }

                    .totalBook {
                        margin: 0px;
                    }
                }
            }
        }

        .app-settings {
            width: 50%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .app-button {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                width: 20%;

                button {
                    height: 100%;
                    width: 80%;
                    margin: 0px;
                    padding: 0px;
                    background-color: #64B5F6;
                    color: white;
                }
            }
        }
    }

    .app-table-container {
        width: 90%;
        height: 60vh;
        padding: 0px;
        display: flex;

        .app-person-table {
            width: 100%;
            display: flex;
            justify-content: center;
            overflow-y: auto;
            height: 100%;

        }

        .app-book-table {
            width: 100%;
            display: flex;
            justify-content: center;
            overflow-y: auto;
            height: 100%;
        }
    }

    .app-all-list {
        width: 90%;
        height: 30vh;
    }


}
</style>