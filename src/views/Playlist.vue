
<template>
  <div class="background">
    <div class="center">
      <template v-for="playlist in playlists">
        <v-card :key="playlist" class="play" max-width="400" align="center" tile>
          <h1>{{playlist.playlistName}}</h1>
          <h2>{{playlist.playlistDescription}}</h2>
          <template v-for="(song,index)  in playlist.songs">
            <div :key="index" class="song-container">
              <youtube
                player-width="20"
                player-height="20"
                :video-id="song.id"
                @ready="ready"
                @playing="playing"
                :key="index"
                class="rounded-card"
              ></youtube>
              <p class="song" :key="song.id">{{song.name.replace('Lyrics','')}}</p>
            </div>
          </template>
          <v-btn class="ma-2" @click="share" tile color="black" dark>Share</v-btn>
        </v-card>
      </template>
    </div>
  </div>
</template>

<script>
import PlaylistService from "../PlaylistService";
import YouTube from "simple-youtube-api";
export default {
  data() {
    return {
      playlists: [],
      error: "",
      show: true
    };
  },
  async created() {
    try {
      this.playlists = await PlaylistService.getPlaylist();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
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
    ready(event) {
      this.player = event.target;
    },
    pause() {
      this.player.pauseVideo();
    },
    play() {
      this.player.playVideo();
    },
    async deletePlaylist() {
      await PlaylistService.deletePlaylist();
      this.playlists = await PlaylistService.getPlaylist();
    },
    change() {}
  }
};
</script>

<style scoped>
.center {
  margin: auto;
  padding-top: 200px;
}
.rounded-card {
  border-radius: 10%;
  border: 2px solid;
  margin: auto;
  display: inline;
}
.containers {
  display: inline;
  padding: 10px;
}
.song-container {
  width: 100%;
  margin: auto;
  padding: 10px;
  background-color: lightgrey;
  border: 1px solid black;
  text-align: left;
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
.background {
  text-align: center;
  background-image: url("../docs/guitar.jpg");
  height: 800px;
  background-position: center;
  background-size: cover;
}
.line {
  border-top: 1px solid black;
}
.form {
  width: 50%;
  margin: auto;
  padding: 30px;
  margin-top: -100px;
  left: -300px;
  border: 2px solid black;
  border-radius: 10%;
  position: relative;
}
.play {
  border-radius: 10%;
  margin: auto;
}
h2 {
  font-weight: 400;
}
</style>