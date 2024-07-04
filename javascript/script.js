const xValues = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      data: [300, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
      borderColor: "#AFCD80",
      fill: false,
    },
    {
      data: [300, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
      borderColor: "#FC714D",
      fill: false,
    },
    {
      data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
      borderColor: "#615DE3",
      fill: false,
    },
    {
      data: [300, 800, 1500, 4000, 3000, 8000, 1000, 5000, 400, 500],
      borderColor: "#6F34A1",
      fill: false,
    },
  ],
};

new Chart("myChart", {
  type: "line",
  data: data,
  options: {
    responsive: true,
    legend: { display: false },
  },
});
