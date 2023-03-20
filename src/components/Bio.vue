<template>
  <div class="card">
    <div class="tools">
      <div class="circle">
        <span class="red box"></span>
      </div>
      <div class="circle">
        <span class="yellow box"></span>
      </div>
      <div class="circle">
        <span class="green box"></span>
      </div>
    </div>
    <div class="card__content">
      <div class="card-body text-dark">
          <strong>Hai, Saya Mohamad Rizky Isa Junior Software Engginer</strong> yang mempunyai pengalaman Web Programing lebih dari<strong> 3 tahun</strong>, untuk saat ini sedang menempuh pendidikan S1 dengan mengambil Jurusan Teknik Informatika.
      </div>
    </div>
  </div>
</template>
<style scoped>
.card {
  margin: 0 auto;
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