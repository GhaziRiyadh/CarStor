<template>
	<app-layout :Auth="Auth">
		<!-- filters -->
		<header class="h-[50vh] w-full flex items-center justify-center">
			<header class="flex items-center justify-center w-[80vw] h-1/2">
				<!-- for model -->
				<div class="w-1/3 h-1/2">
					<selectInput :chose="chose" :options="brandOptions" />
				</div>
				<!-- for color -->
				<div class="w-1/3 h-1/2">
					<selectInput :chose="chose" :options="colorOptions" />
				</div>

				<!-- for price -->
				<div class="w-1/3 h-1/2">
					<pricefilter />
				</div>
			</header>
		</header>

		<!-- cards -->
		<section
			class="flex items-center justify-center w-full h-auto mt-[24px]"
		>
			<div class="w-[80vw] h-auto grid lg:grid-cols-3 grid-cols-1 gap-3">
				<carCard
					v-for="(item, index) in card"
					:key="index"
					:card="item"
				/>
			</div>
		</section>

		<!-- pagination -->
		<section class="flex items-center justify-center w-full h-36">
			<pagination
				:totalpages="pages"
				:currentpage="currentpage"
				:nextFun="paginationFun"
				:prevFun="paginationFun"
				:choseFun="paginationFun"
				class="w-[550px]"
			/>
		</section>
	</app-layout>
</template>

<script>
import carShowCard from "@/components/carShowCard.vue";
import pagination from "@/components/pagination.vue";
import carCard from "@/components/carShowCard.vue";
import selectInput from "@/components/selectfelter.vue";
import pricefilter from "@/components/filterprice.vue";
import AppLayout from "@/Layouts/AppLayout.vue";
export default {
  name: "shop",
  components: {
    AppLayout,
    carShowCard,
    pagination,
    carCard,
    pricefilter,
    selectInput,
  },
  props: {
    Auth: Boolean,
    carData: Array,
    pages:Number,
    issearch: {
        type:String,
        default:''
    },
    colorOptions: {
        type:Array,
        default:[]
    },
    brandOptions:{
        type:Array,
        default:[],
    },
  },
  created(){
    this.card = this.carData.data
  },
  data(){
    return {
        card: [],
        currentpage:1,
    };
  },
  methods:{
     paginationFun(action){
            if(action == 'next'){
                this.currentpage++;
            }
            else if(action == 'prev'){
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
                console.log(err);
            });
        },
        chose(v){
        	console.log(v)
        },
  },
};
</script>
