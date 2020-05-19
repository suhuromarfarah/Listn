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
<carousel-3d>
  <slide :index="0">
    <img src="../docs/artone.jpg" style="width:100%">  </slide>
  <slide :index="1">
    <img src="../docs/arttwo.jpg" style="width:100%"> 
  </slide>
 <slide :index="2">
    <img src="../docs/artthree.jpg" style="width:100%">  
  </slide>
</carousel-3d>
 </div>

</div>

</template>

<script>
// import albumArt from "./albumArt";
import pieChart from "./pieChart.vue";
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  name: "Performance",
  components: {
    // albumArt,
    pieChart,
    Carousel3d,
    Slide
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
  /* background-color: grey; */
    background-image: url('../docs/player.png');
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* position: relative; */
/* background-color: burlywood */
  }
.chart{
    background-color: grey!important;
  height:600px;
  width:520px;
  padding:20px;
  margin-left:1100px;
  bottom:500px;
  border: 1px solid black;
 text-align: center;
  position: relative;
  font-family: Arial, Helvetica, sans-serif !important;
  border-radius:10%;
color:black;

}

.elevation-1 {
    background-color: lightgray !important;
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
    color:black !important;
top: 100px !important;
  background-color: grey !important;
  height:600px;
  width:520px;
  margin-left: 850px;
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
margin-left:100px;
  bottom:465px;
 

}

</style>


