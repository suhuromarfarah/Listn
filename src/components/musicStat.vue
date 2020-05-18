<template>

<div  id="landing-page">
<!-- <div class = "words">
<h3> Listn Stats</h3>
</div> -->

<div class="img">
    <img src="../docs/stats.png">
  </div>

<div class="imagetwo">
    <img src="../docs/mood.png">
  </div>
<div class="pie" >
     <pieChart/>
    </div>
  <vs-card class="card">
 <v-data-table
    :headers="headers"
    :items="desserts"
    class="elevation-1"
  >

    <template v-slot:item.calories="{ item }">
      <v-chip :color="getColor(item.calories)" dark>{{ item.calories }}</v-chip>
    </template>
  </v-data-table>



    <!-- <div class="bowie" style="maxWidth: 100%">
      <albumArt />
    </div> -->
    

  </vs-card>
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
            name: 'Bohn',
            calories: 56,
            fat: 3.7,
        
          },
          {
            name: 'Garn',
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
     /* background-color: silver; */
    background-image: url('../docs/cool.png');
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
/* background-color: burlywood */
  }
.elevation-1 {
    background-color: #a1c4fd !important;
    /* background-image: url('../docs/music.jpg'); */

       color: black !important;
  font-family: Arial, Helvetica, sans-serif !important;
   font: size 343oem !important;
  position: relative;
top: -520px;
left:1200px  !important;

width: 500px;
}
.bowie{
width: 5000px !important;
/* left:  !important; */
top: 700px !important;
position: absolute;
}
.feet{
    position: relative;

   top: -700px  !important;
}

.pie {
    left:-320px  !important;
    position: relative;
    color:red !important;
top: -100px !important;

}

.name{
/* font-family: ui-rounded;  */
color: white !important;
}
.img{
  left: 1300px;
 top: 10px;

position: relative;
}
.imagetwo{
  left: 520px;
 top: -130px;
position: relative;
}
</style>


