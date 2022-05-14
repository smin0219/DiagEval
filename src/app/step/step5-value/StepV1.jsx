import React from 'react'
import styles from '../css/step5.module.css'
import Chart2 from '../Charts/step5/stepV1/Chart2'
import Chart1 from '../Charts/step5/stepV1/Chart1'

function StepV1() {
  return (
    <>
      <div className={styles.stepV1_wrappper}>
        <div className={styles.title_wrap}>
          <div className={styles.title_label}>
            <aside />
            에너지 용도별 연간 사용량 분리분석 <span>(kWh)</span>
          </div>

          <ul className={styles.tag_wrap}>
            {chartLabel.map(i => {
              return (
                <li>
                  <div style={{ background: `${i.color}` }} />
                  {i.name}
                </li>
              )
            })}
          </ul>
        </div>
        <div style={{ marginBottom: 50 }}>
          <Chart1 />
        </div>

        <div className={styles.title_wrap}>
          <div className={styles.title_label}>
            <aside />
            에너지 용도별 연간 사용량 분리분석 <span>(kWh)</span>
          </div>

          <ul className={styles.tag_wrap}>
            {chartLabel.map(i => {
              return (
                <li>
                  <div style={{ background: `${i.color}` }} />
                  {i.name}
                </li>
              )
            })}
          </ul>
        </div>
        <div className={styles.chart_wrap}>
          <Chart2 />
        </div>

        {/* 테이블 */}
        <table className={styles.table_val} cellspacing="0">
          {/* <thead>
            <tr align="center">
              <td></td>
              <th>1월</th>
            </tr>
          </thead> */}
          <tbody>
            {tableData.val.map(i => {
              return (
                <tr align="center" bgcolor="white" key={i}>
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
    </>
  )
}

export default StepV1

export const chartLabel = [
  { name: '난방', color: '#F66060' },
  { name: '냉방', color: '#6799F4' },
  { name: '기저', color: '#B4BEC5' },
  { name: '급탕/취사', color: '#FBCE48' },
]

export const tableData = {
  val: [
    {
      th: '난방',
      t1: '00',
      t2: '00',
      t3: '00',
      t4: '00',
      t5: '00',
      t6: '00',
      t7: '00',
      t8: '00',
      t9: '00',
      t10: '00',
      t11: '00',
      t12: '00',
    },
    {
      th: '냉방',
      t1: '00',
      t2: '00',
      t3: '00',
      t4: '00',
      t5: '00',
      t6: '00',
      t7: '00',
      t8: '00',
      t9: '00',
      t10: '00',
      t11: '00',
      t12: '00',
    },
    {
      th: '기저',
      t1: '00',
      t2: '00',
      t3: '00',
      t4: '00',
      t5: '00',
      t6: '00',
      t7: '00',
      t8: '00',
      t9: '00',
      t10: '00',
      t11: '00',
      t12: '00',
    },
    {
      th: '급탕/취사',
      t1: '00',
      t2: '00',
      t3: '00',
      t4: '00',
      t5: '00',
      t6: '00',
      t7: '00',
      t8: '00',
      t9: '00',
      t10: '00',
      t11: '00',
      t12: '00',
    },
  ],
}
