<template>
    <div class="w-full h-auto">
        <navigation :user="user" classes="sticky top-0 bg-white" :Auth="Auth"/>
        <slot/>
        <Footer/>
    </div>
</template>
<script>
import navigation from "@/components/navigation.vue";
import Footer from "@/components/footer.vue";
export default {
    components: { navigation,Footer },
    props:{
        classes:String,
        Auth:Boolean,
        user:{
            type:Object,
            default:{},
        },
    },

}
</script>
