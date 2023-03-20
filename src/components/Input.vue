<template>
  <div class="row justify-content-center">
      <div class="col-md-12 col-lg-6 col-sm-12 col-12">
        <form @submit.prevent="sending">
        <textarea v-model="message" type="text" class="form-control" placeholder="Masukan Aspirasi Terbaik Anda ?" cols="30" rows="10"></textarea>
        <button class="w-100 mt-3 btn btn-primary color-2">Kirim !</button>
        </form>
      </div>
      <h4 class="text-center">Kirimkan Pesan Aspirasi untuk Aleg</h4>
      <div class="row justify-content-center mb-4">
          <div class="col-md-12 col-lg-6 col-12" v-if="any == true">
              <div class="row">
                <div class="col-md-12 col-lg-12 col-12 mt-2" v-for="data in datas" :key="data.id">
                    <div class="card border-0">
                        <div class="card-body card__content text-light">
                            <div class="card-text">@Anonymous</div>
                            <div class="content mt-2 mb-2">
                                <strong>{{ data.pesan }}</strong>
                            </div>
                            <hr>
                            <div class="date text-muted">
                                {{data.tgl}} | <span class="badge bg-primary text-dark" @click="detail(data.uuid)"><i class="fa fa-comment"></i> Komentar</span>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div v-else>
              <div class="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
            </div>
          </div>
      </div>
  </div>
</template>
<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import axios from 'axios'
import { createToast } from 'mosha-vue-toastify';
import { onMounted } from '@vue/runtime-core';
export default {
    setup() {
        const router = useRouter();
        const message = ref("");
        const datas = ref([])
        const any = ref(false)
        const getData = async () => 
        {
            await axios.get("https://apisiyolaasmara.000webhostapp.com/service_nglink.php")
            .then((response) => {
                any.value = true
                datas.value = response.data.data
            })
            .catch((error) => {
                console.log(error)
            })
        }
        const detail = (data) => 
        {
            router.push(`nglink/${data}`)
        }
        const sending = async () => 
        {
            if(message.value.length > 0)
            {
                const formData = new FormData();
                formData.append("pesan",message.value)
                await axios.post("https://apisiyolaasmara.000webhostapp.com/service_nglink.php",formData)
                .then((respondes) => {
                    message.value = ""
                    createToast('Terimah Kasih Kaka Telah Memasukan Aspirasi')   
                    getData()
                })
                .catch((error) => {
                    console.log(error)
                })
            }else{
                createToast("Harus Di Isi Yah ! ")
            }
        }

        onMounted(() => {
            getData()
        })
        return { message,sending,datas,any,detail}
    },
}
</script>
<style scoped>
.form {
  position: relative;
}


span{
    cursor: pointer;
}


.form span {
  position: absolute;
  right: 17px;
  top: 13px;
  padding: 2px;
  border-left: 1px solid #000000;
}



.form-input {
  height: 100px;
  border-radius: 10px;
  border-width: 20;
}

.form-input:focus {
  box-shadow: none;
  border: none;
  border-width: 20px;
}

.card {
 border-radius: 20px;
 padding: 5px;
 box-shadow:#191919;
 background-image: linear-gradient(to left, #2f64b0 0%, #ea5358 100%);
}
.card-comment {
 border-radius: 20px;
 padding: 5px;
 box-shadow:#191919;
 background-image: linear-gradient(to left, #2f64b0 0%, #ea5358 100%);
}

.card__content {
 background:#191919;
 border-radius: 17px;
 width: 100%;
 height: 100%;
}

</style>
