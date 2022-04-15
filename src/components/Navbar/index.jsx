import React from 'react';
import { Wrap } from './style';
import { data } from '../../utils/navbar';
import { NavLink } from 'react-router-dom';

const NavbarComp = () => {
  return (
    <Wrap>
      <ul>
        {data.map(
          (i) =>
            !i.hidden && (
              <NavLink key={i.id} to={i.path}>
                <li>{i.title}</li>
              </NavLink>
            )
        )}
      </ul>
    </Wrap>
  );
};

export default NavbarComp;
