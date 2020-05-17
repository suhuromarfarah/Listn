

<template>
  <div v-bind:style="{ background: activeColor}">
    <vue-funnel-graph
      :width="width"
      :height="height"
      :labels="labels"
      :values="values"
      :colors="colors"
      :sub-labels="subLabels"
      :direction="direction"
      :gradient-direction="gradientDirection"
      :animated="true"
      :display-percentage="true"
    ></vue-funnel-graph>
  </div>
</template>

<script>
import { VueFunnelGraph } from "vue-funnel-graph-js";
export default {
  name: "app",
  components: {
    VueFunnelGraph
  },
  data() {
    return {
      activeColor: "#3333cc",

      labels: [
        "Total Songs Listened To",
        "Hours Listened",
        "Average songs added"
      ],
      subLabels: ["Direct", "Social Media", "Ads"],
      values: [
        [3000, 2500, 6500],
        [3000, 1700, 1000],
        [600, 200, 9000]
      ],
      colors: [
        ["#FFB178", "#FF3C8E"],
        ["#A0BBFF", "#EC77FF"],
        ["#A0F9FF", "#7795FF"]
      ],
      direction: "horizontal",
      gradientDirection: "horizontal",
      height: 800,
      width: 1350,
      animated: true
    };
  }
};
</script>

<style>
html {
  background: linear-gradient(45deg, #17ead9, #6078ea);
  height: 100vh;
  margin: 0;
  background-attachment: fixed;
}
</style>

<style scoped>
h1 {
  color: white;
}
</style>
