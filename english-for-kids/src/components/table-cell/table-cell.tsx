import './table-cell.css';

interface TableCellProps {
  content: string | number;
  inHead: boolean;
}

const TableCell = ({ content, inHead }: TableCellProps) => {
  return (
    <>
      {inHead && <th className="table__cell table__cell-head"> {content} </th>}

      {!inHead && <td className="table__cell"> {content} </td>}
    </>
  );
};

export default TableCell;
