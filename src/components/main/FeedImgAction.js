import React, {Fragment} from 'react';
import styled from 'styled-components';
import ImgActionLike from '../../atoms/Like_Icon';
import ImgActionComment from '../../atoms/Comment_Icon';
import ImgActionShare from '../../atoms/Share_Icon';
import ImgActionMark from '../../atoms/Mark_Icon';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
`

const ImgActionLeft = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 5px;
`


const FeedImgAction = () => {
  return(
    <Fragment>
      <Wrapper>
        <ImgActionLeft>
          <ImgActionLike/>
          <ImgActionComment/>
          <ImgActionShare/>
        </ImgActionLeft>
        <ImgActionMark/>
      </Wrapper>
    </Fragment>
  );
}

export default FeedImgAction;
