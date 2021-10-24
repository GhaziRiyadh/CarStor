<template>
  <input
    :class="`px-2 py-1 text-base bg-transparent border rounded-md outline-none ${classes}`"
  />
</template>
<script>
export default {
  props:{
      classes:String,
  },
};
</script>
