import React from 'react';
import Chart from 'chart.js';

class FilterPage extends React.Component {
  chartRef = React.createRef();

  state = {
    coordinates: [],
    labels: [],
    type: 'line',
    steppedLine: false
  };

  chart;

  componentDidMount() {
    const coordinates = JSON.parse(localStorage.getItem('coordinates'));
    const labels = JSON.parse(localStorage.getItem('labels'));

    this.setState({ coordinates, labels }, () => {
      this.renderChart();
    });
  }

  changeType = e => {
    const steppedLine = e === 'scatter' ? true : false;
    this.setState({ type: e, steppedLine }, () => {
        this.renderChart();
    });
  };

  renderChart() {
    const myChartRef = this.chartRef.current.getContext('2d');
    this.chart = new Chart(myChartRef, {
      type: this.state.type,
      data: {
        labels: this.state.labels,
        datasets: [
          {
            label: 'Points',
            data: this.state.coordinates,
            showLine: true,
            steppedLine: this.state.steppedLine,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  render() {
    return (
      <div className="App container">
        <div className="form-group mt-5">
          <label htmlFor="charttype">Chart Type</label>
          <select onChange={e => this.changeType(e.target.value)} className="form-control" id="charttype">
            <option value="line">Line</option>
            <option value="bar">Bar</option>
            <option value="scatter">Scatter</option>
          </select>
        </div>
        <canvas className="mt-1" id="myChart" ref={this.chartRef}></canvas>
      </div>
    );
  }
}

export default FilterPage;
