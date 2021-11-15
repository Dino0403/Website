<template>
  <div class="container mb-5 rounded shadow">
    <h4 class="mt-5 mb-5 text-center fw-bold">
      如果您有合作需求請使用以下表單與我們聯絡
    </h4>
    <div class="row">
      <div class="col-md-4 pt-5">
        <ContactMSG :companyMSG="companyMSG" />
      </div>
      <form
        class="row g-3 needs-validation pb-3 col-md-8"
        @submit.prevent.stop="handleSubmit"
      >
        <div class="col-md-6">
          <label for="validationCustom01" class="form-label"
            >公司/單位名稱*</label
          >
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            placeholder="請輸入公司/單位名稱"
            v-model="company"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom02" class="form-label">聯絡人*</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            placeholder="請輸入聯絡人"
            v-model="name"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">Email*</label>
          <input
            type="email"
            class="form-control"
            id="validationCustom03"
            placeholder="請輸入Email"
            v-model="email"
            required
          />
          <div class="valid-feedback">Looks good!</div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom04" class="form-label">公司電話</label>
          <input
            type="tel"
            class="form-control"
            id="validationCustom04"
            v-model="companyTel"
            placeholder="請輸入公司電話"
          />
        </div>
        <div class="col-md-6">
          <label for="validationCustom05" class="form-label">手機號碼</label>
          <input
            type="tel"
            class="form-control"
            id="validationCustom05"
            v-model="phoneNumber"
            placeholder="請輸入手機號碼"
          />
        </div>
        <div class="col-md-6">
          <label for="validationCustom07" class="form-label"
            >公司/單位地址</label
          >
          <input
            type="text"
            class="form-control"
            id="validationCustom07"
            v-model="address"
            placeholder="請輸入公司/單位地址"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea6" class="form-label"
            >需求描述</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
            v-model="description"
            placeholder="我們能為您做什麼?"
          ></textarea>
        </div>
        <div class="col-12">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              資料已填寫完成
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-secondary" type="submit">Send</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import ContactMSG from "../components/ContactMSG.vue";

export default {
  name: "Contact",
  components: { ContactMSG },
  data() {
    return {
      company: "",
      name: "",
      email: "",
      companyTel: "",
      phoneNumber: "",
      address: "",
      description: "",
      companyMSG: [
        {
          title: "聯絡地址",
          detail: "高雄市鼓山區蓮海路70號",
          icon: "fas fa-building",
          gooleLink: "https://goo.gl/maps/dUnJqwuDnSTxCYjXA",
        },
        {
          title: "Email 信箱",
          detail: "XXX@example.com",
          icon: "fas fa-envelope-open",
        },
        {
          title: "連絡電話",
          detail: "+(886)-7-641-7687",
          icon: "fas fa-phone-volume",
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      swal("資料送出!", "請靜待專人回覆!", "success");
      const data = {
        company: this.company,
        name: this.name,
        email: this.email,
        companyTel: this.companyTel,
        phoneNumber: this.phoneNumber,
        address: this.address,
        description: this.description,
      };

      console.log(data);
      this.company = "";
      this.name = "";
      this.email = "";
      this.companyTel = "";
      this.phoneNumber = "";
      this.address = "";
      this.description = "";
    },
  },
};
</script>

<style>
.container {
  margin-top: 6rem;
  padding: 20px;
  color: gray;
  letter-spacing: 1px;
}

.title {
  font-size: 1rem;
}

.detail {
  font-size: 0.5rem;
}

.gooleLink {
  display: inline-block;
  padding-left: 4px;
  text-decoration: none;
  font-size: 0.5rem;
  font-weight: 900;
  color: lightseagreen;
}

.gooleLink:hover {
  color: steelblue;
}

.fa-building {
  font-size: 2rem;
}

.fa-envelope-open {
  font-size: 2rem;
}

.fa-phone-volume {
  font-size: 2rem;
}
</style>