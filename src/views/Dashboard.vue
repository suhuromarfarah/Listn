<template>

<v-container class='container' fluid>
  
    <video width="100%" height="100%" autoplay  muted  loop>
    <source src="../assets/music.mp4" type="video/mp4" />
     </video>
      <v-col class="text-center" cols="12">
        <h1 id='heading' class="display-1 font-weight-thin mb-4 align-center">Listn</h1>
        <h4 class="subheading align-center">Make a playlist for a friend today!</h4>
      </v-col>
     
 </v-container>

</template>
<style scoped>
.text-center {
  position: absolute;
  z-index: 1;
  
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