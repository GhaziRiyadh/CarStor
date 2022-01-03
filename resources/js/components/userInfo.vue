<template>
  <div class="w-full text-left text-gray-800 rtl:text-right">
    <p class="grid w-full grid-cols-2 px-4 font-serif text-base" v-for="(item, index) in user" :key="index" >
        <span class="text-lg font-thin uppercase ">{{index + ': '}}</span>
        <span class="text-base font-thin" >{{item}}</span>
    </p>
  </div>
</template>

<script>
export default {
    name:'userInfo',
    components:{},
    props:{
        user:{
            type:Object,
            default:{
                name:'root',
                email:'root@gmail.com',
                userName:'root',
            }
        }
    }
}
</script>

<style>

</style>
