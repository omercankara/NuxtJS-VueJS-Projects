<script>

export default {
    data() {
        return {
            
            movies: '',
            actorId: '',
            fragman: [],
            actors: [],
            movieActorsTable: []
        }
    },
    methods: {
        actorDetail(e) {
            this.actorId = e.id
            console.log(e)
            this.$router.push("/actorDetail/" + this.actorId)
        }
    },


    async fetch() {

        //Film bilgleri
        await this.$axios.get("/movie/" + this.$route.params.movieId).then(res => {
            let data = res.data
            data.forEach(element => {
                this.movies = element
            });
        })
        await this.$axios.get("/fragman/" + this.$route.params.movieId).then(res => {
            this.fragman = res.data
        })



        await this.$axios.get("/movieActors/" + this.$route.params.movieId).then(res => {
            this.actors = res.data
        })

        await this.$axios.get("/movieActorsTable").then(res => {
            let data = res.data
            data.forEach(element => {
                console.log("movieActorsTable" + element.filmid);
                if (element.filmid == this.$route.params.movieId) {
                    this.movieActorsTable.push(element.idoyuncular)
                } 
            });

        })

        await this.$axios.post("/movieActorsLoad", {
            id: this.movieActorsTable
        }).then(res => {
            let data = res.data
            data.forEach(e => {
                console.log(e.filmid + "Film id")
                this.actors.push(e)
                console.log(e);
            })
        }).catch(err => {
            console.log(err);
        }) 




    },
}
</script>



<template>
    <div class="container-fluid p-0 appMenuBg">
        <div class="row p-0">
            <div class="col-12">
                <div class="row align-items-center justify-content-center">
                    <div class="col-9">
                        <div class="row">

                            <div class="col-4 py-3">
                                <img class="img-fluid" :src="movies.profile" alt="">
                            </div>
                            <div class="col-6 py-3  d-flex flex-column">
                                <p class="text-white font-weight-bodl">Yayın Tarihi:{{ movies.vizyontarih }}</p>
                                <p class="text-white font-weight-bodl">Yönetmen {{ movies.yonetmen }}</p>
                                <p class="text-white font-weight-bodl">Senarist {{ movies.senarist }}</p>

                                <div class="col-12">
                                    <button class="btn btn-danger w-50">Watch Trailer</button>
                                </div>
                                <div class="col-12 py-2">
                                    <p class="text-white">{{ movies.ozet }}</p>
                                </div>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-12  ">

                                <h3 class="text-white">Trailers</h3>

                                <div class="col-10 p-0 d-flex justify-content-between">
                                    <div v-for="(i, index) in fragman" :key="index" class="col-2  d-flex p-1"
                                        v-html="i.name">
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row py-3">
                            <h3 class="text-white">Actors</h3>
                            <div class="col-3 appİmageContainer" v-for="(i, index) in actors" :key="index">
                                <img @click="actorDetail(i)" class="img-fluid images" :src="i.profile" alt="">
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
    background-color: #333151;
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