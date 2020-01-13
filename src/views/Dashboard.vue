<template>
  <div class="dashboard">
    <h1 subheading class="grey--text">Dashboard</h1>
    <v-container class="my-5">
      <p>This is the Dashboard Page</p>
      <v-btn large depressed>
        <v-icon>email</v-icon>
      </v-btn>
      <v-btn small depressed fab>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "dashboard",
  components: {}
};
</script>
