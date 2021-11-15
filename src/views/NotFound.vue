<template>
  <h1>{{ response }}</h1>
</template>

<script>
export default {
  name: "NotFound",
  data() {
    return {
      response: "404 Not Found",
    };
  },
};
</script>

<style lang="scss">
@import "../assets/SCSS/main.scss";
</style>