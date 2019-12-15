import React, {Fragment} from 'react';
import styled from 'styled-components';

const Div = styled.div`
   background-image: url('../img/logo_text.png');
   background-size: 100% 100%;
   width: 108px;
   height: 32px;
   background-repeat: no-repeat no-repeat;
`

const Logo = () => {
  return(
    <Fragment>
      <Div></Div>
    </Fragment>
  );
}

export default Logo;
