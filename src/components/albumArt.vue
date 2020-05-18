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
            
            src: 'https://img.discogs.com/tP-GigZ-XZquQ1ig0S3ybx7L7yc=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-372268-1255068468.jpeg.jpg',
          },
          {
            src: 'https://i.ytimg.com/vi/lXUuiz1aBHs/maxresdefault.jpg',
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/en/7/7b/David_Bowie_-_Heroes.png',
          },
          {
            src: 'https://upload.wikimedia.org/wikipedia/en/1/16/Justin_Bieber_-_Changes.png',
          },
        ],
      }
    },
  }
</script>

