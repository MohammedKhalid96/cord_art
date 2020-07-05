<template>
  <div>
    <Nav />
      <nuxt />
    <Footer />
    <Pop />
  </div>
</template>

<script>
import Nav from "~/components/Nav.vue";
import Footer from "~/components/Footer.vue";
import Pop from "~/components/Pop.vue";

export default {
  components: {
    Nav,
    Footer,
    Pop
  }
};
</script>