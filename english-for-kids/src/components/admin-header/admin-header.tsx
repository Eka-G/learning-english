import { useHistory } from 'react-router-dom';
import { useStateContext } from '../../shared';
import AdminNav from '../admin-nav';
import './admin-header.css';

const AdminHeader = () => {
  const history = useHistory();
  const { dispatch } = useStateContext();

  return (
    <header className="header admin-header">
      <AdminNav />
      <button
        type="button"
        className="btn admin-header__logout-btn"
        onClick={() => {
          history.push('/');
          dispatch({ type: 'logout' });
        }}
      >
        ➲ Log out
      </button>
    </header>
  );
};

export default AdminHeader;
