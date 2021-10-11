<template>
    <div class="h-[50px] w-auto flex bg-white">
        <div    :class="`flex items-center justify-center h-full w-[70px] m-auto ${currentpage <= 1?'':'cursor-pointer'}`"
                @mouseover="hoverFun('over')"
                @mouseleave="hoverFun('leave')"
                @click=" currentpage > 1 && paginationFun('prev')"
        >
            <div class="flex items-center justify-center m-auto ">
                <Icon icon="fluent:ios-arrow-ltr-24-regular" :color="arrowColor(currentpage <= 1)"  />
                <Icon icon="fluent:ios-arrow-ltr-24-regular" :color="arrowColor(currentpage <= 1)"  />
            </div>
        </div>

        <div v-for="page in totalpagesFun(totalpages)" :key="page"
            :class="`h-full w-[70px]
                    text-center flex
                    ${ page == currentpage ?  ' border-r border-l border-primary font-bold text-primary' :
                                    'hover:border-r hover:border-l hover:border-primary hover:font-bold hover:text-primary'} transition-all duration-500 ease-out cursor-pointer`"
                    @click="paginationFun(page)"
        >
            <p class="m-auto" v-text="page"></p>
        </div>

        <div    :class="`flex items-center justify-center h-full w-[70px] m-auto ${currentpage >= totalpages ? '' : 'cursor-pointer'}`"
                @mouseover="hoverFun('over')"
                @mouseleave="hoverFun('leave')"
                @click="currentpage < totalpages && paginationFun('next')"
        >
            <div class="flex items-center justify-center m-auto">
                <Icon icon="fluent:ios-arrow-rtl-24-regular" :color="arrowColor(currentpage >= totalpages)"  />
                <Icon icon="fluent:ios-arrow-rtl-24-regular" :color="arrowColor(currentpage >= totalpages)" />
            </div>
        </div>
    </div>

</template>
<script>
import {Link} from "@inertiajs/inertia-vue3";
import axios from 'axios';
import {Icon} from "@iconify/vue";

export default {
    name:'pagination',
    components:{Link , Icon},
    props:{
        totalpages:{
            type:Number,
            default:5,
        },
        url:{
            type:String,
            default:'',
        },
    },
    data(){
        return {
            currentpage:3,
            hover:Boolean
        };
    },
    methods:{
        totalpagesFun(n){

            let arr = [];
            for (let index = 1; index <= n; index++)
               arr.push(index)

            return arr;
        },
        hoverFun(action){
            if (action == 'over')
                this.hover = true ;
            else
                this.hover = false ;
        },
        arrowColor(cond){
           if(this.hover){
               if(cond){
                   return '#333333'
               } else {
                   return '#9f1218'
               }
           } else {
               return '#1c304f'
           }
        },
        paginationFun(action){
            if(action == 'next'){
                this.currentpage++;
            }
            else if(action == 'prev'){
                this.currentpage--;
            }
            else{
                this.currentpage = action;
            }

            let form = new FormData();
            form.append('currentpage' , this.currentpage);

            axios.post(route(this.url),form).then((result) => {
                this.currentpage = result.data.currentpage;
            }).catch((err) => {
                console.log(err);
            });
        }
    },
}
</script>
