<template>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-12 ">
                <div class="row justify-content-center py-md-2  appMenuBg2">
                    <div class="col-12 p-0  d-flex justify-content-between">

                        <div class="col-5  d-flex  justify-content-center  align-items-center">
                            <nuxt-link to="/" tag="h1" class="text-white text-decoration-none">Movies</nuxt-link>
                            
                            <div class="col-10 p-0 d-flex justify-content-around">
                                <nuxt-link to="/" tag="a" class="text-white text-decoration-none">Film</nuxt-link>
                                <nuxt-link to="/" tag="a" class="text-white text-decoration-none">Actors</nuxt-link>
                                <nuxt-link to="/" tag="a" class="text-white text-decoration-none">Home</nuxt-link>
                                <nuxt-link to="/" tag="a" class="text-white text-decoration-none">Actors</nuxt-link>
                                <nuxt-link to="/" tag="a" class="text-white text-decoration-none">Actors</nuxt-link>
                                <nuxt-link to="/" tag="a" class="text-white text-decoration-none">Actors</nuxt-link>
                            </div>
                        </div>

                        <div
                            class="col-2  position-relative d-flex flex-column  justify-content-end align-items-center">
                            <div class="col-12">
                                <input style="background-color:black; border:none;" placeholder="Bul" type="text" class="form-control" v-model="search">
                            </div>



                            <div class="col-12 bg-dark position-absolute" v-if="isVisible" style="z-index:999; top: 63px;">
                                <ul>
                                    <li @click="routerTo(veri)" class="text-white  d-flex justify-content-start align-items-center mb-3 ml-2" v-for="(veri, index) in movieFiltered" :key="index">
                                        <img style="width:60px !important;" alt="" class="img-fluid" :src="veri.profile" >
                                        <p class="ml-3" > {{ veri.filmisim }}</p>
                                    </li>
                                </ul>

                            </div>
                        </div>



                    </div>

                </div>

                <nuxt />
            </div>
        </div>
    </div>
</template>


<style>
.appMenuBg2 {
    background-color: #0c0133;
}
.appMenuBg {
    background-color: #011035;
}
body{
    padding: 0px !important;
}
</style>


<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['getMovies']),

        movieFiltered() {
            return this.movies.filter((element) => {
                const searchData = element.filmisim.toLowerCase().includes(this.search.toLowerCase())
                return searchData
            })
        }
    },
    data() {
        return {
            search: '',
            movies: [],
            isVisible: null,
        }
    },
    mounted() {
        this.movies = this.getMovies
    },

    watch: {
        search(value) {
            if (value.length > 0) {
                this.isVisible = true
                setTimeout(()=> {
                    this.search=''
                },4000)
            } else {
                this.isVisible = false
            }
            console.log(this.isVisible)
            console.log(value)
        }
    },

    methods: {
        routerTo(e){
            this.$router.push("/movieDetail/" + e.id)
        }
    },


}
</script>