


function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email !== "" && password !== "") {
    //   }else{
    //     loginButton.style.backgroundColor = "#2f49d1";
    //      loginButton.style.cursor = "pointer";
    window.location.href = "dashboard/index.html"; // Redirect to index.html
  }
}



















  
   var charts = {};
  var gridLine;
  var titleColor;
  var labels = [];
  var datasets = [];

  (function () {
    /* Add gradient to chart */
    var width, height, gradient;

    function getGradient(ctx, chartArea) {
      var chartWidth = chartArea.right - chartArea.left;
      var chartHeight = chartArea.bottom - chartArea.top;

      if (gradient === null || width !== chartWidth || height !== chartHeight) {
        width = chartWidth;
        height = chartHeight;
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0)');
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0.4)');
      }

      return gradient;
    }
    /* Visitors chart */
    function filterChart() {
      const selectedRange = document.getElementById("timeRangeDropdown").value;


      switch (selectedRange) {
        case "30":
          // Update chart for last 30 days (assuming daily data for the past month)
          labels = ["Day 1", "Day 2", "Day 3", "Day 30"]; // Adjust the labels accordingly
          datasets = [
            {
              label: "Field 1",
              data: [10, 20, 30, 50], // Data for last 30 days
              // other dataset properties
            },
            {
              label: "Field 2",
              data: [15, 25, 35, 55], // Data for last 30 days
              // other dataset properties
            },
            // Add more datasets if needed
          ];
          break;

        case "6months":
          // Update chart for last 6 months
          labels = [
            "Month 1",
            "Month 2",
            "Month 3",
            "Month 4",
            "Month 5",
            "Month 6",
          ];
          datasets = [
            {
              label: "Field 1",
              data: [200, 250, 300, 350, 400, 450], // Data for last 6 months
              // other dataset properties
            },
            {
              label: "Field 2",
              data: [220, 270, 320, 370, 420, 470], // Data for last 6 months
              // other dataset properties
            },
            // Add more datasets if needed
          ];
          break;

        case "1year":
          // Update chart for last 1 year
          labels = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ];
          datasets = [
            {
              label: "Field 1",
              data: [10, 27, 40, 15, 30, 25, 45, 55, 31, 53, 10, 75], // Data for last 12 months
              // other dataset properties
            },
            {
              label: "Field 2",
              data: [0, 36, 16, 45, 29, 32, 10, 35, 55, 29, 20, 99], // Data for last 12 months
              // other dataset properties
            },
            // Add more datasets if needed
          ];
          break;
      }

      // Update the chart data
      chart.data.labels = labels;
      chart.data.datasets = datasets;

      // Re-render the chart
      chart.update();
    }

    var ctx = document.getElementById('myChart');

    if (ctx) {
      var myCanvas = ctx.getContext('2d');
      var myChart = new Chart(myCanvas, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Feild 1",
              data: [0, 27, 40, 15, 30, 25, 45, 55, 31, 53, 10, 75],
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              backgroundColor: ["rgba(95, 46, 234, 1)"],
              borderColor: ["rgba(95, 46, 234, 1)"],
              borderWidth: 2,
            },
            {
              label: "Feild 2",
              data: [0, 36, 16, 45, 29, 32, 10, 35, 55, 29, 20, 99],
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              backgroundColor: ["rgba(75, 222, 151, 1)"],
              borderColor: ["rgba(75, 222, 151, 1)"],
              borderWidth: 2,
            },
            {
              label: "Feild 3",
              data: [0, 26, 36, 25, 49, 32, 50, 45, 51, 23, 30, 82],
              cubicInterpolationMode: "monotone",
              tension: 0.4,
              backgroundColor: ["rgba(255, 184, 76, 1)"],
              borderColor: ["rgba(255, 184, 76, 1)"],
              borderWidth: 2,
            },
          ],
        },
        options: {
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: {
                stepSize: 25,
              },
              grid: {
                display: false,
              },
            },
            x: {
              grid: {
                color: gridLine,
              },
            },
          },
          elements: {
            point: {
              radius: 2,
            },
          },
          plugins: {
            legend: {
              position: "top",
              align: "end",
              labels: {
                boxWidth: 8,
                boxHeight: 8,
                usePointStyle: true,
                font: {
                  size: 12,
                  weight: "500",
                },
              },
            },
            title: {
              display: true,
              text: ["Fields statistics", "Jan - Dec"],
              align: "start",
              color: "#171717",
              font: {
                size: 16,
                family: "Inter",
                weight: "600",
                lineHeight: 1.4,
              },
            },
          },
          tooltips: {
            mode: "index",
            intersect: false,
          },
          hover: {
            mode: "nearest",
            intersect: true,
          },
        },
      });
      charts.visitors = myChart;
    }


    /* Customers chart */


    var customersChart = document.getElementById('customersChart');

    if (customersChart) {
      var customersChartCanvas = customersChart.getContext('2d');
      var myCustomersChart = new Chart(customersChartCanvas, {
        type: 'line',
        data: {
          labels: ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: '+958',
            data: [90, 10, 80, 20, 70, 30, 50],
            tension: 0.4,
            backgroundColor: function backgroundColor(context) {
              var chart = context.chart;
              var ctx = chart.ctx,
                  chartArea = chart.chartArea;

              if (!chartArea) {
                // This case happens on initial chart load
                return null;
              }

              return getGradient(ctx, chartArea);
            },
            borderColor: ['#fff'],
            borderWidth: 2,
            fill: true
          }]
        },
        options: {
          scales: {
            y: {
              display: false
            },
            x: {
              display: false
            }
          },
          elements: {
            point: {
              radius: 1
            }
          },
          plugins: {
            legend: {
              position: 'top',
              align: 'end',
              labels: {
                color: '#fff',
                size: 18,
                fontStyle: 800,
                boxWidth: 0
              }
            },
            title: {
              display: true,
              text: ['New Customers', '28 Daily Avg.'],
              align: 'start',
              color: '#fff',
              font: {
                size: 16,
                family: 'Inter',
                weight: '600',
                lineHeight: 1.4
              },
              padding: {
                top: 20
              }
            }
          },
          maintainAspectRatio: false
        }
      });
      customersChart.customers = myCustomersChart;
    }
  })();
  /* Change data of all charts */


  function addData() {
    var darkMode = localStorage.getItem('darkMode');

    if (darkMode === 'enabled') {
      gridLine = '#37374F';
      titleColor = '#EFF0F6';
    } else {
      gridLine = '#EEEEEE';
      titleColor = '#171717';
    }

    if (charts.hasOwnProperty('visitors')) {
      charts.visitors.options.scales.x.grid.color = gridLine;
      charts.visitors.options.plugins.title.color = titleColor;
      charts.visitors.options.scales.y.ticks.color = titleColor;
      charts.visitors.options.scales.x.ticks.color = titleColor;
      charts.visitors.data.labels= labels;

      charts.visitors.update();
    }
  }

  addData();

