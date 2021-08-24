import React from "react";
import { Bar, Line } from "react-chartjs-2";

const ChartPage = ({ inputData, chartSelection }) => {
  const Labels = inputData.map((val) => val.name);
  const dataval = inputData.map((val) => val.amount);

  // const backgroundColor = [];
  // for (let i = 0; i < dataval.length; i++) {
  //   if (dataval[i] < 80) {
  //     backgroundColor.push("red");
  //   }
  //   if (dataval[i] >= 80 && dataval[i] < 160) {
  //     backgroundColor.push("green");
  //   }
  //   if (dataval[i] >= 160 && dataval[i] < 240) {
  //     backgroundColor.push("Blue");
  //   }
  //   if (dataval[i] >= 240 && dataval[i] < 320) {
  //     backgroundColor.push("yellow");
  //   }
  //   if (dataval[i] >= 320 && dataval[i] < 400) {
  //     backgroundColor.push("orange");
  //   }
  //   if (dataval[i] >= 400 && dataval[i] < 480) {
  //     backgroundColor.push("purple");
  //   }
  // }
  const dynamicColor = () => {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  const ChartData = {
    labels: Labels,
    datasets: [
      {
        label: "User Salary",
        data: dataval,
        backgroundColor: dynamicColor,
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },

      title: {
        display: true,
        text: "Chart exaple ",
        padding: {
          top: 10,
          bottom: 20,
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: "red",
          borderColor: "grey",
          tickColor: "grey",
        },
      },
      y: {
        suggestedMin: 0,
        suggestedMax: 500,
      },
      // [ {
      //     ticks: {
      //         min :0,
      //         max: 1000,
      //         stepSize : 30
      //     },
      // }
      // ],

      //   yAxes: [
      //     {
      //       ticks: {
      //         min: 0,
      //         max: 500,
      //         stepSize: 20,
      //         fontSize: 70,
      //         fontColor: "#000",
      //         backgroundColor:'green'
      //       },
      //     },
      //   ],
      //   xAxes: [
      //     {
      //       ticks: {
      //         fontSize: 15,
      //         fontColor: "#000",
      //       },
      //     },
      //   ],
    },
  };
  let BarChart = <p>No chart Selected</p>;
  if (Labels.length > 0 && dataval.length > 0) {
    if (chartSelection === "Bar") {
      BarChart = <Bar data={ChartData} options={options}></Bar>;
    } else if (chartSelection === "Line") {
      BarChart = <Line options={options} data={ChartData}></Line>;
    }
  }

  return (
    <div>
      <div
        style={{
          paddingTop: "40px",
          width: "50%",
          height: "400px",
          display: "inline-flex",
          backgroundColor: "antiquewhite",
        }}
      >
        {BarChart}
      </div>
    </div>
  );
};

export default ChartPage;
