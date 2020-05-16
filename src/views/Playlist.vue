
<template>
<div>
  <template v-for="playlist in playlists">
  <v-card :key='playlist' class="mx-10 ma-10" max-width="300" align="center" tile>
   
    <v-card-title :key='playlist' class="justify-center">{{playlist.playlistName}}</v-card-title>
    <v-card-subtitle :key='playlist'>{{playlist.playlistDescription}}</v-card-subtitle>
    <v-list-item :key='playlist'>
      <v-list-item-icon class="mx-10">
        <v-btn icon>
          <v-icon>mdi-rewind</v-icon>
        </v-btn>
      </v-list-item-icon>

      <v-list-item-icon :class="{ 'mx-0': $vuetify.breakpoint.mdAndUp }">
        <v-btn icon>
          <v-icon>mdi-pause</v-icon>
        </v-btn>
      </v-list-item-icon>

      <v-list-item-icon class="ml-10" :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
        <v-btn icon>
          <v-icon>mdi-fast-forward</v-icon>
        </v-btn>
      </v-list-item-icon>
    </v-list-item>

   <template v-for="(song,index)  in playlist.songs">
          
             <div :key="index" class="song-container">
               <p :key='song.id'>{{song.name}}</p>
            <youtube
              player-width="0"
              player-height="0"
              :video-id="song.id"
              @ready="ready"
              @playing="playing"
              :key="index"
            ></youtube>
            <button @click="play" :key="song">PLAY</button>
            <button @click="pause" :key="song">PAUSE</button>
           
          </div>
        </template>
     
 </v-card>
  </template>
   </div>
</template>

<script>
import PlaylistService from "../PlaylistService";
import YouTube from "simple-youtube-api";
export default {
  data() {
    return{
      playlists: [],
      error:'',
      show: true,
    }
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
    change(){
      
    }
  }
};
</script>
