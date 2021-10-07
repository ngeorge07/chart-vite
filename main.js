import "./style.css";
import Chart from "chart.js/auto";

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    datasets: [
      {
        label: "Los Angeles Lakers",
        data: [21, 17, 26, 35, 37, 52, 42],
        backgroundColor: "rgb(85, 37, 130)",
        borderColor: "rgb(85, 37, 130)",
        borderWidth: 3,
      },
      {
        label: "Houston Rockets",
        data: [56, 41, 55, 65, 53, 44, 17],
        backgroundColor: "rgb(206, 17, 65)",
        borderColor: "rgb(206, 17, 65)",
        borderWidth: 3,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Games won during the regular season by year",
        padding: {
          top: 20,
          bottom: 30,
        },
        font: {
          size: 20,
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 82,
      },
    },
  },
});
