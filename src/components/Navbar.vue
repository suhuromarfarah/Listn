<template>
  <nav>
    <v-app-bar app text color="transparent" transparent>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span>Listn</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        Sign in
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-navigation-drawer app v-model="drawer" >
      <v-list >
        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-action>
            <v-icon >{{link.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title >{{link.text}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "Home", route: "/" },
        { icon: "info", text: "Make a playlist", route: "/MakePlaylist" },
        { icon: "info", text: "Login", route: "/login" }
      ]
    };
  }
};
</script>


