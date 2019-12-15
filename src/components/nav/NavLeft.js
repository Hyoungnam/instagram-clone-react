import React, {Fragment} from 'react';
import styled from 'styled-components';
import Icon from '../../atoms/Icon';
import Logo from '../../atoms/Logo';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-width:200px;
  width: 200px;
  padding: 0px 10px;
`
const Div = styled.div`
  border-left: 1px solid #919191;
  height: 28px;
`

const NavLeft = () => {
  return(
    <Fragment>
      <Wrapper>
        <Icon/>
        <Div></Div>
        <Logo/>
      </Wrapper>
    </Fragment>
  );
}

export default NavLeft;
