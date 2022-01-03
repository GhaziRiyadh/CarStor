<template>
    <div class="grid grid-cols-3 gap-4 p-2 border border-textcolor  rounded-md " >
        <div class="col-span-1 flex items-center justify-center">
            <img :src="`/images/${title}.png`" :alt="title" class="col-span-1 w-10 h-auto object-contain rounded-md">
        </div>
        <div class="col-span-2 ">
            <h1 class=" text-indigo-900 text-left rtl:text-right capitalize text-xl">{{title}}</h1>
            <p class=" text-left rtl:text-right whitespace-nowrap text-sm">{{value}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "carAttribute",
    props:{
        image:{
            type:String ,
            default:''
        },title:{
            type:String ,
            default:''
        },
        value:{
            type:String ,
            default:''
        },
    }
}
</script>

<style scoped>

</style>
