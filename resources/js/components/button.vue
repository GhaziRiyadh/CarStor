<template>
    <button :class="` ${classes} `" @click="btnFun" v-text="text" :type="type"></button>
</template>
<script>
export default {
    props:{
        btnType:{
            type:String,
            default:"button",
        },
        text:{
            type:String,
            default:"button",
        },
        classes:{
            type:String,
            default:'h-[40px] w-[140px]'
        },
        btnFun:Function,
    },
    created(){
        console.log(this.btnWidth)
    },
}
</script>
