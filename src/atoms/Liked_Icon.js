import React, {Fragment} from 'react';
import styled from 'styled-components';

const Div = styled.div`
  background-image: url(https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png);
  background-size: cover;
  width: 36px;
  height: 32px;
  background-repeat: no-repeat no-repeat;
`

const Liked_Icon = () => {
  return(
    <Fragment>
      <Div></Div>
    </Fragment>
  );
}

export default Liked_Icon;
