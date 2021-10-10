<template>
  <div class="h-[368px] w-[322px] bg-white rounded-lg border border-gray-300">
    <div class="h-[218px] w-full rounded-tl-lg rounded-tr-lg">
      <img
        class="object-cover rounded-tl-lg rounded-tr-lg"
        :src="card.image"
        :alt="card.imagedesc"
      />
    </div>
    <div class="w-full h-auto px-4 py-2">
      <div class="flex w-full text-textcolor">
        <p class="font-bold">
          <span class="text-[16pt]">Morcedce</span>
        </p>

        <div class="ml-auto rtl:mr-auto">
          <div class="inline ltr:mr-[5px] rtl:ml-[5px] text-[10pt] relative">
            $1000
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
          <span class="text-[18pt] font-bold">$900</span>
        </div>
      </div>
      <div class="w-full py-2">
        <p
          class="w-full mb-2 text-gray-500 overflow-hiddin text-[10pt]"
          v-html="card.desc"
        ></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "carCard",
  setup() {},
  props: {
    card: {
      type: Object,
      default: {},
    },
  },
};
</script>
