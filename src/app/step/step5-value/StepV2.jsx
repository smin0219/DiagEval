import React from "react";
import Chart1 from "../Charts/step5/stepV2/Chart1";
import styles from "../css/step5.module.css";
import waitIcon from "../../../@assets/step5/waitIcon.svg";
import Chart2 from "../Charts/step5/stepV2/Chart2";
import Chart3 from "../Charts/step5/stepV2/Chart3";

function StepV2(props) {
  return (
    <div className={styles.stepV_wrappper}>
      {/* 좌측  */}
      <div className={styles.step_wrap}>
        <div className={styles.title_wrap}>
          <div className={styles.title_label}>
            <aside />
            연간 사용량
          </div>

          <ul className={styles.tag_wrap}>
            {chartLabel.map((i) => {
              return (
                <li key={i.name} >
                  <div style={{ background: `${i.color}` }} />
                  {i.name}
                </li>
              );
            })}
          </ul>
        </div>
        {/* 차트 1/2 */}
        <ul className={styles.step1_chart_wrap}>
          <li>
            <h2>연간 에너지 사용량 (kWh)</h2>
            <Chart1
              energyYrHeat={props.energyYr.yr_load_heat}
              energyYrCool={props.energyYr.yr_load_cool}
              energyYrBC={props.energyYr.yr_load_baseElec}
              energyMLYrHeat={props.energyMLYr.yr_load_heat}
              energyMLYrCool={props.energyMLYr.yr_load_cool}
              energyMLYrBC={props.energyMLYr.yr_load_baseElec}
            />
          </li>

          <li>            
            <h2>연간 CO2 배출량</h2>
            <Chart2
              co2YrHeat={props.co2Yr.yr_co2_heat}
              co2YrCool={props.co2Yr.yr_co2_cool}
              co2YrBC={props.co2Yr.yr_co2_baseElec}
              co2MLYrHeat={props.co2MLYr.yr_co2_heat}
              co2MLYrCool={props.co2MLYr.yr_co2_cool}
              co2MLYrBC={props.co2MLYr.yr_co2_baseElec}
            />
          </li>
        </ul>

        {/* 좌측차트 */}
        <table className={styles.table_val} cellSpacing="0">
          <thead>
            <tr align="center">
              <td></td>
              <td></td>
              <th>난방</th>
              <th>냉방</th>
              <th>기저</th>
              <th>합계</th>
            </tr>
          </thead>
          <tbody>
            <tr align="center" bgcolor="white">
              <th rowSpan="2">에너지 사용량</th>
              <th>분석건물</th>
              <td>00</td>
              <td>00</td>
              <td>00</td>
              <td>00</td>
            </tr>
            <tr align="center" bgcolor="white">
              <th>일반 사용행태 건물</th>
              <td>00</td>
              <td>00</td>
              <td>00</td>
              <td>00</td>
            </tr>

            <tr align="center" bgcolor="white">
              <th rowSpan="2">C02 배출량</th>
              <th>분석건물</th>
              <td>00</td>
              <td>00</td>
              <td>00</td>
              <td>00</td>
            </tr>
            <tr align="center" bgcolor="white">
              <th>일반 사용행태 건물</th>
              <td>00</td>
              <td>00</td>
              <td>00</td>
              <td>00</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.info_desk_wrap}>
          <img src={waitIcon} alt="" />
          <p>
            표준 사용자 행태를 갖고 있는 건물보다&nbsp;
            <span>난방 사용량이 높습니다</span>
          </p>
        </div>
      </div>
      <div className={`${styles.step_wrap} ${styles.right_step_wrap}`}>
        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            난방 월간 사용량
          </div>
          <Chart3
            energy={props.energy.map((usg) => usg.load_heat)}
            energyML={props.energyML.map((usg) => usg.load_heat)}
          />
        </div>

        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            냉방 월간 사용량
          </div>
          <Chart3
            energy={props.energy.map((usg) => usg.load_cool)}
            energyML={props.energyML.map((usg) => usg.load_cool)}
          />
        </div>

        <div className={styles.right_chart_wrap}>
          <div className={styles.title_label}>
            <aside />
            기저(조명/사무용기기) 월간 사용량 <span>(kWh)</span>
          </div>
          <Chart3
            energy={props.energy.map((usg) => usg.load_baseElec)}
            energyML={props.energyML.map((usg) => usg.load_baseElec)}
          />
        </div>
      </div>
    </div>
  );
}

export default StepV2;

export const chartLabel = [
  { name: "난방", color: "#F66060" },
  { name: "냉방", color: "#6799F4" },
  { name: "기저", color: "#B4BEC5" },
];
