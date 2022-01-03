<template>
    <div class="grid w-full grid-rows-2 gap-1 lg:grid-cols-2">
        <section>

        </section>
        <show-car-details-slider-and-image :slider-image="images" />
    </div>
</template>

<script>
import ShowCarDetailsSliderAndImage from "@/components/showCarDetailsSliderAndImage";
export default {
    name: "showCarDetails",
    components: {ShowCarDetailsSliderAndImage},
    props:{
        images:{
            type:Array,
            default:[
                {
                    image:''
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
