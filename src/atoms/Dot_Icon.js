
import React, {Fragment} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png);
  background-repeat: no-repeat;
  margin: 14px 12px;
  background-size: cover;
  width: 30px;
  height: 30px;
`

const Dot_Icon = () => {
  return(
    <Fragment>
      <Div></Div>
    </Fragment>
  );
}

export default Dot_Icon;
