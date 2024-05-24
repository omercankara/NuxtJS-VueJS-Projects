import { createStore } from 'vuex'

export default createStore({
        state: {
                categories: [
                        { img: require("/src/img/1.jpg"), title: "yeni Ürünler" },
                        { img: require("/src/img/2.jpeg"), title: " Su İçecekler" },
                        { img: require("/src/img/3.jpeg"), title: " Meyve & Sebze " },
                        { img: require("/src/img/4.jpeg"), title: " Fırından" },
                        { img: require("/src/img/5.jpeg"), title: " Temel Gıda" },
                        { img: require("/src/img/6.jpeg"), title: "Atıştırmalık" },
                        { img: require("/src/img/7.jpeg"), title: "Dondurmalar" },
                        { img: require("/src/img/8.jpeg"), title: " Süt Ürünleri" },
                        { img: require("/src/img/9.jpeg"), title: " Kahvaltılık" },
                        { img: require("/src/img/10.jpeg"), title: "Yiyecek" },
                        { img: require("/src/img/11.jpeg"), title: " Fit & Form" },
                        { img: require("/src/img/12.jpeg"), title: " Kişisel Bakım" },
                        { img: require("/src/img/13.jpeg"), title: " Ev Bakım" },
                        { img: require("/src/img/14.jpeg"), title: " Ev & Yaşam" },
                        { img: require("/src/img/15.jpeg"), title: " Teknoloji" },
                        { img: require("/src/img/16.jpeg"), title: "Evcil Hayvan" },
                        { img: require("/src/img/17.jpeg"), title: " Bebek" },
                        { img: require("/src/img/18.jpeg"), title: " Cinsel Sağlık" },
                ],
                Favorites: [
                        { 
                                img: require("/src/img/favoriler/1.jpeg"), 
                                price:"₺3,95",
                                title: "Kuzeyden",
                                property:"1,5 L" 

                        },
                        {          
                                 img: require("/src/img/favoriler/15.jpeg"),
                                  price:"₺7,75",
                                 title: "Kızılay Erzincan",
                                 property:"6 x 200 ml" 
                        },
                        { 
                        
                                img: require("/src/img/favoriler/13.jpeg"),
                                 price:"₺4,40", 
                                title: "Ülker Napoliten",
                                property:"33 g" 
                        },
                        { 
                        
                                 img: require("/src/img/favoriler/2.jpeg"),
                                  price:"₺8,95",
                                  title: "Lays Klasik" ,
                                  property:"96 g" 
                                  },
                        { 
                        
                                 img: require("/src/img/favoriler/3.jpeg"),
                                  price:"₺39,90",
                                  title: "Colgate Optik White" ,
                                  property:"180 g" 
                                  },
                        { 
                                img: require("/src/img/favoriler/4.jpeg"), 
                                 price:"₺10,95",
                                title: "Uno Tost Ekmeği" ,
                                property:"350 g" 
                                },
                        { 
                        
                                img: require("/src/img/favoriler/5.jpeg"), 
                                 price:"₺9,85",
                                title: "Kavrulmuş Siyah Ay Çekirdeği" ,
                                property:"180 g" 
                                },
                        { 
                        
                                img: require("/src/img/favoriler/6.jpeg"), 
                                 price:"₺30,95",
                                title: "Bahçıvan Süzme Peynir" ,
                                property:"350 g" 
                                },
                        {
                                img: require("/src/img/favoriler/8.jpeg"),
                                 price:"₺14,75",
                                title: "Domestos Dağ Esintisi" ,
                                property:"1,5 L" 
                                },
                        {   
                                img: require("/src/img/favoriler/9.jpeg"), 
                                 price:"₺3,95",
                                title: "Elidor Güçlü ve Parlak Şampuan" ,
                                property:"500 g" 
                                },
                        { 
                        
                                img: require("/src/img/favoriler/10.jpeg"), 
                                 price:"₺37,50",
                                title: "Yumoş Extra Orkide Yasemin" ,
                                property:"650 ml" 
                                },
                        {
                        
                                img: require("/src/img/favoriler/11.jpeg"), 
                                 price:"₺55,90",
                                title: "Solo Tuvalet Kağıdı" ,
                                property:"500 g" 
                        },


                ]

        },
        getters: {
                getData(state) {
                        return state.categories
                },
                getFavori(state) {
                        return state.Favorites
                }
        },
        mutations: {
        },
        actions: {
        },
        modules: {
        }
})
