<template>
  <v-card
    max-width="800"
    class="mx-auto"
    color="black"
  >
    <v-system-bar
      color="black darken-2"
      dark
    >
      <v-spacer></v-spacer>

    
    </v-system-bar>

    <v-app-bar
      dark
      color="black"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Trending Music</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">Make a playlist now and be a part of the stats</v-card-title>

            <v-card-subtitle>Just click the button!.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Make playlist</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Paper Bag',
          artist: 'Fionna Apples',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Paper Bag',
          artist: 'Fiona Apples',
        },
 {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Paper Bag',
          artist: 'Fiona Apples',
        },
 {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Paper Bag',
          artist: 'Fiona Apples',
        },
 {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Paper Bag',
          artist: 'Fiona Apples',
        },
      ],
    }),
  }
</script>