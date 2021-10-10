<template>
  <div class="flex w-screen h-screen bg-textcolor">
    <div class="flex-col m-auto">
      <hoverCard :card="card" />
    </div>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
import hoverCard from "@/components/hoverCard.vue";

export default {
  name: "Home",
  components: { Link, hoverCard },
  data() {
    return {
      actives: {
        type: Boolean,
        default: false,
      },
      card: {
        desc: "pport For information about buying this title in bulk quantities, or for special sales which may include electronic versions; custom cover designs; and Sign opportunitie",
        image: "/images/cardImage.jpg",
        imagedesc: "Morcedce",
      },
    };
  },
  created() {
    this.actives = false;
  },
};
</script>
