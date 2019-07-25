// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
  labels:['Pending','Assigned','Estimated','Released','Inhibited','Blocked'],
 datasets: [{
            data: [12,44,45,454,11,23,38],
            backgroundColor: ['#535454','#f4a460','#336bcc','#99CC33', '#f4f142','#af011b','#f2f2f2'],
            // #9a9b96
        }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
      position: 'left'
    },
    cutoutPercentage: 80,
  },
});



// Pie Chart Example
var ctx = document.getElementById("myPieChart-2");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
  labels:['Ahead','On Schedule','Behind'],
 datasets: [{
            data: [12,44,45],
            backgroundColor: ['#535454','#f4a460','#336bcc'],
            // #9a9b96
        }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: true,
      position: 'left'
    },
    cutoutPercentage: 80,
  },
});



