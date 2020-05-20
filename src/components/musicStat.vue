<template>

<div  id="landing-page">
<!-- <div class = "words">
<h3> Listn Stats</h3>
</div> -->

<div class="pie" >
<h1> Top Moods</h1>
<hr class ='line'>
     <pieChart/>
    </div>
<div class="trend" >
     <trending/>
    </div>
  <!-- <vs-card class="card"> -->
    <div class="chart">
<h1> LISTN Top 10 Songs</h1>
<hr class ='line'>
 <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >

    <!-- <template v-slot:item.calories="{ item }">
      <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
    </template> -->
  </v-data-table>
  </div>
 <!-- </vs-card> -->

<div class = "art">
  <v-carousel cycle :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in itemstwo"
      :key="i"
      :src="item.src"
      height: 100em
    ></v-carousel-item>
  </v-carousel>
 </div>

<!-- <div class = "arttwo">
   <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
 </div> -->



</div>

</template>

<script>
// import albumArt from "./albumArt";
import pieChart from "./pieChart.vue";
import trending from "./trending.vue";

export default {
  name: "Performance",
  components: {
    // albumArt,
    pieChart,
    trending
   
  },
  data() {
    return {
      headers: [
          {
            text: 'Top Songs',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Times Played', value: 'calories' },
          { text: 'Total Hours Listened', value: 'fat' },
       
        ],
        desserts: [
          {
            name: 'Paper Bag',
            calories: 100,
            fat: 1,
            
          },
          {
            name: 'Gooba',
            calories: 50,
            fat: 2,
            
          },
          {
            name: 'Baby',
            calories: 45,
            fat: 1,
            
          },
          {
            name: 'Party for one',
            calories: 20,
            fat: 3.7,
           
          },
          {
            name: 'Heroes',
            calories: 10,
            fat: 1,
            
          },
          {
            name: 'Life on mars',
            calories: 47,
            fat: 3,
           
          },
   {
            name: 'Skyfall',
            calories: 56,
            fat: 2,
        
          },
          {
            name: 'Hello',
            calories: 77,
            fat: 1,
           
          },
         
          
        ],
itemstwo: [
          {
            src: 'https://www.albumartexchange.com/coverart/gallery/fi/fionaapple_extraordinarymachine_40b.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    };
  },
  methods: {
   getColor (calories) {
        if (calories > 80) return 'red'
        else if (calories > 50) return 'blue'
        else return 'green'
      },
    },
  
};
</script>

<style >
   #landing-page {
  /* background-color: white; */
    background-image: url('../docs/player.png');
    height: 1200px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* position: relative; */
/* background-color: burlywood */
  }
.chart{
    background-color: black!important;
  height:600px;
  width:520px;
  padding:20px;
  margin-left:535px;
  bottom:1600px;
  border: 1px solid black;
 text-align: center;
  position: relative;
  font-family: Arial, Helvetica, sans-serif !important;
  border-radius:10%;
color:white;

}

.elevation-1 {
    background-color: #696969 !important;
    /* background-image: url('../docs/music.jpg'); */
   
       color: black !important;
  font-family: Arial, Helvetica, sans-serif !important;
   font: size 343oem !important;

}
.line{
  border-top:1px solid black;
  margin-bottom:10px;
}

.pie {
    left:-350px  !important;
    position: relative;
    color:white !important;
top: 40px !important;
  background-color: black !important;
  height:600px;
  width:520px;
  margin-left:360px;
  border: 1px solid black;
 text-align: center;
 border-radius:10%;
 padding:20px;
}





.name{
/* font-family: ui-rounded;  */
color: white !important;
}
.art{
    position: relative;
  bottom:1600px;
width:43%;
left:-2em;


}
/* 
.arttwo{
    position: relative;
  bottom:1700px;
width:20%;
left:0em;


} */
.trend{

  position: relative;
left:12em;
bottom:550px;

}
</style>


