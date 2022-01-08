<template>
    <section>
        <!-- cards -->
        <section class="flex items-center justify-center w-full h-auto mt-[24px]">
            <div class="w-[80vw] h-auto grid lg:grid-cols-3 grid-cols-1 gap-6">
                <CFcard :done='true' />
                <CFcard :done='true' />
                <CFcard :done='true' />
                <CFcard :done='true' />
            </div>
        </section>

        <!-- pagination -->
        <section class="flex items-center justify-center w-full h-36">
            <pagination class="w-[550px] "/>
        </section>
    </section>
</template>

<script>
import pagination from "@/components/pagination.vue"
import CFcard from "@/components/card.vue"
export default {
    name:"shop",
    components:{
        pagination,
        CFcard,
    },
}
</script>
