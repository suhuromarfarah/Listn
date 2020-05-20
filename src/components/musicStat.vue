<template>

<div  id="landing-page">
<div  id="flex">

<div class="pie" >
<h1> Top Moods</h1>
<hr class ='line'>
     <pieChart/>
    </div>

 <div class="chart">
  <h1> LISTN Top 10 Songs</h1>
  <hr class ='line'>
 <v-data-table
    dark
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  > </v-data-table>
  </div>
  </div>
</div>
</template>

<script>
import pieChart from "./pieChart.vue";
export default {
  name: "Performance",
  components: {
    pieChart,
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

#flex{
  display: flex;
  justify-content: space-around;
  padding-top: 100px;
   }
#landing-page {
  background-image: url('../assets/bg.jpg');
  height: 900px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
.chart{
  height:600px;
  width:520px;
 text-align: center;
  position: relative;
  font-family: Arial, Helvetica, sans-serif !important;
color:black;
   }
.elevation-1 {
    /* background-image: url('../docs/music.jpg'); */
   background-color: transparent;
       color: white !important;
  font-family: Arial, Helvetica, sans-serif !important;
   font: size 343oem !important;
  }
.line{
  border-top:1px solid black;
  margin-bottom:20px;
  margin-top: 10px;
}
.pie {
  height:400px;
  width:320px;
 text-align: center;
  position: relative;
  font-family: Arial, Helvetica, sans-serif !important;
color:black;
}
.name{
/* font-family: ui-rounded;  */
color: white !important;
}
.art{
    position: relative;

 
}
</style>