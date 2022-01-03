<template>
  <app-layout :auth="Auth" >
      <div class="w-full flex items-center justify-center ">
        <div class="w-[80vw]">
            <show-car-details :addToCartFun="addToCart"/>
        </div>
      </div>
      <car-card/>
  </app-layout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout";
import CarCard from "@/components/carShowCard";
import ShowCarDetails from '../../../components/showCarDetails.vue';
export default {
    name: "showCar",
    components: {CarCard, AppLayout,ShowCarDetails},
    props:{
        Auth:{
            type:Boolean,
            default:false,
        }
    }
}
</script>

<style scoped>

</style>
