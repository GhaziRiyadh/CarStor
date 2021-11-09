<template>
  <div :class="`lg:flex w-full h-[50px] hidden z-[999999] ${classes}`">
    <Link :href="route('home')" class="flex w-1/3 h-full mr-auto">
      <img
        src="/images/logo.png"
        class="object-cover w-[150px] h-full m-auto"
        alt="logo"
      />
    </Link>
    <div class="flex w-1/3 items-center justify-center h-full m-auto">
      <navItem
        :active="selfUrl == route('home') + '/'"
        :link="route('home')"
        text="Home"
        class="mx-2 hover:text-primary"
      />
      <navItem
        :text="`Shop`"
        :link="route('shop')"
        :active="selfUrl.includes('/shop')"
        class="mx-2 hover:text-primary"
      />
    </div>
    <Link v-if="!Auth" :href="route('login')" class="flex w-1/3 h-full ml-auto">
      <Icon
        class="h-full w-[28px] m-auto"
        icon="ant-design:login-outlined"
        color="#1c304f"
      />
    </Link>
    <div
      v-if="Auth"
      @click="imageClick = !imageClick"
      class="relative flex w-1/3 h-full ml-auto cursor-pointer"
    >
      <img
        class="object-cover h-[36px] w-[36px] m-auto rounded-full"
        :src="userImage"
        :alt="userName"
      />
      <div
        :class="`absolute bg-white w-[200px] border border-gray-300 ${
          imageClick
            ? 'h-auto rounded-lg p-1'
            : ' h-0 p-0 border-none rounded-[0px]'
        } top-[44px] right-[46px] `"
      >
        <section
          :class="`w-full h-full border-b border-gray-300 rounded-t-lg ${
            imageClick ? '' : 'hidden'
          }`"
        >
          <Link
            @mouseover="profileHover = true"
            @mouseleave="profileHover = false"
            :href="route('dashboard')"
            :class="` bg-white text-textcolor ${
              imageClick
                ? 'flex p-[4px] my-0.5 items-center justify-between '
                : 'hidden'
            } hover:bg-primary hover:text-white h-10 w-full rounded-md `"
          >
            <img
              :src="userImage"
              class="object-cover w-[32px] h-[32px] border-none rounded-full"
            />
            <p
              :class="`w-full px-2 text-left ${
                profileHover ? 'font-bold' : ''
              }`"
            >
              Profile
            </p>
          </Link>

          <Link
            @mouseover="cartHover = true"
            @mouseleave="cartHover = false"
            :href="route('cart')"
            :class="` bg-white text-textcolor ${
              imageClick
                ? 'flex p-[4px] my-0.5 items-center justify-between '
                : 'hidden'
            } hover:bg-primary hover:text-white h-10 w-full rounded-md `"
          >
            <Icon
              icon="akar-icons:cart"
              class="object-cover w-auto h-full border-none"
              :color="`${cartHover ? '#fff' : '#1c304f'}`"
            />
            <p :class="`w-full px-2 text-left ${cartHover ? 'font-bold' : ''}`">
              Cart
            </p>
          </Link>

          <Link
            @mouseover="favoriteHover = true"
            @mouseleave="favoriteHover = false"
            :href="route('favorite')"
            :class="` bg-white text-textcolor ${
              imageClick
                ? 'flex p-[4px] my-0.5 items-center justify-between'
                : 'hidden'
            } hover:bg-primary hover:text-white h-10 w-full rounded-md `"
          >
            <Icon
              class="object-cover w-auto h-full border-none"
              icon="ant-design:star-outlined"
              :color="`${favoriteHover ? '#fff' : '#1c304f'}`"
            />
            <p
              :class="`w-full px-2 text-left ${
                favoriteHover ? 'font-bold' : ''
              }`"
            >
              Favorite
            </p>
          </Link>
        </section>
        <Link
          @mouseover="logoutHover = true"
          @mouseleave="logoutHover = false"
          @click="logoutFun"
          :class="` bg-white text-textcolor ${
            imageClick
              ? 'flex p-[4px] my-0.5 items-center justify-between '
              : 'hidden'
          } hover:bg-primary hover:text-white h-10 w-full rounded-md `"
        >
          <Icon
            class="object-cover w-auto h-full border-none"
            icon="ant-design:logout-outlined"
            :color="`${logoutHover ? '#fff' : '#1c304f'}`"
          />
          <p :class="`w-full px-2 text-left ${logoutHover ? 'font-bold' : ''}`">
            Logout
          </p>
        </Link>
      </div>
    </div>
  </div>
  <div class="ml-[100vw] w-full transition-all lg:hidden">
    <Link :href="route('home')" class="flex w-[300px] h-full mr-auto">
      <img
        src="/images/logo.png"
        class="object-cover w-[150px] h-full m-auto"
        alt="logo"
      />
    </Link>
    <div class="w-auto h-full m-auto">
      <navItem class="mx-2 hover:text-primary" />
      <navItem class="mx-2 hover:text-primary" />
      <navItem class="mx-2 hover:text-primary" />
      <navItem class="mx-2 hover:text-primary" />
      <navItem class="mx-2 hover:text-primary" />
    </div>
    <div class="flex w-[130px] h-full ml-auto">
      <Icon
        class="w-full h-auto m-auto"
        icon="ant-design:login-outlined"
        color="#1c304f"
      />
    </div>
  </div>
</template>
<script>
import navItem from "@/components/navItem.vue";
import { Icon } from "@iconify/vue";
import { Link } from "@inertiajs/inertia-vue3";
import axios from "axios";
export default {
  name: "nav",
  props: {
    classes: String,
    Auth: Boolean,
    userImage: {
      type: String,
      default: "/images/person.jpg",
    },
    userName: {
      type: String,
      default: "Itsmy",
    },
  },
  components: {
    navItem,
    Icon,
    Link,
  },
  data() {
    return {
      active1: { type: Boolean, default: false },
      imageClick: Boolean,
      activeItem: { type: Boolean, default: false },
      cartHover: Boolean,
      favoriteHover: Boolean,
      logoutHover: Boolean,
      profileHover: Boolean,
      selfUrl:String,
    };
  },
  created() {
    this.active =
      this.activeItem =
      this.imageClick =
      this.cartHover =
      this.favoriteHover =
      this.logoutHover =
      this.profileHover =
        false;
      this.selfUrl = window.location.href;
  },
  methods: {
    hoverFun(action, activeItem) {
      this.active = activeItem ? activeItem : action;
    },
    activeFun(cond) {
      this.active = cond;
    },
    activeFunction(cond) {
      return cond;
    },
    logoutFun() {
      axios.post("/logout").then((res) => {
        window.location.replace(route("home"));
      });
    },
  },
};
</script>
