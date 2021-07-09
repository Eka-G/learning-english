import TableCell from '../table-cell';

interface TableRowProps {
  cells: (string | number)[];
}

const TableRow = ({ cells }: TableRowProps) => {
  return (
    <tr>
      {cells.map((cell, i) => (
        <TableCell key={`${typeof cell === 'number' ? String(Math.random()) : cell}`} content={cell} inHead={false} />
      ))}
    </tr>
  );
};

export default TableRow;
