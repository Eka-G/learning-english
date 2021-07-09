import TableRow from '../table-row';
import TableHead from '../table-head';
import './table.css';

interface TableProps {
  rowsList: (string | number)[][];
}

const Table = ({ rowsList }: TableProps) => {
  const rows = rowsList.map((row) => {
    return <TableRow key={row[0]} cells={row} />;
  });

  return (
    <table className="table">
      <TableHead cells={['Word', 'Translation', 'Category', 'Clicks', 'Correct', 'Wrong', '% errors']} />
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Table;
