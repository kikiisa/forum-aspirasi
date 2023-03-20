<template>
  <div class="container">
    <section class="py-2 hero">
      <div class="row justify-content-center">
        <div
          class="col-md-8 col-lg-6 col-12"
          v-for="x in dataPost"
          :key="x.uuid"
        >
          <div class="card border-0">
            <div class="card-body card__content text-light">
              <div class="card-text">@Anonymous</div>
              <div class="content mt-2 mb-2">
                <strong>
                  {{ x.pesan }}
                </strong>
              </div>
              <hr />
              <div class="date">
                {{ x.tgl }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="row justify-content-center mt-2">
        <div class="col-md-8 col-lg-6 col-sm-12 col-12">
          <form @submit.prevent="sending">
            <textarea
              v-model="message"
              type="text"
              class="form-control form-input"
              placeholder="Komentari Aspirasi"
              cols="30"
              rows="10"
            ></textarea>
            <router-link to="/" class="btn btn-primary mt-3 color-2"
              ><i class="fa fa-arrow-left"></i
            ></router-link>
            <button class="mt-3 btn btn-primary color-2 ms-1">Kirim !</button>
          </form>
        </div>
      </div>
    </section>
    <section class="hero">
      <h4 class="text-center">Komentar Lainya</h4>
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-6 col-12 mt-2">
          <div class="row" v-if="status == true">
            <div
              class="col-md-12 col-lg-12 col-12 mt-2"
              v-for="data in datas"
              :key="data.uuid_message"
            >
              <div class="card border-0 card-comment">
                <div class="card-body text-light">
                  <div class="card-text">@Anonymous</div>
                  <div class="content mt-2 mb-2">{{ data.content }}</div>
                  <hr />
                  <div class="date">{{ data.tgl }}</div>
                </div>
              </div>
            </div>
          </div>
          <div v-else>
            <load></load>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Load from "@/components/Load.vue";
import { useRoute } from "vue-router";
import load from "@/components/Load.vue";
import axios from "axios";
import { createToast } from 'mosha-vue-toastify';
import { onMounted, ref } from "@vue/runtime-core";
export default {
  components: {
    load,
  },

  setup() {
    document.title = "Komentar - AnonyMous";
    const message = ref("");
    const route = useRoute();
    const datas = ref([]);
    const dataPost = ref([]);
    const status = ref(false);
    const uuid = route.params.uuid;
    const sending = async () => {
      if(message.value.length > 0)
      {
        const formnew = new FormData();
        formnew.append("pesan", message.value);
        formnew.append("uuid", uuid);
        await axios
            .post("http://localhost:3000/service_commentar.php", formnew)
            .then((res) => {
              console.log(res)
            message.value = "";
            createToast("Terimah Kasih Telah Berkomentar");
            getCommentar();
            })
            .catch((err) => {
            console.log(err);
            });
      }else{
          createToast("Harus Di Isi Lah COKKKKKK");
      }
    };

    const getPost = async () => {
      await axios
        .get(
          `http://localhost:3000/service_commentar_alone.php?uuid=${uuid}`
        )
        .then((response) => {
          
          dataPost.value = response.data.data;
          console.log(dataPost.value);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const getCommentar = async () => {
      await axios
        .get(`http://localhost:3000/service_commentar.php?uuid=${uuid}`)
        .then((response) => {
          datas.value = response.data.data;
          console.log(response)
          setTimeout(() => {
            status.value = true;
          }, 1500);
          //  console.log(datas.value)
        })
        .catch((error) => {
          console.log(error);
        });
    };

    onMounted(() => {
      getCommentar();
      getPost();
    });
    return { sending, message, datas, sending, status, dataPost };
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
  background-image: linear-gradient(to left, #2f64b0 0%, #ea5358 100%);
}
.card-comment {
  border-radius: 20px;
  padding: 5px;
  box-shadow: #191919;
  background-image: linear-gradient(to left, #2f64b0 0%, #ea5358 100%);
}

.card__content {
  background: #191919;
  border-radius: 17px;
}
</style>
