<template>
    <div class="h-[470px] w-full bg-textcolor flex">
        <section class="flex w-auto h-auto m-auto">
            <section class="border-gray-300 lg:border-r w-[590px] h-[316px]">

            </section>
            <section  class="border-gray-300 lg:border-l  w-[590px] h-[316px]">
                <Input placeholder="Add your email" />
            </section>
        </section>
    </div>
</template>
<script>
import Input from "@/components/input.vue";
export default {
    name:"Footer",
    components:{Input}
}
</script>
