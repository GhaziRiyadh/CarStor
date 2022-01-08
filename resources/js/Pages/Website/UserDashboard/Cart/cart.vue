<template>
    <app-layout :user="user" :Auth="Auth">
        <section>
            <!-- cards -->
            <section class="flex items-center justify-center w-full h-auto mt-[24px]">
                <div class="w-[80vw] h-auto grid lg:grid-cols-3 grid-cols-1 gap-6">
                    <CFcard v-for="(item , index) in data" :data="item" :key="index" />
                </div>
            </section>

            <!-- pagination -->
            <section class="flex items-center justify-center w-full h-36">
                <pagination
				:totalpages="data.length"
				:currentpage="currentpage"
				:nextFun="paginationFun"
				:prevFun="paginationFun"
				:choseFun="paginationFun"
				class="w-[550px]"
			/>
            </section>
        </section>
    </app-layout>
</template>

<script>
import pagination from "@/components/pagination.vue"
import CFcard from "@/components/card.vue"
import AppLayout from '../../../../Layouts/AppLayout.vue'
export default {
    name:"shop",
    components:{
        pagination,
        CFcard,
        AppLayout,
    },
    props:{
        Auth:Boolean,
        cart:{
            type:Array,
            default:[],
        },
        user:{
            type:Object,
            default:{}
        },
        data:{
            type:Object,
            default:{}
        }
    },
    created(){
        console.log('user',this.data)
    },
    data(){
        return {
            cartData:{},
            done:false,
            listData:{},
            btnText:'',
            currentpage:1,
        }
    },
    methods:{
        paginationFun(action){
            if(action === 'next'){
                this.currentpage++;
            }
            else if(action === 'prev'){
                this.currentpage--;
            }
            else{
                this.currentpage = action;
            }

            let form = new FormData();
            form.append('page' , this.currentpage);
            form.append('search' , this.issearch );
            axios.post(route('getcardata'),form).then((result) => {
                this.card = result.data.carData.data;
            }).catch((err) => {
            });
        },
    }
}
</script>
