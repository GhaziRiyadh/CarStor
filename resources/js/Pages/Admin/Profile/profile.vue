<template>
    <section class="flex items-center justify-center">
        <form class="w-[80vw] h-screen border border-gray-300 rounded-xl my-20" @submit="submit">
            <div class="relative w-full border-b border-gray-300 h-1/3">
                <div
                    @mouseleave="hoverPerson = false"
                    @mouseover="hoverPerson = true"
                    class="absolute w-32 h-32 rounded-full -bottom-16 left-[116px] z-50">
                    <label for="personImage" class="absolute w-full h-full rounded-full hover:bg-textcolor hover:cursor-pointer hover:bg-opacity-70">
                        <svg :class="`w-full h-full p-[42px] ${hoverPerson ? 'flex' :'hidden'}`" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#fff"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0z"/></g></svg>
                    </label >
                    <input type="file" id="personImage" @change="sendPersonImage" hidden>
                    <img class="object-cover w-full h-full rounded-full" :src="personImage" alt="">
                </div>
                <label
                    @mouseleave="hoverBackPerson = false"
                    @mouseover="hoverBackPerson = true"
                    for="personBackImage"
                    class="absolute flex items-center justify-center w-full h-full rounded-t-xl hover:bg-textcolor hover:cursor-pointer hover:bg-opacity-70">
                        <svg :class="`w-40 h-40 ${hoverBackPerson ? 'flex' :'hidden'}`" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#fff"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0z"/></g></svg>
                </label>
                <input type="file" id="personBackImage" @change="sendPersonBackImage" hidden>
                <div class="w-full h-full rounded-t-xl ">
                    <img class="object-cover w-full h-full rounded-t-xl" :src="personBackImage" alt="">
                </div>
            </div>

            <section class="flex w-full h-2/3 ">
                <div class="w-full border-gray-300 lg:h-full lg:w-1/3 lg:block lg:border-r">

                </div>
                <div class="flex items-end justify-center w-full lg:h-full lg:w-2/3">
                    <div class="w-full lg:h-[350px] flex items-center justify-center">
                        <div>
                            <div>
                                <label for="namePerson" class="inline-block px-3 text-xl text-textcolor">name:</label>
                                <input id="namePerson" class="px-2 py-1 text-base bg-transparent border rounded-md outline-none "/>
                            </div>
                            <div>
                                <label for="namePerson" class="inline-block px-3 text-xl text-textcolor">name:</label>
                                <input id="namePerson" class="px-2 py-1 text-base bg-transparent border rounded-md outline-none "/>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </form>
    </section>
</template>
<script>
    import layout from '@/Layouts/AppLayout.vue';
    import { Icon } from '@iconify/vue';
    import cameraFill from '@iconify-icons/bi/camera-fill';

    export default{
        componenet:{
            Icon,
        },
        data() {
		    return {
			    icons: {
				    cameraFill,
			    },
                hoverPerson:Boolean,
                hoverBackPerson:Boolean,
                personImage:'/images/person.jpg',
                personBackImage:'/images/backProfile.jpg',
		    };
	    },
        created(){
            this.hoverPerson = false;
            this.hoverBackPerson = false;
        },
        methods:{
            sendPersonImage(v){
                this.personImage = URL.createObjectURL(v.target.files[0]);
            },
            sendPersonBackImage(v){
                this.personBackImage = URL.createObjectURL(v.target.files[0]);
            },
        },
    };
</script>
