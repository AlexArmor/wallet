import css from './Statistics.module.css';
import UnstyledSelectSimple from 'components/CustomSelect/CustomSelect';
import { StatTable } from 'components/StatTable/StatTable';
import { Chart } from 'components/Chart/Chart';
import { useSelector } from 'react-redux';
import { toStringWithSymbol } from 'services/addSymbol';

export default function Statistics() {
  let statData = useSelector(state => state.finance.dataPeriod);
  const shouldRender = statData ? statData.categoriesSummary.length > 0 : null;
  return (
    <>
      <section className={css.container}>
        <h2 className={css.title}>Statistics</h2>
        <div className={css.bottom_wrap}>
          <div className={css.chart_wrap}>
            {shouldRender && <Chart stat={statData} />}
            {shouldRender && (
              <div className={css.chart_label}>
                ₴ {toStringWithSymbol(statData.periodTotal, ' ')}.00
              </div>
            )}
          </div>
          <div className={css.right_wrap}>
            <div className={css.selects_wrap}>
              <UnstyledSelectSimple />
            </div>
            {shouldRender ? <StatTable stat={statData} /> : <div className={css.noStatistics}>There is no statistics, yet.</div>}
          </div>
        </div>
      </section>
    </>
  );
}
