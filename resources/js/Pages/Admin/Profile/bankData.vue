<template>
    <section class="flex items-center justify-center">
        <div class="w-[80vw] h-screen border border-gray-300 rounded-xl my-20" @submit="submit">
            <div class="relative w-full border-b border-gray-300 h-1/3">
                <div class="absolute w-32 h-32 rounded-full -bottom-16 left-[116px] z-50">
                    <img class="object-cover w-full h-full rounded-full" :src="personImage" alt="">
                </div>
                <div class="w-full h-full rounded-t-xl ">
                    <img class="object-cover w-full h-full rounded-t-xl" :src="personBackImage" alt="">
                </div>
            </div>

            <section class="flex w-full h-2/3 ">
                <div class="w-full border-gray-300 lg:h-full lg:w-1/3 lg:block lg:border-r">
                </div>
                <div class="flex items-end justify-center w-full lg:h-full lg:w-2/3">
                </div>
            </section>
        </div>
    </section>
</template>
<script>
    export default{
        data(){
            return{
                personImage:'/images/person.jpg',
                personBackImage:'/images/backProfile.jpg',
            };
        }
    }
</script>
