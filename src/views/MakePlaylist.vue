<template>
  <v-card
    color="darkgrey darken-1"
    dark
    :loading="isUpdating"
  >
    <template v-slot:progress>
      <v-progress-linear
        absolute
        color="green lighten-3"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="300"
      src="https://source.unsplash.com/5gn2soeAc40/1600x900"
    >
      <v-row>
        <v-col
          class="text-right"
          cols="12"
        >
          <v-menu
            bottom
            left
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="isUpdating = true">
                <v-list-item-action>
                  <v-icon>mdi-settings</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>Update</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-row
          class="pa-4"
          align="center"
          justify="center"
        >
          <v-col class="text-center">
            <h3 class="headline black--text">{{ name }}</h3>
            <span class="black--text text--lighten-1">{{ title }}</span>

            <template>
              <div class="text-center">
                <v-btn class="ma-2" tile color="black" dark>Save</v-btn>
                <v-btn class="ma-2" tile color="black" dark :to="{name: 'playlist'}" >Share</v-btn>
              </div>
            </template>

          </v-col>
        </v-row>
      </v-row>
    </v-img>
    <v-form width="200">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="name"
              :disabled="isUpdating"
              filled
              color="dark-grey lighten-2"
              label="Enter playlist name"
            ></v-text-field>
            
          </v-col>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="title"
              :disabled="isUpdating"
              filled
              color="blue-grey lighten-2"
              label="Enter playlist description"
            ></v-text-field>
          </v-col>
          <v-col cols="12" >
            <v-autocomplete 
              filled
              chips
              color="blue-grey lighten-2"
              label="Song"
              item-text="name"
              item-value="name"
              multiple
            >
            </v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
              filled
              chips
              color="blue-grey lighten-2"
              label="Song"
              item-text="name"
              item-value="name"
              multiple
            >
            </v-autocomplete>
          </v-col>

          <v-col cols="12">
            <v-autocomplete
              filled
              chips
              color="blue-grey lighten-2"
              label="Song"
              item-text="name"
              item-value="name"
              multiple
            >
            </v-autocomplete>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

  </v-card>
</template>

<script>
  export default {
    data () {
      const srcs = {
        1: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        2: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        3: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        4: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        5: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
      }

      return {
        autoUpdate: true,
        friends: ['Sandra Adams', 'Britta Holt'],
        isUpdating: false,
        name: 'Playlist Name',
        people: [
          { header: 'Group 1' },
          { name: 'Sandra Adams', group: 'Group 1', avatar: srcs[1] },
          { name: 'Ali Connors', group: 'Group 1', avatar: srcs[2] },
          { name: 'Trevor Hansen', group: 'Group 1', avatar: srcs[3] },
          { name: 'Tucker Smith', group: 'Group 1', avatar: srcs[2] },
          { divider: true },
          { header: 'Group 2' },
          { name: 'Britta Holt', group: 'Group 2', avatar: srcs[4] },
          { name: 'Jane Smith ', group: 'Group 2', avatar: srcs[5] },
          { name: 'John Smith', group: 'Group 2', avatar: srcs[1] },
          { name: 'Sandra Williams', group: 'Group 2', avatar: srcs[3] },
        ],
        title: 'Description',
      }
    },

    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },

    methods: {
      remove (item) {
        const index = this.friends.indexOf(item.name)
        if (index >= 0) this.friends.splice(index, 1)
      },
    },
  }
</script>

