<template>
  <v-card
    color="grey darken-1"
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
            <h3 class="headline black--text">{{ playlistName }}</h3>
            <h3 class="headline black--text">{{ playlistDescription }}</h3>


            <template>
              <div class="text-center">

             

              </div>
            </template>

          </v-col>
        </v-row>
      </v-row>
    <v-form width="200">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <v-text-field
              v-model="playlistName"
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
              v-model="playlistDescription"
              :disabled="isUpdating"
              filled
              color="blue-grey lighten-2"
              label="Enter playlist description"
            ></v-text-field>
          </v-col>

          <!-- Song search field-->
          <v-col cols="12" >
            <v-text-field 
              filled
              chips
              color="blue-grey lighten-2"
              label="Find a song"
              item-text="songName"
              item-value="songName"
              multiple
              v-model="songName"
            >
            
            </v-text-field>

      <template v-for="(song,index) in songList">
        <template v-if="show">
          <div :key="index" class="song-container">
            <v-list>

              
        
            <!-- <img class='logo' src="../assets/test.png"> -->
            <youtube
              player-width="20"
              player-height="20"
              
              :video-id="song.id"
              @ready="ready"
              @playing="playing"
              :key="song"
              class="rounded-card"
            ></youtube>
            <p class="song">{{song.name}}</p>
       <button class="delete" @click="deleteSong(index)" :key="song">DELETE</button>
            </v-list>
            
          </div>
        </template>
      </template>
            
            <template>
              <div class="text-center">
            <v-btn class="ma-2" @click="loadVideos" tile color="black" dark>Search</v-btn>
            <!-- 3. Added add and delete buttons that call add and delete song functions-->
            <v-btn class="ma-2" @click="addSong" tile color="black" dark>Add to Playlist</v-btn>
            
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
    data () {
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
      }
    },
    async created() {
    try {
      this.playlists = await PlaylistService.getPlaylist();
    } catch (err) {
      this.error = err.message;
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
      ready(event) {
      this.player = event.target;
    },
    deleteSong(index) {
      this.songList.splice(index, 1);
    },
      remove (item) {
        const index = this.friends.indexOf(item.name)
        if (index >= 0) this.friends.splice(index, 1)
      },
      //2. Import load videos fucntion to get video from youtube
        loadVideos() {
      const youtube = new YouTube("AIzaSyDSltiKOPVIfCL8wKR_UhSAgkI8YkS5jz4");

      youtube
        .searchVideos(this.songName + "lyrics", 4)
        .then(results => {
          this.songName = results[0].title;
          this.videoId = results[0].id;
        })
        .catch(error => {
          throw(error);
          // console.log(error);
        });
    },
    //4. Imported add song method which adds song to array
    addSong() {
      if (this.videoId && !this.songList.includes(this.videoId)) {
        this.songList.push({'id':this.videoId , 'name':this.songName});
      }
       this.songName = "";
      this.show = true;
    },
    //6. import methods for button functionality
    change(song) {
      alert(song)
      this.videoId = song;
    },
    pause(e) {
      e.preventDefault()
      this.player.pauseVideo();
    },
    play(e) {
       e.preventDefault()
      this.player.playVideo();
    },
    //11. Added create and delete playlist methods which interact with backend
      async createPlaylist() {
      await PlaylistService.insertPlaylist(this.songList, this.playlistName,this.playlistDescription);
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
    },
  }
</script>

<style scoped>
.rounded-card{
    border-radius:50px;
    border: 2px solid;
    width:45px;
    margin: auto;
    display: inline;
    
}

.containers{
  display: inline;
  padding:10px;
}

.song-container{
  width: 70%;
  margin: auto;
  text-align:center;
  padding:10px;
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

</style>

