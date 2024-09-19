import React from 'react';
import ApexCharts from 'react-apexcharts';
const defaultOptions = {
  chart: {
    id: 'basic-line'
  },
  xaxis: {
    categories: [
      '8:45 AM', '9:15 AM', '9:45 AM', '10:15 AM', '10:45 AM', '11:15 AM', '11:45 AM',
      '12:15 PM', '12:45 PM', '1:15 PM', '1:45 PM', '2:15 PM', '2:44 PM', '3:15 PM',
      '3:44 PM', '4:15 PM', '4:45 PM', '5:15 PM', '5:45 PM', '6:15 PM', '6:44 PM',
      '7:15 PM', '7:45 PM', '8:15 PM', '8:45 PM', '9:15 PM', '9:45 PM', '10:15 PM',
      '10:45 PM', '11:15 PM', '11:45 PM', '0:15 AM', '0:45 AM', '1:15 AM', '1:45 AM',
      '2:15 AM', '2:45 AM', '3:15 AM', '3:45 AM', '4:15 AM', '4:45 AM', '5:15 AM',
      '5:45 AM', '6:15 AM', '6:45 AM', '7:15 AM', '7:45 AM', '8:15 AM', '8:41 AM',
      '9:15 AM', '9:45 AM', '10:15 AM', '10:45 AM', '11:15 AM', '11:45 AM','12:15 PM'
    ]
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: 'Sample Line Chart',
    align: 'left'
  },
  markers: {
    size: 5
  },
  legend: {
    position: 'top'
  },
  dataLabels: {
    enabled: false  // dataLabelsni o'chirdik
  }
};
const defaultSeries = [{
  name: 'Sales',
  data: [2940000, 2941100, 2930090, 2949000, 2930000, 3020000, 2940000,
         2980000, 2940100, 2949100, 2980000, 2930000, 3020000, 2940000,
         2920000, 2940100, 2940100, 2980000, 2990000, 3020000, 3040000,
         2940000, 3040100, 2940100, 2980000, 2990000, 3220000, 3200000, 
         3060000, 3080000, 3090000, 3220000, 3340000, 3320000, 3390000,
         3400000, 3220000, 3340000, 3260000, 3500000, 3400000, 3390000,
         3340000, 3360000, 3320000, 3400000, 3420000, 3420000, 3410000,
         3270000, 3360000, 3380000, 3400000, 3420000, 3400000, 3400000,
         ]
}];
function MyChart() {
  const [chartData, setChartData] = React.useState({
    options: defaultOptions,
    series: defaultSeries
  });
  return (
    <div>
      <ApexCharts
        options={chartData.options}
        series={chartData.series}
        type='line'
        height={550}
        width={1000}
      />
      <div className='flex justify-between'> 
        <button className='border  py-3 pr-28 pl-6 rounded-md text-white hover:text-black hover:bg-blue-400'>24 Hours</button>
        <button className='border  py-3 pr-28 pl-6 rounded-md text-white hover:text-black hover:bg-blue-400'>30 Days</button>
        <button className='border  py-3 pr-28 pl-6 rounded-md text-white hover:text-black hover:bg-blue-400'>3 Months</button>
        <button className='border  py-3 pr-28 pl-6 rounded-md text-white hover:text-black hover:bg-blue-400'>1 Year</button>

      </div>
    </div>
  );
}
export default MyChart;
