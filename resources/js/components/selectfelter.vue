<template>
	<div class="relative w-[250px]">
		<div
			@click="wontselect = !wontselect"
			class="
				rounded-md
				w-full
				h-[50px]
				text-textcolor text-lg
				border border-gray-300
				text-center
				py-3
			"
			v-text="lastSelect"
		></div>
		<div
			v-if="wontselect"
			class="
				rounded-md
				absolute
				top-[50px]
				right-0
				left-0
				w-full
				h-[170px]
				text-textcolor text-lg
				border border-gray-300
				overflow-auto
				bg-white
			"
		>
			<div
				v-for="item in options"
				:key="Object.values(item)[0]"
				@click="choseFun(Object.values(item)[0])"
				:class="`
					p-2
					m-0.5
					border-b border-gray-600
					h-[40px]
					w-full
					hover:text-white hover:bg-primary
					cursor-pointer 
					${'bg-' + Object.values(item)[0].toLowerCase().trim() + '-600'}
				`"
			>
				<p v-text="Object.values(item)[0]"></p>
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
			default:['yemen','morcedce'],
		},
		chose:Function,
	},
	data() {
	  return {
	    lastSelect:String,
	    chosed:Array,
	    wontselect:Boolean,
	  };
	},
	created(){
		this.wontselect = false;
		this.chosed = this.options;
		this.lastSelect = '';
	},
	methods:{
		choseFun(item){
			this.lastSelect = item;
			this.chose(item);
		},
	},

}
</script>
