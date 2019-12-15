import React, {Fragment, useState} from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(0, 0, 0, 20%);
`
const Input = styled.input`
  border: 1px solid rgba(0, 0, 0, 0%);
  font-size: 14px;
  height: 32px;
  padding: 2px 16px;
  width: 80%;
`
const Button = styled.button`
  border: 1px solid white;
  width: 40px;
  font-size: 13px;
  color: #81D4FA;
  background-color: #FFFFFF;

`

const FeedCreateComment = ({comment, setComment}) => {
  const [newComment, setNewComment] = useState('');

  const handleInput = (e) => {
    if(e.key === 'Enter') createNewComment();
  }
  const createNewComment = () => {
    setComment([...comment, {id:'wecode', comment: newComment }])
    setNewComment('');
  }
  return(
    <Fragment>
      <Wrapper>
        <Input type="text" 
               value={newComment} 
               onChange={e=>setNewComment(e.target.value)}  
               onKeyDown={e=>handleInput(e)} 
               placeholder="댓글 달기..."
        />
        <Button onClick={createNewComment}>게시</Button>
      </Wrapper>
    </Fragment>
  );
}

export default FeedCreateComment;

