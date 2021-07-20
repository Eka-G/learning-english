import NavList from '../nav-list';
import './admin-nav.css';

const AdminNav = () => {
  return (
    <nav className="admin-nav">
      <NavList
        isAdmin
        adminItems={[
          {
            value: 'categories',
            path: '/admin/categories',
          },
          {
            value: 'words',
            path: '/admin/categories/words',
            onClick: (event: MouseEvent) => event.preventDefault(),
          },
        ]}
      />
    </nav>
  );
};

export default AdminNav;
