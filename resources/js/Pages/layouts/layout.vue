<template>
    <div class="w-screen h-auto">
        <navigation />
        <slot/>
        <Footer/>
    </div>
</template>
<script>
import navigation from "@/components/navigation.vue";
import Footer from "@/components/footer.vue";
export default {
  components: { navigation,Footer },
    componenets:{
        navigation,
    },
    setup() {

    },
}
</script>
