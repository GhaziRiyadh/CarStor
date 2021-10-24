<template>
  	<div :class="`flex w-[100px] h-[30px] text-center text-lg text-white rounded-md ${color}`" >
  		<p v-if="!iscolor" v-text="data.text" class="w-2/3 h-full"></p>
  		<!-- <img src="data.image" alt="data.imagedesc" class="w-1/3 h-full"> -->
  	</div>
</template>

<script>
export default {
	 name:"filterselected",
	 props:{
	 	iscolor:{
	 		type:Boolean,
	 		default:false,
	 	},
	 	color:{
	 		type:String,
	 		default:"bg-primary",
	 	},
	 	data:{
	 		type:Object,
	 		default:{
	 			
	 			text: "Filter",
	 			image:"",
	 			imagedesc:"",
	 		}
	 	}
	 },
}
</script>
