<template>
	<div class="flex h-[64px] w-[184px] border border-gray-300 bg-white rounded-md">
		<div class="h-full w-1/2">
			<img src="/images/logo.png" class="object-cover h-full w-full" alt="attribute image" />
		</div>
		<div class="">
			<h1 class="text-xl text-left w-full h-1/2 text-textcolor ">OIL</h1>
			<p class="w-full h-1/2 text-left text-textcolor text-xs" v-text="`5K/s`"></p>
		</div>
	</div>
</template>
<script>
export default {
	name:"attribute",
}
</script>