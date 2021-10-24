<template>
  <div class="flex items-center justify-center w-full h-[36px]">
        <div v-for="(item,index) in tabData" :key="index"
            :class="`h-full w-auto
                    text-center px-5 flex items-center justify-center
                    ${ item == currerntTab ?  ' border-r border-l border-primary font-bold text-primary' :
                                    'hover:border-r hover:border-l hover:border-primary hover:font-bold hover:text-primary'}
                                    transition-all duration-500 ease-out cursor-pointer`"
                    @click="tabsFun(item)"
        >
            <p v-text="item"></p>
        </div>
  </div>
</template>

<script>
export default {
    props:{
        tabData:{
            type:Array,
            default:['Hondi' , 'Toyota' , 'Morcedce', 'PMW'],
        },
        currerntTab:{
            type:String,
            default:'Toyota'
        },
        tabsFun:{
            type:Function,
            default:(v)=>{}
        }
    },
    created(){
        console.log(this.tabData);
    }
}
</script>
