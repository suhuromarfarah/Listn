<template>
  <div class="dashboard">
    <v-subheader class="grey--text">Dashboard</v-subheader>
    <v-container class="my-5 grey lighten-4">
      <p>This is the Dashboard Page</p>
      <v-row wrap>
        <v-col :xs="4" :md="3">
          <v-btn outlined block>Button 1</v-btn>
        </v-col>
     <v-col :xs="2" :md="3">
          <v-btn outlined block>Button 2</v-btn>
        </v-col>
        <v-col :xs="4" :md="3">
          <v-btn outlined block>Button 3</v-btn>
        </v-col>
      <v-col :xs="2" :md="3">
          <v-btn outlined block>Button 4</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col :xs="6" :md="5">
          <v-btn outlined block>Button 1</v-btn>
        </v-col>
        <v-col :xs="6" :md="5">
          <v-btn outlined block>Button 2</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn depressed block outlined>
            <v-icon>email</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn md6 small depressed fab outlined>
            <v-icon>favorite</v-icon>
          </v-btn>
        </v-col>
      </v-row>
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
