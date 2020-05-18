<template>

<div  id="landing-page">
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


<div class="pie" >
     <pieChart/>
    </div>
    <div class="bowie" style="maxWidth: 100%">
      <albumArt />
    </div>
    <div class="zowie" style="maxWidth: 100%">
      <albumArt />
    </div>
<div class="feet" >
    <foot />
 </div>
  </vs-card>
</div>
</template>

<script>
import albumArt from "./albumArt";
import pieChart from "./pieChart.vue";

import foot from "./foot";

export default {
  name: "Performance",
  components: {
    albumArt,
    pieChart,
    foot
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
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Gooba',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Baby',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Gooda',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Goomba',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Gooda',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          
        ],
    };
  },
  methods: {
   getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
    },
  
};
</script>

<style >
   #landing-page {
     /* background-color: burlywood; */
    background-image: url('../docs/guitar.jpg');
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
/* background-color: burlywood */
  }
.elevation-1 {
    /* background-color:transparent !important; */
    background-image: url('../docs/music.jpg');

       color: balck !important;
  font-family: Arial, Helvetica, sans-serif !important;
   font: size 343oem !important;

}
.bowie{

width: 500px !important;
left:-1px  !important;
    position: relative ;
top: -400px !important;

}
.feet{
    position: relative;

   top: -700px  !important;
}

.pie {
    left:300px  !important;
    position: relative;
    color:red !important;
top: -1px !important;

}


.zowie{

width: 500px !important;
left:500px  !important;
    position: relative ;
top: -900px !important;

}

</style>