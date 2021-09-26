import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart(props) {
    const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
    const totalMax = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
}

export default Chart;
