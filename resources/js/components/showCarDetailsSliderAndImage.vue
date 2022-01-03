<template>
    <div class="grid grid-rows-7">
        <div class="row-span-6">
            <img class="object-cover w-full h-full rounded-md" :src="carImage" alt="">
        </div>
        <div class="row-span-1">
            <Carousel dir="rtl" :autoplay="5000" :wrap-around="true" class="relative" mouseDrag="true">
                <Slide v-for="(item,index) in sliderImage" :key="index" >
                    <img :src="item.image" alt="">
                </Slide>
            </Carousel>
        </div>
    </div>
</template>

<script>
import {Carousel,Slide,Navigation,Pagination} from 'vue3-carousel'
import "vue3-carousel/dist/carousel.css";
export default {
    name: "showCarDetailsSliderAndImage",
    components:{Carousel,Slide,Navigation,Pagination},
    props:{
        sliderImage:{
            type:Array,
            default:[
                {
                    image:'',
                }
            ]
        },
        carImage:{
            type:String,
            default:'/images/default.png'
        }

    }
}
</script>

<style scoped>

</style>
