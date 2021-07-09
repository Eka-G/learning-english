import TableCell from '../table-cell';
import './table-head.css';

interface TableHeadProps {
  cells: string[];
}

const TableHead = ({ cells }: TableHeadProps) => {
  return (
    <thead className="table__head">
      <tr>
        {cells.map((cell) => (
          <TableCell key={cell} content={cell} inHead />
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
