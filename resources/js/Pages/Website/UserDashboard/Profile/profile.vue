<template>
    <section class="flex items-center justify-center">
        <form class="w-[80vw] h-screen border border-gray-300 rounded-xl my-20" @submit="submit">
            <div class="relative w-full border-b border-gray-300 h-1/3">
                <div @mouseleave="hoverPerson = false" @mouseover="hoverPerson = true" class="absolute w-32 h-32 rounded-full -bottom-16 left-[116px] z-50">
                    <label for="personImage" class="absolute w-full h-full rounded-full hover:bg-textcolor hover:cursor-pointer hover:bg-opacity-70">
                        <svg :class="`w-full h-full p-[42px] ${hoverPerson ? 'flex' :'hidden'}`" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#fff"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0z"/></g></svg>
                    </label >

                    <input type="file" id="personImage" @change="sendPersonImage" hidden>
                    <img class="object-cover w-full h-full rounded-full" :src="personImage" alt="">

                </div>

                <label @mouseleave="hoverBackPerson = false" @mouseover="hoverBackPerson = true" for="personBackImage" class="absolute flex items-center justify-center w-full h-full rounded-t-xl hover:bg-textcolor hover:cursor-pointer hover:bg-opacity-70">
                        <svg :class="`w-40 h-40 ${hoverBackPerson ? 'flex' :'hidden'}`" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#fff"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0z"/></g></svg>
                </label>

                <input type="file" id="personBackImage" @change="sendPersonBackImage" hidden>

                <div class="w-full h-full rounded-t-xl ">
                    <img class="object-cover w-full h-full rounded-t-xl" :src="personBackImage" alt="">
                </div>

            </div>

            <section class="flex w-full h-2/3 ">
                <div class="flex items-center justify-center w-full border-gray-300 lg:h-full lg:w-1/3 lg:border-r">
                    <user-info :user="{ name:containtData.name, email:containtData.email, 'user Name':containtData.username}" />
                </div>
                <div class="flex items-end justify-center w-full lg:h-full lg:w-2/3">
                    <div class="w-full h-full flex items-center justify-center">
                        <div class="grid grid-rows-6 w-full gap-4 px-5">
                            <div class="w-full grid grid-cols-6 ">
                                <label for="name"  class="flex items-center justify-between px-3 col-span-2 text-xl capitalize whitespace-nowrap text-textcolor" >
                                    <span>Name</span><span>:</span>
                                </label>
                                <input id="name" v-model="containtData.name" class="px-2 py-1 text-base bg-transparent col-span-4 border rounded-md outline-none "/>
                            </div>
                            <div class="w-full grid grid-cols-6 " >
                                <label for="email" class="flex items-center justify-between px-3 col-span-2 text-right text-xl capitalize whitespace-nowrap text-textcolor">
                                    <span >Email</span><span>:</span >
                                </label>
                                <input id="email" v-model="containtData.email" type="email" autocomplete="false" class="px-2 py-1 text-base bg-transparent col-span-4 border rounded-md outline-none "/>
                            </div>
                            <div class="w-full grid grid-cols-6 " >
                                <label for="username" class="flex items-center justify-between px-3 col-span-2 text-right text-xl capitalize whitespace-nowrap text-textcolor">
                                    <span >User Name</span><span>:</span>
                                </label>
                                <input id="username" v-model="containtData.username" class="px-2 py-1 text-base bg-transparent col-span-4 border rounded-md outline-none "/>
                            </div>
                            <div class="w-full grid grid-cols-6 " >
                                <label for="pass" class="flex items-center justify-between px-3 col-span-2 text-right text-xl capitalize whitespace-nowrap text-textcolor">
                                    <span>New Password</span><span>:</span>
                                </label>
                                <input id="pass" v-model="password" class="px-2 py-1 text-base bg-transparent col-span-4 border rounded-md outline-none "/>
                            </div>
                            <div class="w-full grid grid-cols-6 " >
                                <label for="v_pass" class="flex items-center justify-between px-3 col-span-2 text-right text-xl capitalize whitespace-nowrap text-textcolor">
                                    <span>Virefy Password</span><span>:</span>
                                </label>
                                <input id="v_pass" v-model="vPass" class="px-2 py-1 text-base bg-transparent col-span-4 border rounded-md outline-none "/>
                            </div>
                            <div class="flex items-center justify-end" >
                                <div @click="updateFun" class=" cursor-pointer border hover:border-none bg-white text-textcolor flex p-[4px] my-0.5 items-center justify-between  hover:bg-primary hover:text-white h-10 rounded-md w-32">
                                    <p class="w-full px-2 text-center text-xl hover:font-bold">
                                        Save
                                    </p>
                                </div>
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
    import userInfo from '../../../../components/userInfo.vue';

    export default{
        components: { userInfo,Icon,layout },
        props:{
            userInfo:{
                type:Object,
                default:{}
            }
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
                vPass:'',
                password:'',
                containtData:'',
		    };
	    },
        created(){
            this.hoverPerson = this.hoverBackPerson = false;
            this.personImage = this.userInfo.photo.image;
            this.containtData = this.userInfo
        },
        methods:{
            sendPersonImage(v){
                this.personImage = URL.createObjectURL(v.target.files[0]);
                this.containtData.photo = v.target.files[0]
            },
            sendPersonBackImage(v){
                this.personBackImage = URL.createObjectURL(v.target.files[0]);
            },
            updateFun(){
                this.containtData['vPass'] = this.vPass
                this.containtData['password'] = this.password
                let form = new FormData();
                for (const key in this.containtData) {
                    form.append(key,this.containtData[key])
                }
                axios.post(`/profile/update/${this.containtData.id}`,form)
                .then(res => {

                })
                .catch(error => {
                    if (typeof error.response.data === 'string')
                        this.$toaster.error({
                            title:'Error!',
                            desc: error.response.data
                        })
                    else
                        for (const key in error.response.data.errors) {
                            this.$toaster.error({
                                title:key,
                                desc: error.response.data.errors[key][0]
                            })
                        }
                });
            }
        },
    };
</script>
