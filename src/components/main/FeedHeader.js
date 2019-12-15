import React, {Fragment} from 'react';
import styled from 'styled-components';
import DotIcon from '../../atoms/Dot_Icon';
import Thumbnail_Icon from '../../atoms/Thumbnail_Icon';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
`

const PostLeft = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`
const PostUserNick = styled.div`
  font-size: 18px;
  font-weight: 500;
  padding: 10px 20px 10px .10px;
`

const FeedHeader = () => {
  let url = 'https://scontent-icn1-1.cdninstagram.com/vp/dcca337e93686997df102361db60db2c/5DF4ED4F/t51.2885-19/s320x320/51616861_258531261731722_2335377231565553664_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com'

  return(
    <Fragment>
      <Wrapper>
        <PostLeft>
          <Thumbnail_Icon url={url}/>
          <PostUserNick>canon_mj</PostUserNick>
        </PostLeft>
        <DotIcon/>
      </Wrapper>
    </Fragment>
  );
}

export default FeedHeader;
