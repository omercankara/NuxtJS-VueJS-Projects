<script>
import { mapGetters } from "vuex"

export default {
    data() {
        return {
            movie: '',
            movieId: null
        }
    },
    computed: {
        ...mapGetters(['getMovies'])
    },
    methods: {
        movieDetail(e) {
            this.movieId = e.id
            this.$router.push("/movieDetail/" + this.movieId)
        }
    },


    async fetch() {
        await this.$axios.get("/movie").then(res => {
            this.$store.commit("setData", res.data)
        })

    },

    mounted() {
        this.movie = this.getMovies
    }


}
</script>

<template>
    <!--  <div class="row">
        <div class="col-12">
            <div class="row justify-content-center ">
                <div class="col-8 col-xxl-12 py-3 d-flex">
                    <div class="row bg-success ">
                        <div class="col-12 col-md-12 p-0 col-lg-3  col-xl-3 col-xxl-12  justify-content-center "
                            v-for="(i, index) in movie">

                            <div class="col-12 col-md-12 bg-danger movie-image-container ">
                                <img @click="movieDetail(i)" class="movie-image img-fluid" :src="i.profile" alt="">
                            </div>

                            <div class="col-12 col-md-9 text-center movie-name pb-5">
                                <strong class="text-white"> {{ i.filmisim }}</strong>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
  </div> -->

    <div class="row">
        <div class="col-12   d-flex">
            <div class="row">
                <div v-for="(i, index) in movie" class="col-md-2 col-xxl-1 py-md-3  d-flex flex-column">
                <img @click="movieDetail(i)" class="movie-image img-fluid" :src="i.profile" alt="">
                <strong class="text-white"> {{ i.filmisim }}</strong>
            </div>
            </div>
        </div>
    </div>
</template>

