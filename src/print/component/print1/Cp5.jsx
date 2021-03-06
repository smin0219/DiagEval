import React, { useEffect, useState } from 'react'
import styles from '../../css/print1/cp5.module.css'
import { Bar } from 'react-chartjs-2'
import { CategoryScale } from 'chart.js'
import Chart from 'chart.js/auto'

// not working not showing
Chart.register(CategoryScale)

function Cp5(props) {

  if(props.energyHeat.length > 0){
    var tableDataKeys = Object.keys(tableData[0]);

    for(var i=1; i<tableDataKeys.length; i++){
      tableData[0][tableDataKeys[i]] = props.energyHeat[i-1];
      tableData[1][tableDataKeys[i]] = props.energyCool[i-1];
      tableData[2][tableDataKeys[i]] = props.energyBaseElec[i-1];
      tableData[3][tableDataKeys[i]] = (props.energyBaseGas[i-1] != undefined) ? parseFloat(props.energyBaseGas[i-1].toFixed(2)) : props.energyBaseGas; 
    }
  }

  const [loadHeat, setLoadHeat] = useState([]);
  const [loadCool, setLoadCool] = useState([]);
  const [loadBaseElec, setLoadBaseElec] = useState([]);
  const [loadBaseGas, setLoadBaseGas] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(!isLoaded && props.energyHeat.length > 0){
      setLoadHeat(props.energyHeat);
      setLoadCool(props.energyCool);
      setLoadBaseElec(props.energyBaseElec);
      setLoadBaseGas(props.energyBaseGas);
      setIsLoaded(true);
    }
  });

  const options = {
    elements: {
      bar: {
        borderWidth: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        display: false,
        color: '#fff',
        anchor: 'end',
        clamp: false,
        align: 'left',
      },
      tooltip: {
        enabled: false,
      },
    },

    animations: false,
    scales: {
      y: {
        max: 6,
        min: 0,
        ticks: {
          stepSize: 1,
          display: false,
        },
        scaleLabel: {
          display: false,
        },
      },

      X: {
        max: 11,
        min: 0,
        ticks: {
          stepSize: 0.5,
          font: {
            size: 9,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  }

  const data = {
    // ??? ????????? ??????
    labels: ['1???', '2???', '3???', '4???', '5???', '6???', '7???', '8???', '9???', '10???', '11???', '12???'],
    datasets: [
      {
        data: loadHeat, // ??????
        backgroundColor: '#F66060', // ??? ?????? ???
        barThickness: 8,
        barPercentage: 0.5,
        label: '??????',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: loadCool, // ??????
        backgroundColor: '#80A4E7', // ??? ?????? ???
        barThickness: 8,
        barPercentage: 0.5,
        label: '??????',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: loadBaseElec, // ??????
        backgroundColor: '#B4BEC5', // ??? ?????? ???
        barThickness: 8,
        barPercentage: 0.5,
        label: '??????',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
      {
        data: loadBaseGas, // ??????
        backgroundColor: '#FBCE48', // ??? ?????? ???
        barThickness: 8,
        barPercentage: 0.5,
        label: '??????/??????',
        borderWidth: 1,
        fill: false,
        borderColor: 'rgba(255, 255, 255, 0)',
      },
    ],
  }
  return (
    <div className={styles.wrapper}>
      <h1>
        ????????? ????????? ?????? ????????? ?????? ??????&nbsp;<span>(kwh)</span>
      </h1>

      <ul className={styles.tag_wrap}>
        {chartLabel.map(i => {
          return (
            <li key={i}>
              <div style={{ background: `${i.color}` }} />
              {i.name}
            </li>
          )
        })}
      </ul>
      <div className={styles.chart_wrap}>
        <Bar data={data} options={options} />
      </div>
      <table className={styles.table_val} cellspacing="0">
        <thead>
          <tr align="center">
            <td></td>
            <th>1???</th>
            <th>2???</th>
            <th>3???</th>
            <th>4???</th>
            <th>5???</th>
            <th>6???</th>
            <th>7???</th>
            <th>8???</th>
            <th>9???</th>
            <th>10???</th>
            <th>11???</th>
            <th>12???</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((i, key) => {
            return (
              <tr align="center" bgcolor="white">
                <th>{i.th}</th>
                <td>{i.t1}</td>
                <td>{i.t2}</td>
                <td>{i.t3}</td>
                <td>{i.t4}</td>
                <td>{i.t5}</td>
                <td>{i.t6}</td>
                <td>{i.t7}</td>
                <td>{i.t8}</td>
                <td>{i.t9}</td>
                <td>{i.t10}</td>
                <td>{i.t11}</td>
                <td>{i.t12}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Cp5

export const chartLabel = [
  { name: '??????', color: '#F66060' },
  { name: '??????', color: '#6799F4' },
  { name: '??????', color: '#B4BEC5' },
  { name: '??????/??????', color: '#FBCE48' },
]

export const tableData = [
    {
      th: "??????",
      t1: "00",
      t2: "00",
      t3: "00",
      t4: "00",
      t5: "00",
      t6: "00",
      t7: "00",
      t8: "00",
      t9: "00",
      t10: "00",
      t11: "00",
      t12: "00",
    },
    {
      th: "??????",
      t1: "00",
      t2: "00",
      t3: "00",
      t4: "00",
      t5: "00",
      t6: "00",
      t7: "00",
      t8: "00",
      t9: "00",
      t10: "00",
      t11: "00",
      t12: "00",
    },
    {
      th: "??????",
      t1: "00",
      t2: "00",
      t3: "00",
      t4: "00",
      t5: "00",
      t6: "00",
      t7: "00",
      t8: "00",
      t9: "00",
      t10: "00",
      t11: "00",
      t12: "00",
    },
    {
      th: "??????/??????",
      t1: "00",
      t2: "00",
      t3: "00",
      t4: "00",
      t5: "00",
      t6: "00",
      t7: "00",
      t8: "00",
      t9: "00",
      t10: "00",
      t11: "00",
      t12: "00",
    },
  ];
