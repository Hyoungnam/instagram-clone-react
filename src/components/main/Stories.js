import React, {Fragment, useRef, useEffect} from 'react';
import styled from 'styled-components';
import Thumbnail_Icon from '../../atoms/Thumbnail_Icon'

const Wrapper = styled.div`
   display: flex;
   position: relative;
   padding-left: 8px;
`
const StoriesUser = styled.div`
   display: flex;
   flex-direction: column;
`
const StoriesNick = styled.div`
  display: inline-block;
  margin: 5px 0px 1px;
  padding: 4px 2px 0px;
  font-size: 15px;
`
const StoriesUploadTime = styled.div`
   display: inline-block;
   color: #bbb;
   padding: 0px 2px;
   font-size: 12px;
`
const Canvas = styled.canvas`
  position: absolute;
  top: -2%;
  left: 2.5%;
  width: 100px;
  height: 50px;
`

const makeCanvas = (crl) => {
  crl.beginPath()
  crl.arc(75, 75, 60, 0, 2*Math.PI);
  crl.fillStyle = 'rgba(0, 0, 0, 0)';
  crl.fill();
  
  //make outline
  let gradient = crl.createLinearGradient(12,20,45,95);
  gradient.addColorStop(0,'red');
  gradient.addColorStop(1,'blue');
  crl.strokeStyle=gradient;
  crl.lineWidth = 8;
  crl.stroke();
}

const Stories = ({id, url, date}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    makeCanvas(canvas.getContext('2d'));
  });
  
  return(
    <Fragment>
      <Wrapper>
        <Thumbnail_Icon url={url} width={28} height={28}></Thumbnail_Icon>
        <Canvas ref={canvasRef}></Canvas>
        <StoriesUser>
          <StoriesNick>{id}</StoriesNick>
          <StoriesUploadTime>{date}</StoriesUploadTime>
        </StoriesUser>
      </Wrapper>
    </Fragment>
  );
}

export default Stories;
