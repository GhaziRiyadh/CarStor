<template>
  	<div class="relative w-[250px]">
  		<div @click="wontselect = !wontselect"  class=" rounded-md w-full h-[50px] text-textcolor text-lg border border-gray-300"></div>
	  	<div v-if="wontselect" class="rounded-md absolute top-[50px] right-0 left-0 w-full h-auto text-textcolor text-lg border border-gray-300">
	  		<div v-for="(item,index) in options" :key="index" @click="chose(item)"
	  			class="p-2 rounded-md m-0.5 border-b border-gray-600 h-[40px] w-full hover:text-white hover:bg-primary cursor-pointer">
	  				<p v-text="item" ></p>
	  		</div>
	  	</div>
  	</div>
</template>

<script>
export default {
	name:"selectInput",
	props:{
		options:{
			type:Array,
			default:['yemen','morcedce']
		}
	},
	data() {
	  return {
	    chosed:Array,
	    wontselect:Boolean,
	  };
	},
	created(){
		this.wontselect = false;
		this.chosed = this.options;
	},
	methods: {
	  chose(item){
			console.log(item)
		},
	},

}
</script>
