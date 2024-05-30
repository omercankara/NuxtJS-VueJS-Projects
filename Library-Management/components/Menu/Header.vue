<script>
export default {
    data() {
        return {
            selectedButton: '',
            mainArray: [
                { name: 'Kitap İşlemleri', icon: 'bx bx-book-open', items: ["Kitap islemleri", "Kitap Listesi"] },
                { name: 'Kategori İşlemleri', icon: 'bx bxs-objects-horizontal-left', items: ["Kategori Kayit", "Kategori Liste"] },
                { name: 'Üye İşlemleri', icon: 'bx bx-user', items: ["üye Kayıt", "Üye Listesi"] },
                { name: 'Ödünç İşlemleri', icon: 'bx bx-transfer', items: [, "Ödün verme", "Ödünç Listesi"] },
                { name: 'Genel Rapor', icon: 'bx bxs-objects-vertical-bottom', items: ["Genel Bilgi"] },
            ],
        }
    },
    methods: {
        iconButton(e) {
            //console.log(e.title)
            this.selectedButton = e.name
        },
        selectMenu(item) {
            let selectMenu = item.trim().replace(/\s+/g, '');
           // console.log(selectMenu)
            if (selectMenu != null) { // item'in tanımlı olduğundan emin ol
                console.log(selectMenu);
                this.$router.push(`/${selectMenu}`);
                // this.$router.push("/" + selectMenu)
            } else {
                console.error('Omercan');
            }
        }


    }
}
</script>
<!--  -->
<template>
    <div class="container">
        <div class="item">
            <div class="book-management" v-for="(i, index) in mainArray" :key="index">
                <div class="icon-content">
                    <i @click="iconButton(i)" :class="i.icon"></i>
                </div>
                <div class="app-choose-content" :class="{ 'opacity-animation': selectedButton === i.name }">
                    <p v-for="(item, itemIndex) in i.items" :key="itemIndex" v-if="selectedButton === i.name" @click="selectMenu(item)">
                        {{ item }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.container {
    width: 100%;
    height: 100vh;  
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: rgb(57, 2, 128);

    .item {
        width: 100%;
        height: 70%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

    }

    .book-management {
        width: 100%;
        height: 50%;
        // background-color: blue;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 10px;


        .icon-content {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 40%;

        }

        .app-choose-content {
            height: 1px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }





        i {
            font-size: 25px;
            color: white;
        }
    }




    .opacity-animation {
        height: 100px !important;
        margin-top: 10px;
        padding: 0px 0px 0px 0px;
        width: 100%;
        background-color: gray;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: space-around;
        transition: height 0.5s ease;
    }

    p {
        color: white;
        padding: 0px;
        cursor: pointer;
        font-size: 15px;
        white-space: nowrap;
        text-overflow: ellipsis;

    }
}
</style>