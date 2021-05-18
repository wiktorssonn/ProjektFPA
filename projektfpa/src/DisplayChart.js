import React from 'react'
import Chart from "react-apexcharts";


export default function DisplayChart(props) {
    
    let state = {
        options: {
          chart: {
            id: "linear",
            toolbar: {
                tools: {
                    download: false,
                    reset: false
                }
            }
          },
          xaxis: {
            categories: props.categoryData,
            labels: {
                style: {
                    fontSize: '0.8rem'
                }
            }
          },
          yaxis: {
            decimalsInFloat: 2,
            labels: {
                style: {
                    fontSize: '1rem'
                }
            }
          }
        },
        series: [
          {
            name: "Valuta",
            data: props.chartData
          }
        ]
      };
      
    return (
        <div className="container">
            <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="100%"
            />
        </div>
    );
}
