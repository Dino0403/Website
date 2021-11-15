<template>
  <div class="container sunxiBlock">
    <h2 class="sunxiTitle">三泰科技 - 物聯網解決方案</h2>
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-5 mb-5">
      <div class="col" v-for="product in productMessage" :key="product.id">
        <div class="card rounded shadow">
          <img :src="product.img" class="card-img-top" alt="..." />
          <div class="card-body">
            <h4 class="card-title text-center mt-4 mb-4">
              {{ product.title }}
            </h4>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              :data-bs-target="`#${product.id}`"
            >
              查看內容
            </button>
          </div>
        </div>

        <div
          class="modal fade"
          :id="product.id"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title">
                  {{ product.title }}
                </h3>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <img :src="product.img" class="card-img-top" alt="..." />
                <h5 class="text-start mb-3 mt-5 model">型號 :</h5>
                <h5 class="text-start mb-3">{{ product.model }}</h5>
                <h5 class="text-start mb-3 describe">產品描述：</h5>
                <h5 class="text-start mb-3">
                  {{ product.describe }}
                </h5>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sunix",
  data() {
    return {
      productMessage: [
        {
          id: "one",
          img: "https://img.mweb.com.tw/thumb/928/500x500/Product/1-IOT-solutions/2-KEM1501/KEM1501.png",
          title: "電子圍籬方案包",
          model: "KSF1001G",
          describe:
            "一體式IoT套件，用於快速部署，無代碼，無程式設計，便於使用，短時間內可設置完成，簡化人員操作。",
        },
        {
          id: "two",
          img: "https://img.mweb.com.tw/thumb/928/500x500/Product/1-IOT-solutions/1-KSF1001/KSF1001_%25E7%2589%25A9%25E8%2581%25AF%25E7%25B6%25B2%25E8%25A7%25A3%25E6%25B1%25BA%25E6%2596%25B9%25E6%25A1%2588.png",
          title: "微軟Azure IoT Central智慧物聯方案包",
          model: "KEM1501",
          describe:
            "一體式IoT套件，用於快速部署無代碼，無程式設計便於使用，2小時內可設置完成簡化人員操作。",
        },
        {
          id: "three",
          img: "https://img.mweb.com.tw/thumb/928/500x500/Product/1-IOT-solutions/3-KEM1401/KEM1401.png",
          title: "三色燈稼動應用包",
          model: "KEM1401",
          describe:
            "一體式IoT套件，用於快速部署無代碼，無程式設計便於使用，短時間內可設置完成，簡化人員操作。",
        },
        {
          id: "four",
          img: "https://img.mweb.com.tw/thumb/928/500x500/Product/1-IOT-solutions/4-KPE1301/KPE1301.png",
          title: "電力監控應用包",
          model: "KPE1301",
          describe:
            "一體式IoT套件，用於快速部署，無代碼，無程式設計，便於使用，短時間內可設置完成，簡化人員操作。",
        },
      ],
    };
  },
};
</script>

<style>
.sunxiBlock {
  margin-top: 100px;
  color: gray;
}

.sunxiTitle {
  font-weight: bolder;
}

.card {
  overflow: hidden;
}

.card-title {
  font-weight: bolder;
}

.card-img-top {
  object-fit: cover;
  width: 100%;
  height: 350px;
  transition: all 0.6s;
}

.card-img-top:hover {
  transform: scale(1.2);
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn-primary {
  max-width: 200px;
  font-size: 1rem;
}

.modal-body {
  overflow: hidden;
}

.modal-title {
  font-weight: bolder;
}

.model,
.describe {
  font-weight: 900;
  color: black;
}
</style>