<template>
  <div class="w-screen h-screen">
    <div v-if="notfirst" class="h-full"></div>
    <div v-for="(item, index) in items" :key="index" class="h-full lg:w-4/6 rounded-xl">
      <img
        class="object-cover w-full h-full rounded-xl "
        :src="item.image"
        :alt="item.disc"
      />
    </div>
    <div v-if="notlast" class="h-full"></div>
  </div>
</template>

<script>
export default {};
</script>
