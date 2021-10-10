<template>
  <div class="w-[322px] h-[250px] relative rounded-lg" @mouseover="hover = true" @mouseleave="hover = false">
    <img
      :src="card.image"
      class="absolute z-0 object-cover w-full h-full rounded-lg"
      :alt="card.imagedesc"
    />

    <div :class="`absolute top-0 z-10 w-full h-full rounded-lg ${hover?'bg-textcolor bg-opacity-60 ':''} transition-all duration-500 ease-in-out`" ></div>

    <div :class="`w-[135px] bottom-28 ${hover ? 'block cursor-pointer':'hidden'} right-24 left-24 transition-all duration-500 ease-in-out z-50 h-[33px] absolute rounded-md bg-white`">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hoverCard",
  props: {
    card: {
      type: Object,
      default: {},
    },
  },
  data(){
    return {
      hover:{
        type:Boolean,
        default:false,
      },
    };
  }
};
</script>
