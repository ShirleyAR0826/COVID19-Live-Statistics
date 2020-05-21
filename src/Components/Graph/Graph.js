import React, {Component} from 'react';
import Chart from 'chart.js';
import './Graph.css';

class Graph extends Component {
    constructor(props) {
      super(props);
      this.canvasRef = React.createRef();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.canvasRef.current, {
        type: 'bar',
        options: {
            maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  min: 0
                  //max: 45000
                }
              }
            ]
          }
        },
        data: {
          labels: this.props.Countries.slice(0,20).map(entry => entry.Country),
          datasets: [{
            label: "Country",
            data: this.props.Countries.slice(0,20).map(entry => entry.NewConfirmed),
            backgroundColor: 'gray'
          }]
        }
      });
    }
  
    render() {
      return (
        <div className="main chart-wrapper">
          <canvas ref={this.canvasRef} />
        </div>
      );
    }
  }

export default Graph;
