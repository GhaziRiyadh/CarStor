<template>
    <div class="flex items-center justify-center w-full h-full">
        <div class="lg:flex flex-row w-full items-center justify-center m-20">
            <show-car-details-slider-and-image :slider-image="images" :carImage="images[0].image" />
            <section class="w-full mx-10">
                <div class="w-full my-5">
                    <h1 class="w-full capitalize text-left my-3 text-3xl text-indigo-900 rtl:text-right">{{carName}}</h1>
                    <p class=" text-justify text-gray-800">
                        {{carDesc}}
                    </p>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <car-attribute v-for="(item , index) in CarAttributes" :key="index" :image="index" :title="index" :value="item"  />
                </div>
                <div class="w-full grid grid-cols-2 gap-2 my-3 ">
                    <div class="flex items-center justify-center ">
                        <p class="text-2xl text-center text-textcolor flex ">
                            <img src="/images/price.png" class="w-10 " alt=""> {{cost}}
                        </p>
                    </div>
                    <div @click="addToCartFun" :class="` cursor-pointer border hover:border-none bg-white text-textcolor flex p-[4px] my-0.5 items-center justify-between  hover:bg-primary hover:text-white h-10 w-full rounded-md `">
                        <p :class="`w-full px-2 text-center hover:font-bold`">
                            add to cart
                        </p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import ShowCarDetailsSliderAndImage from "@/components/showCarDetailsSliderAndImage";
import CarAttribute from './carAttribute.vue';
export default {
    name: "showCarDetails",
    components: {ShowCarDetailsSliderAndImage,CarAttribute},
    props:{
        images:{
            type:Array,
            default:[
                {
                    image:'/images/backProfile.jpg'
                },
                {
                    image:'/images/backProfile.jpg'
                },
                {
                    image:'/images/backProfile.jpg'
                },
                {
                    image:'/images/backProfile.jpg'
                },
                {
                    image:'/images/backProfile.jpg'
                },
                {
                    image:'/images/backProfile.jpg'
                }
            ]
        },
        CarAttributes:{
            type:Array,
            default:[
                {
                    image:'/images/backProfile.jpg',
                    title:'root',
                    value:'20p/s'
                },{
                    image:'/images/backProfile.jpg',
                    title:'root',
                    value:'20p/s'
                },{
                    image:'/images/backProfile.jpg',
                    title:'root',
                    value:'20p/s'
                },{
                    image:'/images/backProfile.jpg',
                    title:'root',
                    value:'20p/s'
                },{
                    image:'/images/backProfile.jpg',
                    title:'root',
                    value:'20p/s'
                },{
                    image:'/images/backProfile.jpg',
                    title:'root',
                    value:'20p/s'
                },
            ]
        },
        carName:{
            type:String,
            default:'Morcedce'
        },
        carDesc:{
            type:String,
            default:''
        },
        cost:{
            type:String ,
            default:'$1000'
        },
        addToCartFun:{
            type:Function,
            default:v => ''
        },
    }
}
</script>
