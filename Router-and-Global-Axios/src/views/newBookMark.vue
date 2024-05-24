<template>
        <div class="form-area card border p-2">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label"
                                >Başlık</label
                        >
                        <input
                                type="text"
                                class="form-control"
                                id="title"
                                placeholder="Developer@Omercankara.com"
                                v-model="userData.title"
                        />
                </div>
                <div class="mb-3">
                        <label
                                for="url"
                                class="form-label"
                                >Url </label
                        >
                      <input
                                type="teext"
                                class="form-control"
                                id="url"
                                placeholder="https://"
                                v-model="userData.url"
                        />
                        
                </div>
                           <div class="mb-3">
                        <label
                                for="aciklama"
                                class="form-label"
                                >Açıklama </label
                        >
                          <textarea v-model="userData.description"  placeholder="Açıklama" class="form-control" id="aciklama" rows="3"></textarea>
                </div>
                <div class="d-flex justify-content-end align-items-center">
                         <button @click="onSave()" class="btn btn-primary btn-sm me-2">Kaydet</button>
                        <button  @click="$router.push({name:'home'})" class="btn btn-secondary btn-sm ">İptal</button>
                </div>
        </div>
</template>



<script>

export default {
        data(){
                return{
                        userData:{
                                title:null,
                                url:null,
                                description:null
                        }
                }
        },
            methods:{
                        onSave(){
                                console.log(this.userData)
                                this.$appAxios.post("/bookMarks",this.userData).then(saveResponse =>{
                                        console.log("Kayit response",saveResponse)
                                        this.resetData();
                                })      
                        },
                        resetData(){
                                        Object.keys(this.userData).forEach(key => (this.userData[key]=null)) ; //inputların içini temizle
                        },
                     
                        }
                }

</script>
