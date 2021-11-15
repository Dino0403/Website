<template>
  <div class="container mt-1 mb-3">
    <h2 class="text-center mb-3 cooperativeTitle">合作夥伴</h2>
    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-4 cooperativeBlock"
        v-for="(Cooperative, index) in cooperativeManufacturer"
        :key="index"
      >
        <img :src="Cooperative.imgLinke" class="cooperativeImg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CooperativeManufacturer",
  props: {
    cooperativeManufacturer: {
      type: Array,
      require: true,
    },
  },
};
</script>

<style>
.cooperativeTitle {
  letter-spacing: 0.5rem;
  font-weight: bold;
  color: grey;
}

.cooperativeBlock {
  display: flex;
  justify-content: space-around;
  margin: 30px 0;
}

.cooperativeImg {
  width: 300;
  height: 150px;
}
</style>