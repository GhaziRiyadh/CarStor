<template>
  	<div class=" flex h-[200px] bg-white rounded-md border border-gray-300">
  		<img class="object-cover w-2/5 h-full rounded-l-md" :src="data.photo.image" :alt="data.brand">
  		<div class="w-3/5 h-full p-3">
  			<div class="flex items-end w-full h-1/5">
  				<h1 v-text="data.brand" class="mr-auto text-lg text-textcolor"></h1>
  				<data v-if="!done" class="ml-auto text-sm text-gray-300" v-text="data.brand"></data>
  			</div>
  			<div class="w-full py-3 h-3/5" >
  				<div v-for="(key, value) in listdata" :key="key" class="flex items-center justify-start">
	  				<p v-text="`${value}:`" class="w-1/2 text-sm h-1/3 text-textcolor" ></p>
	  				<p v-text="key" class="w-1/2 text-sm text-gray-400 h-1/3 "></p>
  				</div>
  			</div>
  			<div class="flex items-center justify-end w-full h-1/5">
  				<div>
	  				<Link v-if="!done" :href="route(bayUrl)" class="border border-gray-300 text-center p-[8px] rounded-md text-textcolor hover:bg-primary bg-white hover:text-white hover:border-none block w-[124px] h-[40px]"  v-text="buttonText"></Link>
	  				<data v-if="done" class="ml-auto text-sm text-gray-300" v-text="data.date"></data>
  				</div>
  			</div>
  		</div>
  	</div>
</template>

<script>
import Button from "@/components/button.vue";
import {Link} from "@inertiajs/inertia-vue3";
export default {
	name:"CFcard",
	components:{
		Button,
		Link
	},
	props: {
	  data:{
	    type: Object,
	    default:{},
	  },
	  done:{
	  	type:Boolean,
	  	default:false,
	  },
	  buttonText:{
	  	type:String,
	  	default:"Buy"
	  },
	  bayUrl:{
	  	type:String,
	  	default:"Home"
	  }
	},
    data(){
        return {
            listdata:{}
        }
    },
    created(){
        for (const key in this.data) {
            if(['model','company','price'].find(v => key === v))
                this.listdata[key] = this.data[key]
        }
        console.log('1',this.data)
    },
}
</script>
