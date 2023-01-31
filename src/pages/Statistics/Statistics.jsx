import css from './Statistics.module.css';
import UnstyledSelectSimple from 'components/CustomSelect/CustomSelect';
import { StatTable } from 'components/StatTable/StatTable';
import { Chart } from 'components/Chart/Chart';
import { useEffect, useState } from 'react';

export default function Statistics() {
  const [stat, setStat] = useState(null);
  useEffect(() => {
    if (!stat) return;
    console.log(stat);
  }, [stat]);

  return (
    <>
      <section className={css.container}>
        <h2 className={css.title}>Statistics</h2>
        <div className={css.bottom_wrap}>
          <div className={css.chart_wrap}>{stat && <Chart stat={stat} />}</div>
          <div className={css.right_wrap}>
          <div className={css.selects_wrap}><UnstyledSelectSimple setStat={setStat} /></div>
          {stat && <StatTable stat={stat} />}
          </div>
          
        </div>
      </section>
      

      
    </>
  );
}
