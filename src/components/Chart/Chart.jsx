import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};

const backgroundColor = [
  '#FED057',
  '#FFD8D0',
  '#FD9498',
  '#C5BAFF',
  '#6E78E8',
  '#4A56E2',
  '#81E1FF',
  '#24CCA7',
  '#00AD84',
  '#fce19d',
];

export const Chart = ({ stat }) => {
  const expences = stat.categoriesSummary.filter(el => el.type === 'EXPENSE');
  const categories = expences.map(el => el.name);
  const expenceAmounts = expences.map(el => el.total);
  const data = {
    datasets: [
      {
        data: expenceAmounts,
        backgroundColor,
        borderWidth: 0,
        cutout: 100,
      },
    ],
    labels: categories,
  };

  return <Doughnut options={options} data={data} />;
};
