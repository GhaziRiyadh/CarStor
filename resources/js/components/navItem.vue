<template>
  <div
    class="w-[67px] h-full flex-row hover:border-b"
    @mouseover="hoverFun(true)"
    @mouseleave="hoverFun(false)"
  >
    <div class="flex items-center h-[48px]">
      <Link
        :href="link"
        :class="` ${
          actives ? 'text-primary ' : 'text-gray-500'
        } text-lg text-center w-full transition duration-300 ease-in-out m-auto `"
        v-html="text"
      >
      </Link>
    </div>

    <div
      :class="`
        ${actives ? ' w-full ' : ' w-0 '}
        transition-all
        duration-700
        ease-linear
        h-0.5
        bg-primary
      `"
    ></div>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
  components: { Link },
  props: {
    active: {type:Boolean },
    link: String,
    text: {
      type: String,
      default: "Home",
    },
  },
  data(){
      return {
        actives:false ,
      };
  },
  created(){
      this.actives = this.active ? this.active : false;
  },
  methods:{
    hoverFun(type){
      this.active ? this.actives = true : this.actives = type;
    },
  }
};
</script>
