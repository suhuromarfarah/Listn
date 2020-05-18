
<template>
<div class ="background">
  <template v-for="playlist in playlists">
  <v-card :key='playlist' class="mx-10 ma-10" max-width="350" align="center" tile>
   
    <v-card-title :key='playlist' class="justify-center">{{playlist.playlistName}}</v-card-title>
    <v-card-subtitle :key='playlist'>{{playlist.playlistDescription}}</v-card-subtitle>
  

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
            <p class="song" :key='song.id'>{{song.name}}</p>
            
           
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

<style scoped>



.rounded-card{
    border-radius:50px;
    border: 2px solid;
    width: 45px;
    margin: auto;
    display: inline;
    
}

.containers{
  display: inline;
  padding:10px;
}

.song-container{
  width: 100%;
  margin: auto;
  text-align:center;
  padding:10px;
  background-color: lightgrey;
  border: 1px solid black;
  
}
.logo{
  position:absolute;
  right:420px;
  height:35px;
  z-index: 0;
  bottom:105px;
  

}
.song {
  display: inline;
  padding:10px;
}
.delete{
  padding:10px;
}
.background{
  text-align:center;
  /* background-color:gray; */
  padding-top: 300px;
  padding-left: 750px;
 background-image: url('../docs/guitar.jpg');
    height: 100vh;
    background-position: center;
    
    background-size: cover;
    
}
</style>