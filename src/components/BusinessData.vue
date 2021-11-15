<template>
  <div class="businessData mb-5">
    <div class="container p-4">
      <div class="row">
        <div
          v-for="(data, index) in busniessData"
          :key="index"
          class="col-12 col-md-3 col-md-4 mt-3 mb-3"
        >
          <h1 class="text-center initialValue">{{ data.initialValue }}</h1>
          <h5 class="text-center">{{ data.title }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessData",
  props: {
    initialBusniessData: {
      type: Array,
      require: true,
    },
  },
  data() {
    return {
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
  mounted() {
    const timer_1 = setInterval(() => {
      this.busniessData[0].initialValue += 1;
      if (
        this.busniessData[0].initialValue === this.busniessData[0].finishValue
      ) {
        clearInterval(timer_1);
      }
    }, 50);

    const timer_2 = setInterval(() => {
      this.busniessData[1].initialValue += 1;
      if (
        this.busniessData[1].initialValue === this.busniessData[1].finishValue
      ) {
        clearInterval(timer_2);
      }
    }, 50);

    const timer_3 = setInterval(() => {
      this.busniessData[2].initialValue += 1;
      if (
        this.busniessData[2].initialValue === this.busniessData[2].finishValue
      ) {
        clearInterval(timer_3);
      }
    }, 50);
  },
};
</script>

<style>
.businessData {
  background: #e0e0e0;
  padding: 15px;
}

.initialValue {
  font-size: 3rem;
  font-weight: bolder;
}
</style>