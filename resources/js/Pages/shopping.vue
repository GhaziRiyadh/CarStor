<template>
    <app-layout :Auth="Auth">
            <!-- filters -->
            <header class="h-[50vh] w-full flex items-center justify-center" >
                <header class="flex items-center justify-center w-[80vw] h-1/2">
                    <!-- for model -->
                    <div class="w-1/3 h-1/2 ">
                        <selectInput/>
                    </div>

                    <!-- for color -->
                    <div class="w-1/3 h-1/2 ">
                        <selectInput/>
                    </div>

                    <!-- for price -->
                    <div class="w-1/3 h-1/2 ">
                        <pricefilter />
                    </div>

                </header>
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

            <!-- pagination -->
            <section class="flex items-center justify-center w-full h-36">
                <pagination class="w-[550px] "/>
            </section>
    </app-layout>
</template>

<script>
import carShowCard from "@/components/carShowCard.vue"
import pagination from "@/components/pagination.vue"
import carCard from "@/components/carShowCard.vue"
import selectInput from "@/components/selectfelter.vue"
import pricefilter from "@/components/filterprice.vue"
import AppLayout from '../Layouts/AppLayout.vue'
export default {
    name:"shop",
    components:{
        AppLayout,
        carShowCard,
        pagination,
        carCard,
        pricefilter,
        selectInput,
    },
    props:{
        Auth:Boolean,
    },
}
</script>
