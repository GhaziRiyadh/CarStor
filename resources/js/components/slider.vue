<template>
  <Carousel :items-to-show="2" :wrap-around="true">
    <Slide v-for="slide in slideImage" :key="slide">
      <div class="carousel__item">
        <img
          class="object-cover rounded-md carousel__slide"
          :src="slide"
          alt=""
        />
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    slideImage: {
      type: Array,
      default: [
        "/images/sliderImage.jpg",
        "/images/sliderImage.jpg",
        "/images/sliderImage.jpg",
        "/images/sliderImage.jpg",
      ],
    },
  },
});
</script>

<style scoped>
.carousel__slide > .carousel__item {
  transform: scale(1);
  opacity: 0.5;
  transition: 0.5s;
  margin: 0px 10px;
}
.carousel__slide--visible > .carousel__item {
  opacity: 1;
  transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
  transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
  transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
  transform: scale(1.1);
}
</style>
