<template>
  <!-- Carousele -->
  <div class="mt-5">
    <Carousel />
    <BusinessData :initialBusniessData="busniessData" />
    <HomeMain />
    <CooperativeManufacturer
      :cooperativeManufacturer="cooperativeManufacturer"
    />
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import HomeMain from "../components/HomeMain.vue";
import CooperativeManufacturer from "../components/CooperativeManufacturer.vue";
import BusinessData from "../components/BusinessData.vue";

export default {
  name: "Home",
  components: { Carousel, HomeMain, CooperativeManufacturer, BusinessData },
  data() {
    return {
      cooperativeManufacturer: [
        {
          imgLinke:
            "https://upload.wikimedia.org/wikipedia/zh/thumb/2/29/National_Sun_Yat-sen_University_logo.svg/1200px-National_Sun_Yat-sen_University_logo.svg.png",
        },
        {
          imgLinke:
            "https://upload.wikimedia.org/wikipedia/zh/thumb/2/29/National_Sun_Yat-sen_University_logo.svg/1200px-National_Sun_Yat-sen_University_logo.svg.png",
        },
        {
          imgLinke:
            "https://upload.wikimedia.org/wikipedia/zh/thumb/2/29/National_Sun_Yat-sen_University_logo.svg/1200px-National_Sun_Yat-sen_University_logo.svg.png",
        },
        {
          imgLinke:
            "https://upload.wikimedia.org/wikipedia/zh/thumb/2/29/National_Sun_Yat-sen_University_logo.svg/1200px-National_Sun_Yat-sen_University_logo.svg.png",
        },
        {
          imgLinke:
            "https://upload.wikimedia.org/wikipedia/zh/thumb/2/29/National_Sun_Yat-sen_University_logo.svg/1200px-National_Sun_Yat-sen_University_logo.svg.png",
        },
        {
          imgLinke:
            "https://upload.wikimedia.org/wikipedia/zh/thumb/2/29/National_Sun_Yat-sen_University_logo.svg/1200px-National_Sun_Yat-sen_University_logo.svg.png",
        },
        {
          imgLinke:
            "https://upload.wikimedia.org/wikipedia/zh/thumb/2/29/National_Sun_Yat-sen_University_logo.svg/1200px-National_Sun_Yat-sen_University_logo.svg.png",
        },
        {
          imgLinke:
            "https://upload.wikimedia.org/wikipedia/zh/thumb/2/29/National_Sun_Yat-sen_University_logo.svg/1200px-National_Sun_Yat-sen_University_logo.svg.png",
        },
        {
          imgLinke:
            "https://upload.wikimedia.org/wikipedia/zh/thumb/2/29/National_Sun_Yat-sen_University_logo.svg/1200px-National_Sun_Yat-sen_University_logo.svg.png",
        },
      ],
      busniessData: [
        {
          initialValue: 0,
          finishValue: 150,
          title: "成功導入全球超過150案場",
        },
        {
          initialValue: 0,
          finishValue: 100,
          title: "已整合超過100種以上感測硬體",
        },
        {
          initialValue: 0,
          finishValue: 30,
          title: "已整合超過30種以上感測硬體",
        },
      ],
    };
  },
};
</script>

<style>
.test {
  margin-top: 7rem;
  padding: 1rem;
  min-height: 760px;
}
</style>