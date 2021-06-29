import React from 'react';

const MenuState = React.createContext({
  navState: '',
  toggleNavState: () => {},
});

export default MenuState;
