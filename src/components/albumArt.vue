<template>
  <v-carousel cycle :show-arrows="false">

    <v-carousel-item
     
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            
            src: 'https://www.wallpaperflare.com/static/727/716/934/pink-floyd-triangle-space-planet-wallpaper.jpg',
          },
          {
            src: 'https://cdn.wallpaperhi.com/1920x1080/20180611/5b1df3d479eac.jpg',
          },
          {
            src: 'https://s3.amazonaws.com/rapgenius/659457206512.jpg',
          },
          {
            src: 'https://cdn.vox-cdn.com/thumbor/nE5ajkN4q4Xt2uidE1nwHZrgmis=/0x218:658x657/1200x800/filters:focal(0x218:658x657)/cdn.vox-cdn.com/uploads/chorus_image/image/46718638/c2ce1807.0.0.jpg',
          },
        ],
      }
    },
  }
</script>

