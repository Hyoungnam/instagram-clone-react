import React, {Fragment} from 'react';
import styled from 'styled-components';
import NaviIcon from '../../atoms/Navi_Icon'
import LikedIcon from '../../atoms/Liked_Icon'
import ProfileIcon from '../../atoms/Profile_Icon'

const Wrapper = styled.div`
  display: flex;
  width: 200px;
  align-items: center;
  justify-content: space-evenly;
`

const NavRight = () => {
  return(
    <Fragment>
      <Wrapper>
        <NaviIcon/>
        <LikedIcon/>
        <ProfileIcon/>
      </Wrapper>
    </Fragment>
  );
}

export default NavRight;
