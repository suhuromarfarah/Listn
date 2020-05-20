<script>
import { Pie } from "vue-chartjs";

export default {
  extends: Pie,
  mounted() {
    this.gradient = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
      .getContext("2d")
      .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(1, "rgba(255, 44, 44, 0.9)");
    this.gradient.addColorStop(1, "rgba(255, 0, 0, 0.25)");
    this.gradient.addColorStop(1, "rgba(246, 185, 255, 0.9)");

    this.gradient2.addColorStop(1, "rgba(246, 185, 255, 0.9)");
    this.gradient2.addColorStop(1, "rgba(246, 185, 44, 0.9)");
    this.gradient2.addColorStop(1, "rgba(246, 185, 44, 0.9)");
    this.renderChart(
      {
        labels: ["😁 Happy", " 😢 Sad", "🥰 Romantic", "😌 Calm", "🥳 Party"],
        datasets: [
          {
            backgroundColor: [this.gradient, this.gradient2, "#00D8FF","#DAA520","#000080"],
            data: [40, 20, 25,10,15]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>


