//span map return key

import React, {Fragment} from 'react';
import styled from 'styled-components';


const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
  padding: 2px 10px;
  ${props=> props.content ?  `
    font-size: 15px;
    font-weight: 400;
    padding: 2px 0px;
    cursor: pointer;
  ` : ``}
`
const FeedComments = ({comment, deleteComment}) => {
  const comments = comment.map(({id, comment}, index)=>{
    return <div key={id + index.toString()}>
              <Span>{id}</Span>
              <Span onDoubleClick={()=>{deleteComment(id,id + index.toString())}} content="true">{comment}</Span>
           </div>
  });
  return(
    <Fragment>
      {comments}
    </Fragment>
  );
}

export default FeedComments;