<template>
  	<div class="w-[250px] h-[30px] rounded-lg border border-gray-300 relative">
          <div class="absolute w-4 h-[40px] bg-textcolor rounded-xl -top-2"></div>
          <div class="absolute w-4 h-[40px] bg-textcolor rounded-xl -top-2"></div>
    </div>
</template>

<script>
export default {
	name:"pricefilter",
	props:{
	  max:{
	    type: Number,
	    default: 100,
	  },
	},
}
</script>

<style>

</style>
