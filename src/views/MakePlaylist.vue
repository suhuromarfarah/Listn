<template>
  <v-card color="grey darken-1" dark :loading="isUpdating">
    <template v-slot:progress>
      <v-progress-linear absolute color="green lighten-3" height="4" indeterminate></v-progress-linear>
    </template>

    <v-row>
      <v-col class="text-right" cols="12">
        <v-menu bottom left transition="slide-y-transition">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
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
      <v-row class="pa-4" align="center" justify="center">
        <v-col class="text-center">
          <h3 class="headline black--text">{{ playlistName }}</h3>
          <h3 class="headline black--text">{{ selectedFruits }}</h3>

          <!-- <span class="black--text text--lighten-1">{{ playlistDescription }}</span> -->

          <template>
            <div class="text-center"></div>
          </template>
        </v-col>
      </v-row>
    </v-row>
    <v-form width="200">
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <v-text-field
              v-model="playlistName"
              :disabled="isUpdating"
              filled
              color="dark-grey lighten-2"
              label="Enter playlist name"
            ></v-text-field>
          </v-col>
          <v-select v-model="selectedFruits" :items="fruits" label="Emotions" multiple>
            <template v-slot:prepend-item>
              <v-list-item ripple @click="toggle">
                <v-list-item-action>
                  <v-icon :color="selectedFruits.length > 0 ? 'indigo darken-4' : ''">{{ icon }}</v-icon>
                </v-list-item-action>
              </v-list-item>
              <v-divider class="mt-2"></v-divider>
            </template>
            <template v-slot:append-item>
              <v-divider class="mb-2"></v-divider>
              <v-list-item disabled>
                <v-list-item-avatar color="grey lighten-3">
                  <v-icon>mdi-food-apple</v-icon>
                </v-list-item-avatar>

                <v-list-item-content v-if="likesAllFruit">
                  <v-list-item-title>Holy smokes, go see a therapist</v-list-item-title>
                </v-list-item-content>

                <v-list-item-content v-else-if="likesSomeFruit">
                  <v-list-item-title>Emotion Count</v-list-item-title>
                  <v-list-item-subtitle>{{ selectedFruits.length }}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-content v-else>
                  <v-list-item-title>How could you not feel anything you heartless monster?</v-list-item-title>
                  <v-list-item-subtitle>Go ahead, Pick a emotion</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-select>

          <!-- Song search field-->
          <v-col cols="12">
            <v-text-field
              filled
              chips
              color="blue-grey lighten-2"
              label="Find a song"
              item-text="songName"
              item-value="songName"
              multiple
              v-model="songName"
            ></v-text-field>

            <!-- 5. import template for youtube video embed-->
            <template v-for="(song,index) in songList">
              <template v-if="show">
                <div :key="index" class="song-container">
                  <v-list>
                    <p @click="change(song.id)">{{song.name}}</p>
                    <button @click="play" :key="song.id">PLAY</button>
                    <button @click="pause" :key="song.id">PAUSE</button>
                    <youtube
                      player-width="30"
                      player-height="30"
                      :player-vars="{ autoplay: 0}"
                      :video-id="song.id"
                      @ready="ready"
                      @playing="playing"
                      :key="song"
                    ></youtube>
                    <!-- <v-list-item-title :src="song" ></v-list-item-title> -->
                    <v-btn
                      class="ma-2"
                      @click="deleteSong(index)"
                      tile
                      color="black"
                      dark
                    >Delete Song</v-btn>
                  </v-list>
                </div>
              </template>
            </template>

            <!-- 1. Added search button that runs load videos function-->

            <template>
              <div class="text-center">
                <v-btn class="ma-2" @click="loadVideos" tile color="black" dark>Search</v-btn>
                <!-- 3. Added add and delete buttons that call add and delete song functions-->
                <v-btn class="ma-2" @click="addSong" tile color="black" dark>Add to Playlist</v-btn>

                <!-- import create button to call create playlist-->
                <v-btn class="ma-2" @click="createPlaylist" tile color="black" dark>Create</v-btn>
                <v-btn class="ma-2" tile color="black" :to="{name: 'playlist'}" dark>Share</v-btn>
              </div>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import PlaylistService from "../PlaylistService";
import YouTube from "simple-youtube-api";
export default {
  name: "MakePlaylist",
  data() {
    return {
      //8. copied all properties from data object
      playlists: [],
      error: "",
      text: "",
      videoId: "",
      songName: "",
      songList: [],
      randomPlaylistID: 0,
      show: true,
      fruits: ["Happy", "Sad", "Amped"],
      selectedFruits: [],

      playlistName: "PlayList Name",
      selectedPriority: "",
      title: "Description"
    };
  },
  computed: {
    likesAllFruit() {
      return this.selectedFruits.length === this.fruits.length;
    },
    likesSomeFruit() {
      return this.selectedFruits.length > 0 && !this.likesAllFruit;
    },
    icon() {
      if (this.likesAllFruit) return "mdi-close-box";
      if (this.likesSomeFruit) return "mdi-minus-box";
      return "mdi-checkbox-blank-outline";
    }
  },
  // 7. Imported created lifecycle hook to load playlists
  async created() {
    try {
      this.playlists = await PlaylistService.getPlaylist();
    } catch (err) {
      this.error = err.message;
    }
  },

  watch: {
    isUpdating(val) {
      if (val) {
        setTimeout(() => (this.isUpdating = false), 3000);
      }
    }
  },

  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.selectedFruits = [];
        } else {
          this.selectedFruits = this.fruits.slice();
        }
      });
    }
  },
  checkForm: function(e) {
    if (this.playlistName && this.songName) {
      return true;
    }

    this.errors = [];

    if (!this.playlistName) {
      this.errors.push("playlistName required.");
    }
    if (!this.songName) {
      this.errors.push("songName required.");
    }

    e.preventDefault();
  },

  //9. added ready and delete methods
  ready(event) {
    this.player = event.target;
  },
  deleteSong(index) {
    this.songList.splice(index, 1);
  },
  remove(item) {
    const index = this.friends.indexOf(item.name);
    if (index >= 0) this.friends.splice(index, 1);
  },
  //2. Import load videos fucntion to get video from youtube
  loadVideos() {
    // console.log("pressed");

    const youtube = new YouTube("AIzaSyDE30mc6o10LSEGniZ7DKvOWV84hKa-u00");
    youtube
      .searchVideos(this.songName + "lyrics", 4)
      .then(results => {
        this.songName = results[0].title;
        this.videoId = results[0].id;
      })
      .catch(error => {
        throw error;
        // console.log(error);
      });
  },
  //4. Imported add song method which adds song to array
  addSong() {
    if (this.videoId && !this.songList.includes(this.videoId)) {
      this.songList.push({ id: this.videoId, name: this.songName });
    }
    this.songName = "";
    this.show = true;
  },
  //6. import methods for button functionality
  change(song) {
    alert(song);
    this.videoId = song;
  },
  pause(e) {
    e.preventDefault();
    this.player.pauseVideo();
  },
  play(e) {
    e.preventDefault();
    this.player.playVideo();
  },
  //11. Added create and delete playlist methods which interact with backend
  async createPlaylist() {
    await PlaylistService.insertPlaylist(
      this.songList,
      this.playlistName,
      this.playlistDescription
    );
    this.playlists = await PlaylistService.getPlaylist();
    this.show = false;
    this.songList = [];
    this.playlistName = "";
    this.playlistDescription = "";
  },

  async deletePlaylist() {
    await PlaylistService.deletePlaylist();
    this.playlists = await PlaylistService.getPlaylist();
  }
};
</script>

<style scoped>
button {
  border: 4px solid #41b883;
  padding: 12px 24px;
  transition: 0.25s ease-in-out all;
}

button:hover {
  color: white;
  background-color: #41b883;
}
</style>