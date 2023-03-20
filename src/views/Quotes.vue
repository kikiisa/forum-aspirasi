<template>
  <div class="container">
    <section class="py-2 hero">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-12">
          <h1 class="text-center web-title color-2">
            Quote Orang
            <span class="color-1">Hebat.</span>
          </h1>
          <p class="text-center sub-title color-2">
            Ayo Salurkan Aspirasi Kalian Dalam Bentuk Komentar
          </p>
        </div>
      </div>
    </section>
    <section>
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-6 col-sm-12 col-12">
          <form @submit.prevent="sending">
            <textarea
              v-model="message"
              type="text"
              class="form-control form-input"
              placeholder="Kirimkan Quote Terbaik Anda"
              cols="30"
              rows="10"
            ></textarea>
            <button class="w-100 mt-3 btn btn-primary color-2">Kirim !</button>
          </form>
        </div>
      </div>
    </section>
    <section>
      <div class="row justify-content-center mb-4">
        <!--<h4 class="text-center mt-4">Daftar Quotes Kalian</h4>-->
        <div class="col-md-6 col-lg-6 col-12 mt-2">
          <div class="row">
            <div class="col-md-12 col-lg-12 col-12 mt-2">
                <div class="alert alert-info">
                    *Masih Dalam Pengembangan
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Load from "@/components/Load.vue";
export default {
  components: {
    Load,
  },
};
</script>
<style scoped>
.form {
  position: relative;
}

.form span {
  position: absolute;
  right: 17px;
  top: 13px;
  padding: 2px;
  border-left: 1px solid #d1d5db;
}

.form-input {
  height: 100px;
  border-radius: 10px;
}

.form-input:focus {
  box-shadow: none;
  border: none;
}

.card {
  border-radius: 20px;
  padding: 5px;
  box-shadow: #191919;
  background-image: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
}
</style>
