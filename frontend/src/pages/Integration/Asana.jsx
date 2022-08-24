import React from 'react'
import style from './asana.module.css'
const Asana = () => {
  return (
    <>
      <div className={style.mainHeadDiv}>
        <div className={style.HeadDiv}>
          <h1>Asana time tracking integration</h1>
          <p>
            Time tracking in Asana with timesheets, budgeting, client reporting,
            and payroll. Works inside Asana. No more tab switching!
          </p>
        </div>
        <div className={style.tryBtn}>
          <p>Try with my Asana</p>
        </div>
        <div className={style.listParaDiv}>
            <p>Free to try</p>
            <p className={style.dot}>.</p>
            <p>No credit card requiured</p>
            <p className={style.dot}>.</p>
            <p>1-minute signup</p>
        </div>
      </div>
      <div className={style.imgDiv}>
        <img src='https://blog-cdn.everhour.com/assets/images/new-design/background-elements/dotted/dimond-dotted-orange.png' alt='orangedotimg'/>
        <img src="https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp" alt='img'/>
        <img src='https://blog-cdn.everhour.com/assets/images/new-design/background-elements/dotted/oval-dotted-green.png' alt='green dotes img'/>
      </div>
    </>
  );
}

export default Asana