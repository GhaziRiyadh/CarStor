<template>
    <section class="w-full h-screen">
        <div v-for="(image,index) in images" :key="index">
            <img class="object-cover w-full h-full" :src="image.src" :alt="image.alt" >
        </div>
    </section>
</template>

<script>
export default {

}
</script>

