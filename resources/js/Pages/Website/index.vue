<template>
  <Head title="Car store" />
  <div>
    <!-- Page header -->
    <div class="relative w-full mb-[24px]">
      <navigation classes="absolute " :userImage="userImage" :userName="userName" :Auth="Auth" />
      <div class="relative w-full h-screen">

        <div class="absolute z-40 w-full h-full bg-black bg-opacity-70"></div>

        <div class="absolute z-50 flex w-full h-full">

          <div class="flex items-center w-auto h-auto m-auto border border-gray-300 rounded-md " >

            <input placeholder="Search" class=" px-2 py-1 text-base bg-transparent border rounded-md outline-none w-[300px] focus:w-[400px] text-white transition-all duration-500 ease-in-out border-none focus:border-none" v-model="search" type="text"/>
            <Link class=" h-[24px] w-[24px] m-1 flex items-center justify-center rounded-full bg-opacity-75 hover:bg-primary" :href="route('search', search)" >
                <Icon icon="clarity:search-line" color="#eee" />
            </Link>

          </div>
        </div>
        <img class="object-cover w-full h-full" src="/images/homeHead.jpg" alt=""/>
      </div>
    </div>

    <!-- slider -->
    <div class="w-screen mb-[24px]"></div>

    <!-- show some of cars -->
    <div class="w-full h-auto mb-[24px]">
      <!-- tabs -->
      <header class="h-[80px] w-full flex items-center justify-center">
        <tabs
          :tabData="tabData"
          :tabsFun="tabsFun"
          :currerntTab="currentTabItem"
        />
      </header>

      <!-- cards -->
      <section class="flex items-center justify-center w-full h-auto mt-[24px]">
        <div class="w-[80vw] h-auto grid lg:grid-cols-3 grid-cols-1 gap-3">
          <car-card v-for="item in currentCart" :key="item.id" :card="item" />
        </div>
      </section>
    </div>

    <!-- Ours places -->
    <section class="w-full h-[80vh] mb-[24px]">
      <!-- title -->
      <header class="flex items-center justify-center w-full h-[50px] my-[18px]">
        <h1 class="text-3xl font-extrabold text-center underline text-primary">
          Our Places
        </h1>
      </header>

      <!-- maps -->
      <GMapMap
        class="h-[60vh] bg-gray-300 w-full"
        :center="{ lat: 51.093048, lng: 6.84212 }"
        :zoom="7"
        map-type-id="terrain"
      >
        <GMapMarker :position="{ lat: 51.093048, lng: 6.84212 }" />
      </GMapMap>
    </section>

    <!-- show small card -->
    <section class="flex items-center justify-center w-full h-auto mb-[50px]">
      <div class="w-[80vw] h-auto grid lg:grid-cols-3 grid-cols-1 gap-3">
        <hover-card v-for="item in hoverCart" :key="item.id" :card="item" />
      </div>
    </section>

    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Head, Link } from "@inertiajs/inertia-vue3";
import Footer from "@/components/footer.vue";
import tabs from "@/components/tabs.vue";
import hoverCard from "@/components/hoverCard.vue";
import carCard from "@/components/carShowCard.vue";
import { Icon } from "@iconify/vue";
import Navigation from "@/components/navigation.vue";

export default defineComponent({
  components: {
    Head,
    Link,
    Icon,
    Footer,
    tabs,
    carCard,
    hoverCard,
    Navigation,
  },
  props: {
    Auth: Boolean,
    userImage: {
      type: String,
      default: "/images/person.jpg",
    },
    userName: {
      type: String,
      default: "It'sMy",
    },
    cart:{type:Array},
    hoverCart:{type:Array,default:[]},
    tabData:{type:Array,default:[]},
    currentTab:{type:String},
  },
  data() {
    return {
      currentTabItem: '',
      search: '',
      currentCart: [],
    };
  },
  created() {
    this.currentTabItem = this.currentTab;
    this.currentCart = this.cart;
  },
  methods: {
    tabsFun(v) {
     let sendItem = new FormData();
      sendItem.append('current', v);

      axios.post('getnexttab',sendItem).then((res)=>{
        this.currentTabItem = v;
        this.currentCart = res.data[0]['data'];
      });

    },
  },
});
</script>


