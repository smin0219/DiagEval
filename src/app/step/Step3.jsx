import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styles from './css/step3.module.css'
import stepStyles from './css/step-wrap.module.css'
import StepHeader from '../common/StepHeader'

function Step3() {
  const navigate = useNavigate()
  const location = useLocation();

  const [stepNum, setStepNum] = useState(3);
  const [isLoaded, setIsLoaded] = useState(false);
  const [stateHistory, setStateHistory] = useState(location.state.stateHistory);
  const [codes, setCodes] = useState(location.state.codes);
  const [defaults, setDefaults] = useState(location.state.defaults);
  const [hurWday, setHurWday] = useState(''+location.state.defaults.hur_wday);
  const [hurWend, setHurWend] = useState(''+location.state.defaults.hur_wend);
  const [allDay, setAllDay] = useState("0");
  const [menRsdt, setMenRsdt] = useState(location.state.defaults.men_rsdt);
  const [menNorsdt, setMenNorsdt] = useState(location.state.defaults.men_norsdt);
  const [tempCool, setTempCool] = useState(location.state.defaults.temp_cool);
  const [tempHeat, setTempHeat] = useState(location.state.defaults.temp_heat);

  useEffect(() => {
    if (isLoaded !== true) {
      if(location.state.stepNum === 2){
        location.state.stateHistory[2] = location.state;
        if(location.state.stateHistory[3] != undefined){
          RetrieveData(location.state.stateHistory[3]);
        }
      }
      if(location.state.stepNum === 4){
        location.state.stateHistory[4] = location.state;
        RetrieveData(location.state.stateHistory[3]);
      }
      setIsLoaded(true);
    }
  });

  const submit = e => {
    e.preventDefault()
  }

  const RetrieveData = (state) => {
    setStateHistory(state.stateHistory);
    setHurWday(state.hurWday);
    setHurWend(state.hurWend);
    setAllDay(state.allDay);
    setMenRsdt(state.menRsdt);
    setMenNorsdt(state.menNorsdt);
    setTempCool(state.tempCool);
    setTempHeat(state.tempHeat);
  }

  const OnHurWdayChange = (e) => {
    if(allDay === "1"){
      setAllDay("0");
      setHurWend(''+location.state.defaults.hur_wend)
    }
    setHurWday(e.target.value);
  }

  const OnHurWendChange = (e) => {
    if(allDay === "1"){
      setAllDay("0");
      setHurWday(''+location.state.defaults.hur_wday)
    }
    setHurWend(e.target.value);
  }

  const OnMenRsdtChange = (e) => {
    setMenRsdt(e.target.value);
  }

  const OnMenNorsdtChange = (e) => {
    setMenNorsdt(e.target.value);
  }

  const OnTempCoolChange = (e) => {
    setTempCool(e.target.value);
  }

  const OnTempHeatChange = (e) => {
    setTempHeat(e.target.value);
  }

  const OnSetAlldayClick = (e) => {
    if(e.target.value === "0"){
      setAllDay("1");
      setHurWday("");
      setHurWend("");
    }
    else{
      setAllDay("0");
      setHurWday(''+location.state.defaults.hur_wday);
      setHurWend(''+location.state.defaults.hur_wend);
    }
  }

  return (
    <main className={stepStyles.step_wrapper}>
      <section className={stepStyles.step_container}>
        <StepHeader />
        <form className={styles.wrapper} onSubmit={submit}>
          <div className={styles.container}>
            <div className={styles.left_wrap}>
              {/* !!===?????? ????????? (?????????) ===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  ?????? ????????? (?????????)
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>
                    - ?????? ????????? (?????????~?????????)
                  </label>
                  <div className={styles.input_wrap}>
                    <div className={styles.tab_box_wrap}>
                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="8"
                          checked={hurWday === "8"}
                          onChange={OnHurWdayChange}
                        />
                        <span>8H ??????</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="10"
                          checked={hurWday === "10"}
                          onChange={OnHurWdayChange}
                        />
                        <span>10H ??????</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab1"
                          value="12"
                          checked={hurWday === "12"}
                          onChange={OnHurWdayChange}
                        />
                        <span>12H ??????</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>- ?????? ????????? (?????????)</label>
                  <div className={styles.input_wrap}>
                    <div className={styles.tab_box_wrap}>
                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="0"
                          checked={hurWend === "0"}
                          onChange={OnHurWendChange}
                        />
                        <span>??????</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="4"
                          checked={hurWend === "4"}
                          onChange={OnHurWendChange}
                        />
                        <span>4H ??????</span>
                      </label>

                      <label className={styles.tab}>
                        <input
                          type="radio"
                          name="tab2"
                          value="8"
                          checked={hurWend === "8"}
                          onChange={OnHurWendChange}
                        />
                        <span>8H ??????</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>
                    - ?????? ????????? <span>(?????? ??? ??????/?????? ?????? ?????????)</span>
                  </label>
                  <div className={styles.input_wrap}>
                    <div className={styles.tab_box_wrap}>
                      <label className={`${styles.tab} ${styles.tab2}`}>
                        <input
                          type="radio"
                          name="tab3"
                          value={allDay}
                          checked={allDay === "1"}
                          onClick={OnSetAlldayClick}
                          onChange={() => console.log('')}
                        />
                        <span>??????~?????? 24H ??????</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.right_wrap}>
              {/* !!=== ?????? ?????? ===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  ?????? ??????
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>???????????? (?????????)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" 
                      placeholder="????????????"
                      value={menRsdt}
                      onChange={OnMenRsdtChange}
                    />
                    <span>???</span>
                  </div>
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>??????????????? (?????????)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" 
                      placeholder="????????????"
                      value={menNorsdt}
                      onChange={OnMenNorsdtChange}
                    />
                    <span>???</span>
                  </div>
                </div>
              </div>

              {/* !!=== ????????? ???????????? ===!! */}
              <div className={styles.content_wrap}>
                <div className={styles.title_label}>
                  <aside />
                  ????????? ????????????
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>??????????????????(24???~ 28???)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" 
                      placeholder="????????????"
                      value={tempCool}
                      onChange={OnTempCoolChange}
                    />
                    <span>???</span>
                  </div>
                </div>

                <div className={styles.wrap_box}>
                  <label className={styles.title}>??????????????????(18???~ 22???)</label>
                  <div className={styles.input_box_wrap}>
                    <input type="number" 
                      placeholder="????????????"
                      value={tempHeat}
                      onChange={OnTempHeatChange}
                    />
                    <span>???</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ==== ?????? ?????? ==== */}
          <div className={styles.btn_wrap}>
            <button
              type="submit"
              className={styles.backBtn}
              onClick={() =>
                navigate('/step2', {
                  state: {
                    stepNum: stepNum,
                    stateHistory: location.state.stateHistory,
                    codes: codes,
                    defaults: defaults,
                    hurWday: hurWday,
                    hurWend: hurWend,
                    allDay: allDay,
                    menRsdt: menRsdt,
                    menNorsdt: menNorsdt,
                    tempCool: tempCool,
                    tempHeat: tempHeat
                  }
              })}
            >
              ????????????
            </button>
            <button
              className={styles.submit}
              onClick={() => 
                navigate('/step4', {
                state: {
                  stepNum: stepNum,
                  stateHistory: location.state.stateHistory,
                  codes: codes,
                  defaults: defaults,
                  hurWday: hurWday,
                  hurWend: hurWend,
                  allDay: allDay,
                  menRsdt: menRsdt,
                  menNorsdt: menNorsdt,
                  tempCool: tempCool,
                  tempHeat: tempHeat
                }
              })
            }
            >
              ????????????
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Step3
