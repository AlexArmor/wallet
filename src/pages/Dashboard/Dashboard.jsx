import { NavLink } from 'react-router-dom';
import { Currency } from 'components/Currency/Currency';

export default function Dashboard() {
  return (
    <>
      <ul>
        <li>
          <NavLink to="home">HomePage</NavLink>
        </li>
        <li>
          <NavLink to="statistics">StatisticsPage</NavLink>
        </li>
      </ul>
      <Currency />
    </>
  );
}
