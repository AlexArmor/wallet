
import css from './Statistics.module.css'
import UnstyledSelectSimple from 'components/CustomSelect/CustomSelect';
import { StatTable } from 'components/StatTable/StatTable';
import { Chart } from 'components/Chart/Chart';
import { useEffect, useState } from 'react';






export default function Statistics() {
  const [stat, setStat] = useState(null)
  useEffect(()=>{
    if(!stat)return
    console.log(stat);
  },[stat])

  
  return <>
  <UnstyledSelectSimple setStat={setStat} />
  <div className={css.wrap}>
  {stat&&<Chart stat={stat}/>}

      </div>
  {stat&&<StatTable stat={stat}/>}
  </> 
}
