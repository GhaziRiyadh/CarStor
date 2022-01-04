<template>
    <div class="relative w-full border-b border-gray-300 flex items-center justify-center">
        <div @mouseleave="isHover = false" @mouseover="isHover = true" class=" w-20 h-20">
            <label for="image" class="absolute w-20 h-20 rounded-full hover:bg-textcolor hover:cursor-pointer hover:bg-opacity-70 flex items-center justify-center">
                <img :class="`w-8 h-8 ${isHover ? 'flex' :'hidden'}`" src="/images/cameraLogo.svg" alt="">
            </label >

            <input type="file" id="image" @change="getImage" hidden>
            <img class="object-cover w-20 h-20 rounded-full" :src="image" alt="">

        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            Link,
        },
        props:{
            photo:{
                type:Function,
                default: v => v
            }
        },
        data(){
            return{
                isHover:false,
                image:'',
            }
        },
        methods:{
            getImage(v){
               this.image = URL.createObjectURL(v.target.files[0]);
               this.photo(v.target.files[0])
            }
        }

    })
</script>
