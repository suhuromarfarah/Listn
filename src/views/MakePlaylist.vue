<template >
  <v-card dark :loading="isUpdating" class="card">
    <div class="sizing">
      <v-container class="size">
        <v-row class="pa-4" align="center" justify="center">
          <v-col class="text-center">
            <h3 class="headline black--text">{{ playlistName }}</h3>
            <h3 class="headline black--text">{{ playlistDescription }}</h3>
          </v-col>
        </v-row>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="playlistName"
                :disabled="isUpdating"
                filled
                background-color="grey"
                label="Enter playlist name"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="playlistDescription"
                :disabled="isUpdating"
                filled
                label="Enter playlist description"
                background-color="grey"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                filled
                chips
                label="Find a song"
                item-text="songName"
                item-value="songName"
                multiple
                background-color="grey"
                v-model="songName"
              ></v-text-field>
              <template v-for="(song,index) in songList">
                <template v-if="show">
                  <div :key="index" class="song-container">
                    <v-list>
                      <youtube
                        player-width="20"
                        player-height="20"
                        :video-id="song.id"
                        @ready="ready"
                        @playing="playing"
                        :key="song"
                        class="rounded-card"
                      ></youtube>
                      <p class="song">{{song.name.replace('Lyrics','')}}</p>
                      <button class="delete" @click="deleteSong(index)" :key="song">DELETE</button>
                    </v-list>
                  </div>
                </template>
              </template>
              <template>
                <div class="text-center">
                  <v-btn class="ma-2" @click="loadVideos" tile color="black" dark>Search</v-btn>
                  <v-btn class="ma-2" @click="addSong" tile color="black" dark>Add to Playlist</v-btn>
                  <v-btn class="ma-2" @click="createPlaylist" tile color="black" dark>Create</v-btn>
                </div>
              </template>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </div>
  </v-card>
</template>

<script>
import PlaylistService from "../PlaylistService";
import YouTube from "simple-youtube-api";
export default {
  name: "MakePlaylist",
  data() {
    return {
      playlists: [],
      error: "",
      text: "",
      videoId: "",
      songName: "",
      songList: [],
      randomPlaylistID: 0,
      show: true,
      playlistName: "PlayList Name",
      playlistDescription: "Playlist Description",
      title: "Description"
    };
  },
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
    loadVideos() {
      const youtube = new YouTube("AIzaSyDSltiKOPVIfCL8wKR_UhSAgkI8YkS5jz4");
      youtube
        .searchVideos(this.songName + "lyrics", 4)
        .then(results => {
          this.songName = results[0].title;
          this.videoId = results[0].id;
        })
        .catch(error => {
          throw error;
        });
    },
    addSong() {
      if (this.videoId && !this.songList.includes(this.videoId)) {
        this.songList.push({ id: this.videoId, name: this.songName });
      }
      this.songName = "";
      this.show = true;
    },
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
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 50px;
  border: 2px solid;
  width: 45px;
  margin: auto;
  display: inline;
}
.containers {
  display: inline;
  padding: 10px;
}
.song-container {
  width: 90%;
  margin: auto;
  text-align: center;
  padding: 10px;
}
.logo {
  position: absolute;
  right: 420px;
  height: 35px;
  z-index: 0;
  bottom: 105px;
}
.song {
  display: inline;
  padding: 10px;
}
.delete {
  padding: 10px;
}
.card {
  height: 1100px;
  justify-items: center;
  background-image: url("../assets/bg.jpg");
  background-position: center;
  background-size: cover;
}
.size {
  width: 700px;
  padding-top: 100px;
}
.color {
  color: "black";
}
.sizing {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


