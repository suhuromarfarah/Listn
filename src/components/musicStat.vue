<template>

<div  id="landing-page">
<!-- <div class = "words">
<h3> Listn Stats</h3>
</div> -->

<div class="pie" >
<h1> Top Moods</h1>
     <pieChart/>
    </div>

  <!-- <vs-card class="card"> -->
    <div class="chart">
<h1> LISTN Music Stats</h1>
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


  

 

</div>

</template>

<script>
// import albumArt from "./albumArt";
import pieChart from "./pieChart.vue";

export default {
  name: "Performance",
  components: {
    // albumArt,
    pieChart
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
            fat: 6.0,
            
          },
          {
            name: 'Gooba',
            calories: 50,
            fat: 9.0,
            
          },
          {
            name: 'Baby',
            calories: 45,
            fat: 16.0,
            
          },
          {
            name: 'Party for one',
            calories: 20,
            fat: 3.7,
           
          },
          {
            name: 'Heroes',
            calories: 10,
            fat: 16.0,
            
          },
          {
            name: 'Life on mars',
            calories: 47,
            fat: 0.0,
           
          },
   {
            name: 'Skyfall',
            calories: 56,
            fat: 3.7,
        
          },
          {
            name: 'Hello',
            calories: 77,
            fat: 16.0,
           
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
  height:580px;
  width:520px;
  padding:20px;
  margin-left:1000px;
  bottom:480px;
  border: 1px solid black;
 text-align: center;
  position: relative;
  font-family: Arial, Helvetica, sans-serif !important;
  border-radius:10%;
color:red;

}

.elevation-1 {
    background-color: lightgray !important;
    /* background-image: url('../docs/music.jpg'); */

       color: black !important;
  font-family: Arial, Helvetica, sans-serif !important;
   font: size 343oem !important;

}




.pie {
    left:-320px  !important;
    position: relative;
    color:red !important;
top: 100px !important;
  background-color: grey !important;
  height:580px;
  width:520px;
  margin-left: 600px;
  border: 1px solid black;
 text-align: center;
 border-radius:10%;
 padding:20px;
}





.name{
/* font-family: ui-rounded;  */
color: white !important;
}


</style>


