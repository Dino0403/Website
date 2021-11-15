<template>
  <div class="profile container">
    <div>
      <img
        class="img-fluid"
        src="https://ctsphub.org.tw/Content/Files/userfiles/images/%E5%8F%A4%E6%A8%82DM-01(5).jpg"
        alt=""
      />
    </div>
    <div class="row mt-5 mb-5">
      <div class="col-12 col-lg-9 mb-3">
        <h2 class="title">關於我們</h2>
        <p class="mt-3 mb-3 content">
          為企業或個人客戶提供客製化設備機電整合系統或產品設計開發的服務，專精於
          PC Base 控制介面的自動化系統與各式感測器整合性開發。
        </p>
        <h3 class="title mt-5">解決方案&服務內容</h3>
        <p class="mt-3 mb-3 content">
          設備通訊整合解決方案、產品快速功能驗證解決方案、各式感應器整合解決方案、物聯網機電控制解決方案、升級工業4.0最佳解決方案。
        </p>
      </div>
      <div id="fb-root" class="col-12 col-lg-3 pl-4">
        <div
          class="fb-page"
          data-href="https://www.facebook.com/pages/category/Commercial---Industrial/%E5%8F%A4%E6%A8%82%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Gu-Le-Co-106791827366273/"
          data-tabs="timeline"
          data-small-header="false"
          data-width="270"
          data-height="400"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/pages/category/Commercial---Industrial/%E5%8F%A4%E6%A8%82%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Gu-Le-Co-106791827366273/"
            class="fb-xfbml-parse-ignore"
          >
            <a
              href="https://www.facebook.com/pages/category/Commercial---Industrial/%E5%8F%A4%E6%A8%82%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8-Gu-Le-Co-106791827366273/"
              >古樂有限公司 Gu-Le Co.</a
            >
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  mounted() {
    if (location.href.indexOf("#reloading") == -1) {
      location.href = location.href + "#reloading";
      location.reload();
    }
  },
};
</script>

<style>
.profile {
  margin-top: 100px;
}

.title {
  font-weight: bolder;
  color: gray;
  letter-spacing: 2px;
}

.content {
  letter-spacing: 1px;
  line-height: 28px;
  font-weight: 700;
  color: #adadad;
}
</style>