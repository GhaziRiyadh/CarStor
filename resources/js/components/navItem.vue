<template>
  <div class="w-[67px] h-full
   flex-row hover:border-b ">
    <div class="flex items-center h-[48px]">
        <Link
            :href="link"
            :class="` ${active ? 'text-primary ' : 'text-gray-500'} text-lg text-center w-full transition duration-300 ease-in-out m-auto `"
            v-html="text"
        >
        </Link>
    </div>

    <div
      :class="`
        ${active ? ' w-full ' : ' w-0 '}
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
    link: String,
    active: {type:Boolean , default:false},
    text: {
      type: String,
      default: "Home",
    },
  },
};
</script>
