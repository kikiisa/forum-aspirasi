<template>
  <div class="container">
    <Hero />
    <Input />
  </div>
</template>
<script>
import Hero from "@/components/Hero.vue";
import Input from "@/components/Input.vue";
import Load from "@/components/Load.vue";
export default {
  components: {
    Hero,
    Input,
    Load,
  },
};
</script>
