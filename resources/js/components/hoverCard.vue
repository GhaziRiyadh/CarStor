<template>
  <div class="w-[322px] h-[250px] relative rounded-lg" @mouseover="hover = true" @mouseleave="hover = false">
    <img
      :src="card.image"
      class="absolute z-0 object-cover w-full h-full rounded-lg"
      :alt="card.imagedesc"
    />

    <div :class="`absolute top-0 z-10 w-full h-full rounded-lg ${hover?'bg-textcolor bg-opacity-60 ':''} transition-all duration-500 ease-in-out`" ></div>

    <div :class="`w-[135px] flex bottom-28 ${hover ? 'block cursor-pointer':'hidden'} right-24 left-24 transition-all duration-500 ease-in-out z-50 h-[33px] absolute rounded-md bg-white`">
      <Link @mouseover="cartHover = true" @mouseleave="cartHover = false" :href="route('Home')" class="w-1/3 h-full rounded-l-md hover:bg-primary p-[6px]">
        <Icon icon="akar-icons:cart" class="object-cover w-full h-full border-none" :color="`${cartHover?'#fff':'#1c304f'}`" />
      </Link>

      <Link @mouseover="favoriteHover = true" @mouseleave="favoriteHover = false" :href="route('Home')" class="w-1/3 h-full hover:bg-primary p-[6px]">
        <Icon  class="object-cover w-full h-full border-none" icon="ant-design:star-filled" :color="`${favoriteHover?'#fff':'#1c304f'}`" />
      </Link>

      <Link @mouseover="eyeHover = true" @mouseleave="eyeHover = false" :href="route('Home')" class="w-1/3 h-full rounded-r-md hover:bg-primary p-[6px]">
        <Icon class="object-cover w-full h-full border-none"  icon="akar-icons:eye" :color="`${eyeHover?'#fff':'#1c304f'}`" />
      </Link>
    </div>
  </div>
</template>
<script>
import {Link } from "@inertiajs/inertia-vue3";
import {Icon} from "@iconify/vue";
export default {
  name: "hoverCard",
  components:{
    Link,
    Icon
  },
  props: {
    card: {
      type: Object,
      default: {
          image:"/images/hoverCardImage.jpg",
          imageDesc:"hover image",

      },
    },
  },
  data(){
    return {
      hover:{
        type:Boolean,
        default:false,
      },
      cartHover:false,
      favoriteHover:false,
      eyeHover:false,
    };
  },
  created(){
      this.hover = false;
  },
};
</script>
