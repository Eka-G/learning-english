import { Link } from 'react-router-dom';

interface IAddWord {
  category: string;
}

const AddWord = ({ category }: IAddWord) => {
  return (
    <Link to={`/admin/categories/${category}`} type="button" className="admin-category__btn btn btn">
      ✎ Add word
    </Link>
  );
};

export default AddWord;
