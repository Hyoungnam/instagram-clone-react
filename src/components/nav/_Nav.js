import React from 'react';
import styled from 'styled-components';
import NavLeft from './NavLeft';
import NavCenter from './NavCenter';
import NavRight from './NavRight';


const Div = styled.nav`
  border-bottom: 0.6px solid #bbb;
  position: fixed;
  z-index: 10;
  top:0;
  left: 0;
  width: 100%;
  height: 77px;
  background-color: white;
  margin-right: 2px;
  padding: 0px 2px;
  display: flex;
  justify-content: space-evenly;
`

const Nav = () => {
  return(
      <Div>
        <NavLeft/>
        <NavCenter/>
        <NavRight/>
      </Div>
  );
}

export default Nav;