<template>
    <div class="grid grid-rows-7 w-full gap-2 mx-10">
        <div class="row-span-6 ">
            <img class="object-cover rounded-lg w-full h-[442px]" :src="carImage" alt="">
        </div>
        <Carousel dir="ltr" :settings="settings" :breakpoints="breakpoints" :autoplay="5000" :wrap-around="true" class="row-span-1" mouseDrag="true">
            <Slide v-for="(item,index) in sliderImage" :key="index" >
                <img class="w-32 object-contain rounded-md" :src="item.image" alt="">
            </Slide>
        </Carousel>
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
            default:'/images/backProfile.jpg'
        }

    },
    data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start',
      },
    },
  }),
}
</script>

<style scoped>

</style>
