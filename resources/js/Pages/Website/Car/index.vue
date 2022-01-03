<template>
    <app-layout :Auth="Auth">
        <!-- filters -->
        <header class="relative w-full flex items-center justify-center">
            <header class=" lg:w-[70vw]">
                <show-car-details :images="data.car_photos" :carName="data.brand" :carDesc="data.car_dtls.detail" :CarAttributes="carAttributes" :addToCartFun="addToCart" />
            </header>
        </header>

        <!-- cards
        <section class="flex items-center justify-center w-full h-auto mt-[24px]">
            <div class="w-[80vw] h-auto grid lg:grid-cols-3 grid-cols-1 gap-3">
                <carCard
                    v-for="(item, index) in card"
                    :key="index"
                    :card="item"
                />
            </div>
        </section>

        pagination
        <section class="flex items-center justify-center w-full h-36">
            <pagination
				:totalpages="pages"
				:currentpage="currentpage"
				:nextFun="paginationFun"
				:prevFun="paginationFun"
				:choseFun="paginationFun"
				class="w-[550px]"
			/>
        </section> -->
    </app-layout>
</template>

<script>
import carShowCard from "@/components/carShowCard.vue";
import pagination from "@/components/pagination.vue";
import carCard from "@/components/carShowCard.vue";
import selectInput from "@/components/selectfelter.vue";
import pricefilter from "@/components/filterprice.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
import ShowCarDetails from '../../../components/showCarDetails.vue';
import attributeVue from '../../../components/attribute.vue';
import { Inertia } from '@inertiajs/inertia';
export default {
  name: "shop",
  components: {
    AppLayout,
    carShowCard,
    pagination,
    carCard,
    pricefilter,
    selectInput,
    ShowCarDetails,
  },
  props: {
    Auth: Boolean,
    card: {
        type:Array,
        default:[]
    },
    data: {
        type:Array,
        default:[]
    },
  },
    created(){
        for (const att in this.data) {
            if(typeof this.data[att] !== 'object' && !['id','date','price','cost','created_at', 'updated_at','vin' ].find(v => v === att))
                this.carAttributes[att.replace('_', ' ')] = this.data[att]
        }
    },
  data(){
      return{
        //   pages:2,
        //   currentpage:1
        carAttributes:new Object()
      }
  },
  methods:{
    //   paginationFun(action){
    //         if(action == 'next'){
    //             this.currentpage++;
    //         }
    //         else if(action == 'prev'){
    //             this.currentpage--;
    //         }
    //         else{
    //             this.currentpage = action;
    //         }

    //         let form = new FormData();
    //         form.append('page' , this.currentpage);
    //         form.append('search' , this.issearch );

    //         axios.post(route('getcardata'),form)
    //             .then(result => {
    //                 this.card = result.data.carData.data;
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //             });
    //     },
    addToCart(){
        if(!this.Auth){
            Inertia.get(route('login'));
        }else{

        }
    }
  }
};
</script>
