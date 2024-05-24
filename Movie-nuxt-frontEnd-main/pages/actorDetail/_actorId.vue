<script>
export default {
    data() {
        return {
            actors: '',
            movieId: '',
            filmid: [],
            actorMovies: [],
            actorsPhoto: [],
            selectedActors:{}
        }
    },
    validate(arg) {
        /*    console.log(arg.params) */
        return true
    },
    methods: {
        movieDetail(e) {
            this.$router.push("/movieDetail/" + e.id)
        },
        actorsPhotos(e){
            this.selectedActors = e
            console.log(e)
        }
    },
    async fetch() {
        await this.$axios.post("/actors/" + this.$route.params.actorId).then(res => {
            let data = res.data
            data.forEach(element => {
                this.actors = element
                this.movieId = element.filmid
            });
        })

        await this.$axios.post("/oyuncufilmleri", {
            id: this.$route.params.actorId
        }).then(res => {
            let data = res.data
            data.forEach(element => {
                this.filmid.push(element.filmid)
            })
        })


        await this.$axios.post("/oyuncufilmbilgileri", {
            id: this.filmid
        }).then(res => {
            let data = res.data
            data.forEach(element => {
                this.actorMovies.push(element)
            })
        })

/*         await this.$axios.get("/movie/" + this.movieId).then(res => {
            let data = res.data
            data.forEach(element => {
                this.actorMovies.push(element)
            })
        }) */

        await this.$axios.post("/actorMultiPhoto/" + this.$route.params.actorId).then(res => {
            let data = res.data
            this.actorsPhoto = res.data
        })


        /*      await this.$axios.get("/actors/" + this.$route.params.actorId).then(res => {
                 let data = res.data
                 console.log(data);
                 data.forEach(element => {
                     this.actors = element
                     this.filmid.push(element.filmid)
                 });
         }) */



        /*         await this.$axios.post("/movieTest", {
                    id: this.filmid
                }).then(res => {
                    this.actorMovies = res.data
                    console.log(this.actorMovies)
                    this.filmid = []
                   
                }) */

    },
}
</script>

<template>
    <div class="container-fluid p-0">


        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header bg-dark">
                 
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body bg-dark">
                  <img class="img-fluid" :src="selectedActors.profile" alt="">
                </div>
        
              </div>
            </div>
          </div>
          
        





        <div class="row p-0">
            <div class="col-12">
                <div class="row align-items-center justify-content-center">
                    <div class="col-9 ">
                        <div class="row">
                            <div class="col-3 d-flex justify-content-center align-items-start  p-3 py-3">
                                <img class="img-fluid w-100" :src="actors.profile" alt=""> -->
                            </div>
                            <div class="col-9 py-3  d-flex flex-column">
                                <p style="font-weight:bold;" class="text-danger font-weight-bold">Gerçek Adı <span class="text-white">{{ actors.name
                                }}</span></p>
                                <p style="font-weight:bold;" class="text-danger font-weight-bold">
                                    Görev:
                                    <span class="text-white"> {{ actors.gorev }} </span>
                                </p>

                                <p style="font-weight:bold;" class="text-danger font-weight-bold">Uyruk <span class="text-white">{{
                                    actors.uyruk }}</span></p>
                                <p style="font-weight:bold;" class="text-danger font-weight-bold">Doğum Tarihi <span class="text-white">{{
                                    actors.dogumtarihi }}</span></p>
                                <p style="font-weight:bold;" class="text-danger font-weight-bold">Yaş <span class="text-white"> {{ actors.yas
                                }}</span></p>
                                <div class="col-12 mb-2">
                                    <p style="font-weight:bold;" class="text-danger">Biyografi: <span class="text-white">{{ actors.biyografi }}</span>
                                    </p>
                                </div>
                                <div class="col-12">
                                    <h3 style="font-weight:bold;" class="text-danger ">Oynadığı Filmler</h3>
                                </div>
                                <div class="col-8 d-flex justify-content-around  p-0 mb-4 ">
                                    <div  style="height:150px;width:150px;" class="col-3" v-for="(i, index) in actorMovies">
                                        <img style="height:150px;width:150px; object-fit:cover;" @click="movieDetail(i)" class="img-fluid" :src="i.profile" alt="">
                                    </div>
                                </div>

                                <div class="col-12 mb-3">
                                    <h3 class="text-white ">Fotoğrafları</h3>
                                </div>
                                <div class="col-12 d-flex justify-content-between p-0 ">
                                    <div class="row">
                                        <div style="height:150px;width:150px;" class="col-3" v-for="(i, index) in actorsPhoto">
                                            <img style="height:150px;width:150px; object-fit:cover;" @click="actorsPhotos(i)" data-toggle="modal" data-target="#exampleModalLong"  class="img-fluid" :src="i.profile" alt="">
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style>
.appBg {
    background-color: #11101f;
}

.appİmageContainer {
    height: 200px;
    width: 200px;
}

.images {
    height: 200px;
    width: 200px;
    object-fit: cover;
}
</style>