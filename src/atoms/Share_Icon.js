
import React, {Fragment} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png);
  background-repeat: no-repeat;
  background-size: cover;
  width: 28px;
  height: 28px;
  margin: 2px 4px 0px 6px;
`

const Like_Icon = () => {
  return(
    <Fragment>
      <Div></Div>
    </Fragment>
  );
}

export default Like_Icon;
