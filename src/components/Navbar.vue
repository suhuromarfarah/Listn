<template>
  <nav>
    <v-app-bar class="mx-12" flat app text color="transparent" transparent>
      <v-toolbar-title>
        <span>Listn</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text color="black" :to="{name: 'dashboard'}">
        Home
      </v-btn>

      <v-btn text color="black" :to="{name: 'login'}">
        Login
      </v-btn>
    
      <v-btn text color="black" :to="{name: 'MakePlaylist'}">
        Make a playlist
      </v-btn>


    </v-app-bar>
  </nav>
</template>

<script>
export default {
};
</script>


