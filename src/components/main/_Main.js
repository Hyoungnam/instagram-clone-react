import React, {Fragment, useState} from 'react';
import styled from 'styled-components';
import FeedHeader from './FeedHeader';
import FeedImgAction from './FeedImgAction';
import FeedContent from './FeedContent';
import FeedComments from './FeedComments';
import FeedCreateComment from './FeedCreateComment';
import LoginUser from './LoginUser';
import Story from './Story';
import RecommendUser from './RecommendUser';

const Background = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  margin-top: 78px;
  background-color: #FAFAFA;
`
const Wrapper = styled.div`
  display:flex;
  justify-content:center;
  max-width:1220px;
  width: 1220px;
  margin: 0 auto;
 
`
const FeedsSection = styled.div`
  background-color: #FFFFFF;
  border: 1px solid rgba(0, 0, 0, 10%);
  border-radius:4px;
  width: 600px;
  margin: 60px 340px 60px 0px;
`
const FeedsSideSection = styled.div`
  position: fixed;
  width: 300px;
  height:500px;
  margin: 60px 0px 20px 340px;
`
const FeedImg = styled.div`
  background-image: url(https://scontent-gmp1-1.cdninstagram.com/vp/7dd7d8e61047035d530ec7b8785e0e28/5E2E6E48/t51.2885-15/e35/69366856_2154583161509048_6271804732968189983_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1
  );
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 600px;
`
const Div = styled.div`
  padding: 0px 10px 4px;
  font-weight: 600;
  ${props=>props.time &&`
    color: #919191;
    font-size:13px;
    padding: 4px 10px 4px;
  `}
`
const Main = () => {
  const [user, setUser] = useState('wecode');
  const [postOwner, setPostOwner] = useState(
    {
      id:'canon_mj', 
      content:'새 앨범 자켓 준비중'
    }
  );
  const [comment, setComment] = useState(
      [
       {id:'ryanersim', comment:'역시갓이유'},
       {id:'blackeyes', comment:'새앨범대박'},
       {id:'postmalone', comment:'이유는아이유'}
      ]
    );
  const [storyData, setStoryData] = useState(
    [
      {id:'_yum_s', date:"16분전", picURL:"https://scontent-icn1-1.cdninstagram.com/vp/dcca337e93686997df102361db60db2c/5DF4ED4F/t51.2885-19/s320x320/51616861_258531261731722_2335377231565553664_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"},
      {id:'drink_eat_drink', date:"3시간 전", picURL:"https://scontent-icn1-1.cdninstagram.com/vp/dcca337e93686997df102361db60db2c/5DF4ED4F/t51.2885-19/s320x320/51616861_258531261731722_2335377231565553664_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"},
      {id:'hyukc', date:"20시간 전", picURL:"https://scontent-icn1-1.cdninstagram.com/vp/dcca337e93686997df102361db60db2c/5DF4ED4F/t51.2885-19/s320x320/51616861_258531261731722_2335377231565553664_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com"}
    ]
  );
  const [forUser, setForUser] = useState(
    [
      {id:'joaaaaahye', whatFor:"회원님을 팔로우합니다", picURL:'https://scontent-icn1-1.cdninstagram.com/vp/fe72f0704a8e80eab0e1040e42a4b465/5E0DD110/t51.2885-19/s320x320/67879165_662272640917279_8881524564585086976_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com'},
      {id:'blacwhite', whatFor:"회원님을 팔로우합니다", picURL:'https://scontent-icn1-1.cdninstagram.com/vp/fe72f0704a8e80eab0e1040e42a4b465/5E0DD110/t51.2885-19/s320x320/67879165_662272640917279_8881524564585086976_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com'},
      {id:'flexinon', whatFor:"회원님을 팔로우합니다", picURL:'https://scontent-icn1-1.cdninstagram.com/vp/fe72f0704a8e80eab0e1040e42a4b465/5E0DD110/t51.2885-19/s320x320/67879165_662272640917279_8881524564585086976_n.jpg?_nc_ht=scontent-icn1-1.cdninstagram.com'}
    ]
  );
  const deleteComment = (_id, _index) => {
    if(_id === user) {
      const targetIndex = comment.findIndex((x,index)=>{return x.id === _id && 
                                                              (x.id + index.toString()) === _index});
      const targetDeletedArr = [
        ...comment.slice(0,targetIndex),
        ...comment.slice(targetIndex+1, comment.length)
      ]
      setComment(targetDeletedArr);
    }
  }
  

  return(
    <Fragment>
      <Background>
        <Wrapper>
            <FeedsSection>
              <FeedHeader/>
              <FeedImg/>
              <FeedImgAction/>
              <Div>좋아요 116개</Div>
              <FeedContent postOwner={postOwner}/>
              <FeedComments comment={comment} deleteComment={deleteComment}/>
              <Div time="true">42분 전</Div>
              <FeedCreateComment comment={comment} setComment={setComment}/>
            </FeedsSection>

            <FeedsSideSection>
                <LoginUser/>
                <Story storyData={storyData}/>
                <RecommendUser forUser={forUser}/>
            </FeedsSideSection>
        </Wrapper>
      </Background>
    </Fragment>
  );
}

export default Main;
