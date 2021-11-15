<template>
  <div id="footer">
    <h5>{{ companyMSG.name }}</h5>
    <h6 v-for="(detail, index) in companyMSG.detailMSG" :key="index">
      <i :class="detail.icon"></i> {{ detail.title }}
    </h6>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      companyMSG: {
        name: "古樂有限公司",
        detailMSG: [
          {
            title: "高雄市鼓山區蓮海路70號",
            icon: "fas fa-map-marker-alt",
          },
          {
            title: "XXX@example.com",
            icon: "fas fa-envelope",
          },
          {
            title: "+(886)-7-641-7687",
            icon: "fas fa-phone",
          },
        ],
      },
    };
  },
};
</script>

<style>
#footer {
  padding: 10px;
  background: #edf0f7;
  color: #7a6398;
}
h5 {
  padding: 4px;
  text-align: center;
  font-size: 1rem;
  font-weight: 900;
}
h6 {
  padding: 4px;
  text-align: center;
  font-size: 0.5rem;
}
i {
  display: inline-block;
  padding-right: 5px;
}
</style>