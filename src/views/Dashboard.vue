<template>
<v-container class='container' fluid width>
  
  <video width="100%" height="100%" autoplay  muted  loop>
  <source src="../assets/music2.mp4" type="video/mp4" />
    </video>

    <v-col class="text-center" cols="12">
      <h1>Listn</h1>
      <h4>Playlist just for you</h4>
    </v-col>

 </v-container>

</template>

<style scoped>
.text-center {
  position: absolute;
  z-index: 1;
  top: 200px;
  font-size: 25px;
  font-family: 'Libre Caslon Text', serif;
  color: black; 
  display: block;
}

.container{
  position:relative;
  width:100%;
  padding:0;
  
}
.container video{
  position:relative;
  z-index: 0;
  padding:0;
  margin:0;
}  
</style>