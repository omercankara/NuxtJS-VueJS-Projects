<template>
    <div class="card border p-2">
            <div class="d-flex justify-content-end">
                <button class="btn btn-primary btn-sm" @click="$router.push({name:'newBookMark'})">+ Yeni Ekle</button>
        </div>
                <table class="table table-striped table-hover">
                        <thead>
                                <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Başlık</th>
                                        <th scope="col">Url</th>
                                        <th scope="col">Aciklama</th>

                                        <th scope="col">Sil</th>
                                </tr>
                        </thead>
                        <tbody>
                                <tr v-for="(veriler, index) in bookMarksList" :key="index">
                                        <th scope="row">{{veriler.id}}</th>
                                        <td>{{veriler.title}}</td>
                                        <td><a :href="veriler.url" target="">{{veriler.url}}</a></td>
                                        <td>{{veriler.description}}</td>
                                        <td>
                                                <button
                                                        class="
                                                                btn
                                                                btn-sm
                                                                btn-danger
                                                        "
                                                        @click="deleteItem(veriler)"
                                                >
                                                        Sil
                                                </button>
                                        </td>
                                </tr>
                        </tbody>
                </table>
        
    </div>
</template>


<script>
export default {
        data(){
                return{
                        bookMarksList:[]
                }
        },
        created(){
                this.$appAxios.get("/bookMarks").then(bookMarksList=>{
                        this.bookMarksList=bookMarksList.data
                        console.log(bookMarksList)
                }) 
        },
        methods:{
                   deleteItem(veriler){
                        this.$appAxios.delete(`/bookMarks/${veriler.id}`).then(deleteResponse=>{
                          if(deleteResponse.status ==200){
                                this.bookMarksList = this.bookMarksList.filter(b => b.id != veriler.id) //tıklanan eleman haricileri tekrardan getir
                          }
                        })
                }
        }
}
</script>

