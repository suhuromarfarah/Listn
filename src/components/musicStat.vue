<template>
  <vs-card class="card">
    <div slot="header">
      <h2>LISTN</h2>
    </div>

    <vs-card fixedHeight v-if="this.cardContent === 1">
      <div slot="header">
        <h2 class="innerCard">LISTN Stats</h2>
      </div>
      <div slot="media">
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
        <!-- <VueChartjs/> -->
      </div>
      <vs-divider />
      <vs-row>
        <vs-col vs-w="1" vs-offset="10">
          <div class="footer">
            <vs-button
              type="line"
              color="#0bd370"
              v-if="cardContent > 1"
              @click="changeContent(-1)"
            >Previous</vs-button>
          </div>
        </vs-col>
        <vs-col vs-w="1">
          <div class="footer">
            <vs-button
              type="line"
              color="#0bd370"
              v-if="cardContent < 3"
              @click="changeContent(1)"
            >Next</vs-button>
          </div>
        </vs-col>
      </vs-row>
    </vs-card>

    <vs-card fixedHeight v-if="this.cardContent === 2">
      <div slot="header">
        <h2 class="innerCard">Listn Song Analysis</h2>
      </div>
      <div slot="media">
        <!-- <VueChartjs/> -->
      </div>
      <vs-divider />
      <vs-row>
        <vs-col vs-w="1" vs-offset="10">
          <div class="footer">
            <vs-button
              type="line"
              color="#0bd370"
              v-if="cardContent > 1"
              @click="changeContent(-1)"
            >Previous</vs-button>
          </div>
        </vs-col>
        <vs-col vs-w="1">
          <div class="footer">
            <vs-button
              type="line"
              color="#0bd370"
              v-if="cardContent < 3"
              @click="changeContent(1)"
            >Next</vs-button>
          </div>
        </vs-col>
      </vs-row>
    </vs-card>

    <vs-card fixedHeight v-if="this.cardContent === 3">
      <div slot="header">
        <h2 class="innerCard">Static Volume Analysis</h2>
      </div>
      <div slot="media">
        <!-- <VueChartjs/> -->
      </div>
      <vs-divider />
      <vs-row>
        <vs-col vs-w="1" vs-offset="10">
          <div class="footer">
            <vs-button
              type="line"
              color="#0bd370"
              v-if="cardContent > 1"
              @click="changeContent(-1)"
            >Previous</vs-button>
          </div>
        </vs-col>
        <vs-col vs-w="1">
          <div class="footer">
            <vs-button
              type="line"
              color="#0bd370"
              v-if="cardContent < 3"
              @click="changeContent(1)"
            >Next</vs-button>
          </div>
        </vs-col>
      </vs-row>
    </vs-card>
  </vs-card>
</template>

<script>
import { VueFunnelGraph } from "vue-funnel-graph-js";
export default {
  name: "Performance",
  components: {
    VueFunnelGraph
  },
  data() {
    return {
      cardContent: 1,
      labels: ["Music", "Music", "Music"],
      subLabels: [">60 Paper Bag", "<60 Gooba", "<30 Heroes"],
      values: [
        [356, 512 - 356, 0], // Segments of "Impressions" from top to bottom
        [158, 71, 10], // Segments of "Add To Cart"
        [6, 2, 13] // Segments of "Buy"
      ],
      colors: [
        ["#FFB178", "#FF3C8E"], // color set for "Impressions" segment
        ["#A0BBFF", "#EC77FF"], // color set for "Add To Cart" segment
        ["#A0F9FF", "#7795FF"] // color set for "Buy" segment
      ],
      direction: "horizontal",
      gradientDirection: "horizontal",
      height: 300,
      width: 800
    };
  },
  methods: {
    changeContent(arg) {
      this.cardContent += arg;
    }
  }
};
</script>

<style scoped>
p {
  text-align: left;
}
.card {
  background-color: #0917d9;
}
.innerCard {
  color: #fc1d6d;
}
.footer {
  padding-right: 15px;
}
</style>