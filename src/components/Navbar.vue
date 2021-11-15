<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/home" class="navbar-brand">古樂有限公司</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/profile" class="nav-link">公司介紹</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                公司營業項目
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link to="/businessitem/print" class="dropdown-item"
                    >3D列印</router-link
                  >
                </li>
                <li>
                  <router-link to="/businessitem/system" class="dropdown-item"
                    >系統整合服務</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link to="/businessitem/sunix" class="dropdown-item"
                    >代理產品 - 三泰</router-link
                  >
                </li>
                <li>
                  <router-link to="/businessitem/jia" class="dropdown-item"
                    >代理產品 - 嘉川</router-link
                  >
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">聯絡我們</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss">
@import "../assets/SCSS/main.scss";

.nav-item {
  font-size: 1rem;
}

@media screen and (min-width: 991px) {
  .collapse {
    display: flex;
    justify-content: end;
  }
}
</style>