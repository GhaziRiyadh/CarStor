<template>
    <section class="">
        <form class="w-[80vw] border border-gray-300 rounded-xl my-20 p-10 " >
            <div class="relative w-full border-b border-gray-300 h-[190px]">
                <label @mouseleave="hoverBackPerson = false" @mouseover="hoverBackPerson = true" for="personBackImage" class="absolute flex items-center justify-center w-full h-full rounded-t-xl hover:bg-textcolor hover:cursor-pointer hover:bg-opacity-70">
                    <svg :class="`w-full h-full ${hoverBackPerson ? 'flex' :'hidden'}`" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#fff"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0z"/></g></svg>
                </label>
                <input type="file" id="personBackImage" @change="sendPersonBackImage" hidden>
                <div class="w-full h-full rounded-t-xl ">
                    <img class="object-cover w-full h-full rounded-t-xl" :src="personBackImage" alt="">
                </div>
            </div>

            <section class="flex w-full ">
                <div class="flex items-end justify-center lg:h-full w-full">
                    <div class="w-full h-full flex items-center justify-center">
                        <div class="grid grid-rows-6 w-full gap-4 px-5">
                            <div class="w-full grid grid-cols-6 " v-for="(item , index) in carForm" :key="item">
                                <label for="name"  class="flex items-center justify-between px-3 col-span-2 text-xl capitalize whitespace-nowrap text-textcolor" >
                                    <span>{{index}}</span><span>:</span>
                                </label>
                                <input id="name" :type="`${['date','year'].find(v => v === index) ? 'date':'text'}`" v-model="carForm[index]" class="px-2 py-1 text-base bg-transparent col-span-4 border rounded-md outline-none "/>
                            </div>
                            <div class="flex items-center justify-end" >
                                <div @click="storeFun" class=" cursor-pointer border hover:border-none bg-white text-textcolor flex p-[4px] my-0.5 items-center justify-between  hover:bg-primary hover:text-white h-10 rounded-md w-32">
                                    <p class="w-full px-2 text-center text-xl hover:font-bold">
                                        Save
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </form>

        <!-- show data -->
        <div class="w-[80vw] border border-gray-300 rounded-xl my-20 p-10 ">
            <div v-for="(item , index) in containData" :key="index" class="w-full m-5 rounded-md border border-gray-200">
               <div class="relative w-full border-b border-gray-300 h-[190px]">
                    <label @mouseleave="hoverBackPerson = false" @mouseover="hoverBackPerson = true" :for="index" class="absolute flex items-center justify-center w-full h-full rounded-t-xl hover:bg-textcolor hover:cursor-pointer hover:bg-opacity-70">
                        <svg :class="`w-full h-full ${hoverBackPerson ? 'flex' :'hidden'}`" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img"  preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#fff"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2zm.5 2a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1zm9 2.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0z"/></g></svg>
                    </label>
                    <input type="file" :id="index" @change="setImage($event,item.id)" hidden>
                    <div class="w-full h-full rounded-t-xl ">
                        <img class="object-cover w-full h-full rounded-t-xl" :src="getImage(item.car_photos[0].image)" alt="">
                    </div>
               </div>
                <div class="h-full ">
                    <div class="w-full grid grid-cols-6 my-3" v-for="(items , index) in getItems(item)" :key="items">
                        <label :for="index"  class="flex items-center justify-between px-3 col-span-2 text-xl capitalize whitespace-nowrap text-textcolor" >
                            <span>{{index}}</span><span>:</span>
                        </label>
                        <input :id="index" v-model="item[index]" class="px-2 py-1 text-base bg-transparent col-span-4 border rounded-md outline-none "/>
                    </div>
                    <div class="flex items-center justify-end m-5" >
                        <div @click="updateFun(item)" class=" cursor-pointer border hover:border-none bg-white text-textcolor flex p-[4px] my-0.5 items-center justify-between  hover:bg-primary hover:text-white h-10 rounded-md w-32">
                            <p class="w-full px-2 text-center text-xl hover:font-bold">
                                Update
                            </p>
                        </div>
                        <div @click="deleteFun(item.id)" class=" m-5 cursor-pointer border hover:border-none bg-white text-textcolor flex p-[4px] my-0.5 items-center justify-between  hover:bg-primary hover:text-white h-10 rounded-md w-32">
                            <p class="w-full px-2 text-center text-xl hover:font-bold">
                                Delete
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import axios from 'axios';
export default{
    name :'add-new-car',
    props:{
        carData:{
            type:Array,
            default:[]
        },
    },
    data(){
        return {
            carForm:{
                brand:'',
                vin:'',
                year:'',
                style:'',
                color:'',
                gear:'',
                gear_type:'',
                cylinder:'',
                cost:'',
                price:'',
                drive_type:'',
                fual_type:'',
                seats_num:'',
                date:'',
            },
            photo:'',
            hoverBackPerson:false,
            personBackImage:'',
            containData:[],
        }
    },
    created(){
        console.log(this.carData)
        this.containData = this.carData
    },
    methods:{
        setImage(v,id){
            this.containData[id - 2].car_photos[0].image = v.target.files[0]
        },
        getImage(item){
            if(typeof item === 'object'){
                return URL.createObjectURL(item)
            }else{
                return item
            }
        },
        sendPersonBackImage(v){
            this.personBackImage = URL.createObjectURL(v.target.files[0]);
        },
        deleteFun(id){
            axios.post(route('deleteCar',{id:id}))
                .then(v => {
                    this.containData = v.data.data
                    this.$toaster.success({
                        title:'Done',
                        desc:'Delete success.'
                    })
                })

        },
        updateFun(item){
            axios.post(route('updateCar',{id:item.id}),item)
                .then(v=> {
                    this.containData = v.data.data
                    this.$toaster.success({
                        title:'Done',
                        desc:'Update success.'
                    })
                })
        },
        getItems(item){
            let items = new Object()
            for (const key in item) {
                if(key !== 'car_photos')
                    items[key] = item[key]
            }
            return items;
        },
        storeFun(){
            let form = new FormData();
            for(const key in this.carForm)
                form.append(key,this.carForm[key])
            form.append('photo',this.personBackImage)

            axios.post(route('addNew'),form)
                .then(v => {
                    this.$toaster.success({
                            title:'Done',
                            desc:'Store success',
                        })
                })
                .catch(err => {
                    console.log(err.response.data.errors)
                    for(const key in err.response.data.errors)
                        this.$toaster.error({
                            title:key,
                            desc:err.response.data.errors[key][0],
                        })
                })
        }
    }
}
</script>
