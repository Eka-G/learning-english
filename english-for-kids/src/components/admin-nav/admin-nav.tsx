import NavList from '../nav-list';
import './admin-nav.css';

const AdminNav = () => {
  return (
    <nav className="admin-nav">
      <NavList isAdmin adminItems={['categories', 'words']} />
    </nav>
  );
};

export default AdminNav;
