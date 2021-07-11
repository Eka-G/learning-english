import AdminNav from '../admin-nav';
import './admin-header.css';

const AdminHeader = () => {
  return (
    <header className="header admin-header">
      <AdminNav />
      <button type="button" className="btn admin-header__logout-btn">
        ➲ Log out
      </button>
    </header>
  );
};

export default AdminHeader;
