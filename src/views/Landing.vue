<template>
  <div class="hero" v-if="transisi == true">
    <section class="hero-jumbotron">
      <div class="jumbotron hero-section">
        <div class="container">
          <div class="text-start hero-1">
            <div class="row justify-content-center">
              <div class="col-sm-12 col-md-12 col-12 p-4 col-sm-12 col-lg-6">
                <div class="text-center">
                  <img
                    src="../assets/worker.png"
                    class="icon shadow"
                    width="200"
                    alt=""
                    srcset=""
                    data-v-f59e6a86=""
                  />
                </div>
                <h5 class="text-hero">
                  <h1 class="mt-4 ask text-center">
                    Mohamad Rizky <strong class="thumb">Isa</strong>
                  </h1>
                  <p class="text-center text-gardient">
                    <a
                    href="https://wa.me/6283131152585"
                    class="ms-2 mt-2 mb-2 badge bg-success"
                    ><i class="fa-brands fa-whatsapp"></i> WhatsApp</a>
                <a
                    href="https://www.instagram.com/kikyisa/"
                    class="ms-2 mt-2 mb-2 badge bg-danger text-light"
                    ><i class="fa-brands fa-instagram"></i> Instagram</a
                >
                <a href="https://github.com/kikiisa" class="ms-2 mt-2 mb-2 badge bg-dark"
                    ><i class="fa-brands fa-github"></i> Github</a
                >
                  </p>
                  <div class="text-center text-dark">
                    <router-link to="/nglink" class="ms-2 mb-2 btn btn-warning"
                      ><i class="fa fa-link"></i> Nglink</router-link
                    >
                    <router-link to="/quotes" class="ms-2 mb-2 btn btn-warning">
                      <i class="fa fa-book"></i> Quotes Orang Hebat
                    </router-link>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container mb-4">
      <div class="row justify-content-center">
        <h4 class="text-center mb-4"><strong>Tentang Saya</strong></h4>
        <div class="col-12 col-md-12 col-sm-12 col-lg-6">
            <Bio/>
        </div>
      </div>
    </section>
    <section class="container mb-4">
      <div class="row justify-content-center">
        <h4 class="text-center mb-4"><strong>My Skill</strong></h4>
        <div class="col-3 col-md-3 col-sm-3 col-2 col-lg-1">
          <img
            src="../assets/laravel.png"
            width="90"
            alt="Image Responsive"
            class="shadow rounded-circle"
          />
        </div>
        <div class="col-3 col-md-3 col-sm-3 col-2 col-lg-1">
          <img
            src="../assets/codeigniter.png"
            width="90"
            alt="Image Responsive"
            class="shadow rounded-circle"
          />
        </div>
        <div class="col-3 col-md-3 col-sm-3 col-2 col-lg-1">
          <img
            src="../assets/express.png"
            width="90"
            alt="Image Responsive"
            class="shadow rounded-circle"
          />
        </div>
        <div class="col-3 col-md-3 col-sm-3 col-2 col-lg-1">
          <img
            src="../assets/python.png"
            width="90"
            alt="Image Responsive"
            class="shadow rounded-circle"
          />
        </div>
        <div class="col-3 col-md-3 col-sm-3 col-2 col-lg-1">
          <img
            src="../assets/vue.png"
            width="90"
            alt="Image Responsive"
            class="shadow rounded-circle"
          />
        </div>
        <div class="col-3 col-md-3 col-sm-3 col-2 col-lg-1">
          <img
            src="../assets/js.png"
            width="90"
            alt="Image Responsive"
            class="shadow rounded-circle"
          />
        </div>
        <div class="col-3 col-md-3 col-sm-3 col-2 col-lg-1">
          <img
            src="../assets/react.png"
            width="90"
            alt="Image Responsive"
            class="shadow rounded-circle"
          />
        </div>
      </div>
    </section>
  </div>
  <Load v-else></Load>
</template>
<script>
import { ref } from "@vue/reactivity";
import Load from "@/components/Load.vue";
import Bio from "@/components/Bio.vue";
export default {
  components: {
    Load,
    Bio
  },
  setup() {
    document.title = "Welcome To My Home"
    const transisi = ref(false);
    setTimeout(() => {
      transisi.value = true;
    }, 3000);
    return { transisi };
  },
};
</script>
<style scoped>
.thumb {
  background-color: #fab215;
  border-radius: 10px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
}
.card {
  background-color: #f8fbfe;
  border-radius: 8px;
  z-index: 1;
}

.tools {
  display: flex;
  align-items: center;
  padding: 9px;
}

.circle {
  padding: 0 4px;
}

.box {
  display: inline-block;
  align-items: center;
  width: 10px;
  height: 10px;
  padding: 1px;
  border-radius: 50%;
}

.red {
  background-color: #ff605c;
}

.yellow {
  background-color: #ffbd44;
}

.green {
  background-color: #00ca4e;
}
</style>