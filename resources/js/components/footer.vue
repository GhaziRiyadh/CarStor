<template>
    <div class="flex w-full h-auto p-3 lg:p-5 bg-textcolor">
        <section class="flex flex-col w-auto h-auto m-auto lg:flex-row">
            <section class="border-gray-300 lg:border-r w-full h-auto lg:w-[590px] lg:h-[316px] flex items-center justify-center">
                <div class="w-[208px] h-[120px] ">
                    <p class="w-full text-[36px] text-center text-gray-200 ">Follow us</p>
                    <div class="flex items-center justify-between w-full ">
                        <Link
                            @mouseover="twitterHover = true"
                            @mouseleave="twitterHover = false"
                            class="w-full h-full">
                            <Icon class="w-full h-[36px]" icon="akar-icons:twitter-fill" :color="`${twitterHover?'#1DA1F2':'#fff'}`" />
                        </Link>
                        <Link
                            @mouseover="facebookHover = true"
                            @mouseleave="facebookHover = false"
                            class="w-full h-full">
                            <Icon class="w-full h-[36px]" icon="akar-icons:facebook-fill" :color="`${facebookHover?'#4267B2':'#fff'}`" />
                        </Link>
                        <Link
                            @mouseover="whatsappHover = true"
                            @mouseleave="whatsappHover = false"
                            class="w-full h-full">
                            <Icon class="w-full h-[36px] " icon="akar-icons:whatsapp-fill" :color="`${whatsappHover?'#25D366':'#fff'}`"/>
                        </Link>
                    </div>
                </div>
            </section>
            <section  class="border-gray-300 lg:border-l r w-full h-auto lg:w-[590px] lg:h-[316px] flex items-center justify-center">
                <form @submit.prevent="submit" >
                    <p class="w-full text-[36px] text-center text-gray-200 ">Subscripe news</p>

                    <Input placeholder="Add your email" classes=" bg-white p-2  mb-4 mt-2 text-white placeholder-gray-500" type="email" name="email" />
                    <div class="flex">
                        <CarStorButton classes="m-auto text-xl bg-gray-400 rounded-md hover:text-white text-textcolor hover:bg-green-600 w-[140px] h-[40px]"/>
                    </div>
                </form>
            </section>
        </section>
    </div>
</template>
<script>
import Input from "@/components/input.vue";
import CarStorButton from "@/components/button.vue";
import { Icon } from '@iconify/vue';
import {Link} from '@inertiajs/inertia-vue3'
export default {
    name:"Footer",
    components:{Input , CarStorButton,Icon,Link},
    data(){
        return {
            twitterHover:Boolean,
            facebookHover:Boolean,
            whatsappHover:Boolean,
        };
    },
    created(){
        this.twitterHover = this.facebookHover = this.whatsappHover = false;
    },
    methods:{
        submit(){

        }
    },
}
</script>
