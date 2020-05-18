<template>
  <v-app>
    <navbar />
    <v-content class="ma-0 mb-0">
      <router-view/>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: { Navbar, Footer },
  data: () => ({
    //
  })
};
</script>
