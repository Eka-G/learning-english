import useSWR from 'swr';
import { NavItemProps } from '../../shared/interfaces';
import { getCategories, CATEGORIES_KEY } from '../../api';
import NavItem from '../nav-item';
import './nav-list.css';

interface NavListProps {
  isAdmin: boolean;
  adminItems: NavItemProps[] | null;
}

const NavList = ({ isAdmin, adminItems }: NavListProps) => {
  const { data } = useSWR(CATEGORIES_KEY, getCategories);

  return (
    <>
      {!isAdmin && (
        <ul className="nav-list">
          {data?.map((item) => {
            return <NavItem key={item._id} id={item._id} value={item.name} path={`/categories/${item.name}`} />;
          })}
          <NavItem key="statistics" value="Statistics" path="/statistics" />
        </ul>
      )}

      {isAdmin && adminItems && (
        <ul className="nav-list admin-nav__list">
          {adminItems.map((item) => {
            if (item.onClick) {
              return <NavItem key={item.value} value={item.value} path={item.path} onClick={() => item.onClick} />;
            }

            return <NavItem key={item.value} value={item.value} path={item.path} />;
          })}
        </ul>
      )}
    </>
  );
};

export default NavList;
