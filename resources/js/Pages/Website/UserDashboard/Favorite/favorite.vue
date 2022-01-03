<template>
    <app-layout :Auth="Auth">
        <!-- cards -->
        <section class="flex items-center justify-center w-full h-auto mt-[24px]">
            <div class="w-[80vw] h-auto grid lg:grid-cols-3 grid-cols-1 gap-6">
                <CFcard buttonText="add to cart" />
                <CFcard buttonText="add to cart" />
                <CFcard buttonText="add to cart" />
                <CFcard buttonText="add to cart" />
                <CFcard buttonText="add to cart" />
                <CFcard buttonText="add to cart" />
            </div>
        </section>

        <!-- pagination -->
        <section class="flex items-center justify-center w-full h-36">
            <pagination class="w-[550px] "/>
        </section>
    </app-layout>
</template>

<script>
import pagination from "@/components/pagination.vue"
import CFcard from "@/components/card.vue"
import AppLayout from '@/Layouts/AppLayout.vue'
export default {
    name:"shop",
    components:{
        pagination,
        CFcard,
        AppLayout,
    },
    props:{
        Auth:Boolean,
    },
}
</script>
