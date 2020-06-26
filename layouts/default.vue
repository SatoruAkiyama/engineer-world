<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>


<script>
import Header from "@/components/nav/Header";
import Footer from "@/components/nav/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>