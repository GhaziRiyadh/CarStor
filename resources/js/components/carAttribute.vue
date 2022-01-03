<template>
    <div class="grid grid-cols-3 gap-1">
        <img :src="image" :alt="title" class="col-span-1">
        <div class="col-span-2 grid grid-rows-3">
            <h1 class="row-span-2"></h1>
            <p class="row-span-1"></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "carAttribute"
}
</script>

<style scoped>

</style>
