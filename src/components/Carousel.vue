<template>
  <div
    id="carouselExampleIndicators"
    class="carousel slide carousel-fade"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="2000">
        <img
          src="https://cdn.pixabay.com/photo/2019/04/15/12/23/internet-of-things-4129218_1280.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="https://cdn.pixabay.com/photo/2018/05/16/05/07/iot-3404892_1280.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        <img
          src="https://cdn.pixabay.com/photo/2020/02/22/12/26/internet-4870406_1280.jpg"
          class="d-block w-100"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media screen and (max-width: 600px) {
  img {
    height: 250px;
    background-size: cover;
  }
}

@media screen and (min-width: 600px) {
  img {
    height: 400px;
    background-size: cover;
  }
}
</style>