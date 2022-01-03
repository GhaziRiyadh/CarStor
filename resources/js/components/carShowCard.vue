<template>
    <Link
        class="
            block
            h-[368px]
            w-[322px]
            bg-white
            rounded-lg
            border border-gray-300
        "
        :href="`showCarDetails/${card['id']}`"
    >
        <div class="h-[218px] w-full rounded-tl-lg rounded-tr-lg">
            <img
                class="object-cover rounded-tl-lg rounded-tr-lg"
                :src="card['car_photos'][0]['image']"
                :alt="card['models']['model']"
            />
        </div>
        <div class="w-full h-auto px-4 py-2">
            <div class="flex w-full text-textcolor">
                <p class="font-bold">
                    <span class="text-[16pt]" v-text="card.title"></span>
                </p>

                <div class="ml-auto rtl:mr-auto">
                    <div
                        class="
                            inline
                            ltr:mr-[5px]
                            rtl:ml-[5px]
                            text-[10pt]
                            relative
                        "
                    >
                        <span v-text="`\$${card.price * 0.2}`"></span>
                        <div
                            class="
                                absolute
                                rotate-[12deg]
                                h-0.5
                                top-[8px]
                                w-[40px]
                                bg-primary
                            "
                        ></div>
                    </div>
                    <span
                        class="text-[18pt] font-bold"
                        v-text="`\$${card.price}`"
                    ></span>
                </div>
            </div>
            <div class="w-full py-2">
                <p
                    class=" w-full mb-2 text-gray-500 overflow-hidden text-[10pt] "
                    v-html="getDesc(card.car_dtls.detail)"
                ></p>
            </div>
        </div>
    </Link>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";
export default {
  name: "carCard",
  components: {
    Link,
  },
  props: {
    card:Object,
  },
    methods:{
      getDesc(item = ''){
          return item.length < 70 ? item : item.slice(0,70) + '...';
      }
    }
};
</script>
