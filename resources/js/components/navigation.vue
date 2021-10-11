<template>
    <div class="flex w-full h-[50px] bg-transparent">
        <Link :href="route('home')" class=" flex w-[300px] h-full mr-auto ">
           <img src="/images/logo.png" class="object-cover w-[150px] h-full m-auto" alt="logo">
        </Link>
        <div class="flex w-auto h-full m-auto ">
            <navItem  class="mx-2"/>
            <navItem  class="mx-2"/>
            <navItem  class="mx-2"/>
            <navItem  class="mx-2"/>
            <navItem  class="mx-2"/>
        </div>
        <div class="flex w-[130px] h-full ml-auto ">
            <Icon class="h-full w-[28px] m-auto" icon="ant-design:login-outlined" color="#1c304f" />
        </div>
    </div>
</template>
<script>
import navItem from "@/components/navItem.vue";
import { Icon } from '@iconify/vue';
import { Link } from "@inertiajs/inertia-vue3"
export default {
    name:'nav',
    components:{
        navItem,
        Icon,
        Link
    },
    data(){
        return {
            active:{type:Boolean, default:false },
            activeItem:{type:Boolean, default:false },
        };
    },
    created(){
        this.active = this.activeItem = false;
    },
    methods:{
      hoverFun(action,activeItem){
        this.active = activeItem ? activeItem : action;
      },
      activeFun(cond){
          this.active = cond;
      },
      activeFunction(cond){
          return cond;
      },
    },

}
</script>
