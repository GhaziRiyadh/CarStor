<template>
  <div class="flex h-screen">
    <div class="flex-col w-2/3 m-auto">
      <slider />
    </div>
  </div>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
import layout from "@/Layouts/AppLayout.vue";
import CFcard from "@/components/card.vue";
import slider from "@/components/slider.vue";
export default {
  name: "Home",
  components: { Link, layout, CFcard, slider },
  layout: layout,
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
