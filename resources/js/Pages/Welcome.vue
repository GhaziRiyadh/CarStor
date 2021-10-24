<template>
    <Head title="Welcome" />
    <div>
        <!-- Page header -->
        <div class="relative w-full mb-[24px]">
            <navigation classes="absolute " :userImage="userImage" :userName="userName" :Auth="Auth"  />
            <div class="relative w-full h-screen ">
                <div class="absolute z-40 w-full h-full bg-black bg-opacity-70"></div>
                <div class="absolute z-50 flex w-full h-full">
                    <div class="flex items-center w-auto h-auto m-auto border border-gray-300 rounded-md">
                        <Input placeholder="Search" classes=" w-[300px] focus:w-[400px] text-white transition-all duration-500 ease-in-out border-none focus:border-none"/>
                        <Link class="h-[24px] w-[24px] m-1 flex items-center justify-center rounded-full bg-opacity-75 hover:bg-primary">
                            <Icon icon="clarity:search-line" color="#eee"/>
                        </Link>
                    </div>
                </div>
                <img class="object-cover w-full h-full" src="/images/homeHead.jpg" alt="">
            </div>
        </div>

        <!-- slider -->
        <div class="w-screen mb-[24px]">

        </div>

        <!-- show some of cars -->
        <div class="w-full h-auto mb-[24px] ">
            <!-- tabs -->
            <header class="h-[80px] w-full flex items-center justify-center">
                <tabs :tabsFun="tabsFun" :currerntTab="currentTabItem"/>
            </header>

            <!-- cards -->
            <section class="flex items-center justify-center w-full h-auto mt-[24px]">
                <div class="w-[80vw] h-auto grid lg:grid-cols-3 grid-cols-1 gap-3">
                    <carCard />
                    <carCard />
                    <carCard />
                    <carCard />
                    <carCard />
                    <carCard />
                </div>
            </section>

        </div>

        <!-- Ours places -->
        <section class="w-full h-[80vh] mb-[24px]">
            <!-- title -->
            <header class="flex items-center justify-center w-full h-[50px] my-[18px] ">
                <h1 class="text-3xl font-extrabold text-center underline text-primary">Our Placeses</h1>
            </header>

            <!-- maps -->
            <GMapMap
                class="h-[60vh] bg-gray-300 w-full"
                :center="{ lat: 51.093048, lng: 6.84212 }"
                :zoom="7"
                map-type-id="terrain"
            >
                <GMapMarker :position="{lat: 51.093048, lng: 6.842120}"/>
            </GMapMap>
        </section>

        <!-- show smoll card -->
        <section class="flex items-center justify-center w-full h-auto mb-[50px]" >
            <div class="w-[80vw] h-auto grid lg:grid-cols-3 grid-cols-1 gap-3">
                <hoverCard/>
                <hoverCard/>
                <hoverCard/>
                <hoverCard/>
                <hoverCard/>
                <hoverCard/>
                <hoverCard/>
                <hoverCard/>
                <hoverCard/>
            </div>
        </section>

        <!-- footer -->
        <Footer/>

    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import Input from "@/components/input.vue";
    import Footer from "@/components/footer.vue";
    import tabs from "@/components/tabs.vue";
    import hoverCard from "@/components/hoverCard.vue";
    import carCard from "@/components/carShowCard.vue";
    import {Icon} from "@iconify/vue";
    import Navigation from '../components/navigation.vue';

    export default defineComponent({
        components: {
            Head,
            Link,
            Input,
            Icon,
            Footer,
            tabs,
            carCard,
            hoverCard,
            Navigation,
        },
        props: {
            canLogin: Boolean,
            canRegister: Boolean,
            laravelVersion: String,
            phpVersion: String,
            Auth:Boolean,
            userImage:{
                type:String,
                default:'/images/person.jpg',
            },
            userName:{
                type:String,
                default:'Itsmy',
            },
        },
        data(){
            return{
                currentTabItem:{
                    type:String,
                },
            };
        },
        created(){
            this.currentTabItem = "Toyota";
        },
        methods:{
            tabsFun(item){
                this.currentTabItem = item;
            }
        }
    })
</script>


