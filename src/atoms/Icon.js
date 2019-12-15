import React, {Fragment} from 'react';
import styled from 'styled-components';

const Div = styled.div`
   background-image: url(https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png);
   background-size: 100%, 100%;
   width:32px;
   height:32px;
   background-repeat: no-repeat no-repeat;
   display: block;
`

const LogoIcon = () => {
  return(
    <Fragment>
      <Div></Div>
    </Fragment>
  );
}

export default LogoIcon;
