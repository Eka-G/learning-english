import { CARDS, CardInformation } from '../../constants';
import Table from '../../components/table';

const rows = (Object.keys(CARDS) as Array<keyof typeof CARDS>).reduce((acc, current) => {
  const cardInformation = CARDS[current];
  const startStatistics = 0;

  cardInformation.forEach((item: CardInformation) => {
    const row: (string | number)[] = [];
    row.push(item.word, item.translation, current, startStatistics, startStatistics, startStatistics, startStatistics);
    acc.push(row);
  });

  return acc;
}, [] as (string | number)[][]);

const StatisticsPage = () => {
  return (
    <div className="page__content">
      <h1 className="page__title">Statistics</h1>
      <Table rowsList={rows} />
    </div>
  );
};

export default StatisticsPage;
