<script>
import '../vendor/Chart.min.js';
import { Line } from '../vendor/vue-chartjs.min.js';

export default {
  extends: Line,
  name: 'ComponentGraph',

  data() {
    return {
      chartData: {
        datasets: [{
					label: 'CHRT - Chart.js Corporation',
					backgroundColor: '#ff9933',
					borderColor: '#ff0000',
					data: [40,20,12,39],
					type: 'line',
					pointRadius: 0,
					fill: false,
					lineTension: 0,
					borderWidth: 2
				}]
      },
      /*
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'GitHub Commits',
            backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          }
        ]
      },*/
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted () {
    this.renderChart(this.stats);
  },
  props: ['stats']
}
</script>

<style scoped>
p {
  font-size: 20px;
  text-align: center;
}
</style>