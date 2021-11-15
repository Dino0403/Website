<template>
  <div class="row">
    <div v-for="(msg, index) in companyMSG" :key="index" class="row mb-3">
      <div class="col-2 col-md-2 pt-3">
        <i :class="msg.icon"></i>
      </div>
      <div class="col-10 col-md-10 mb-3">
        <h5 class="title text-start">{{ msg.title }}</h5>
        <h6 class="detail text-start">{{ msg.detail }}</h6>
        <a
          class="gooleLink"
          href="https://goo.gl/maps/dUnJqwuDnSTxCYjXA"
          target="_blank"
          v-if="msg.gooleLink"
          >在 Google 地圖上檢視</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMSG",
  props: {
    companyMSG: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>