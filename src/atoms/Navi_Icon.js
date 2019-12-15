import React, {Fragment} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png);
  background-size: cover;
  width: 32px;
  height: 32px;
  background-repeat: no-repeat no-repeat;
`

const Navi_Icon = () => {
  return(
    <Fragment>
      <Div></Div>
    </Fragment>
  );
}

export default Navi_Icon;
