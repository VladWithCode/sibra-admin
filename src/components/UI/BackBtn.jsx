import React from 'react';
import FloatingBtn from '../Floating/FloatingBtn';
import SVG from './SVG';
import { useNavigate } from 'react-router-dom';

function BackBtn({}) {
  const navigate = useNavigate();

  return (
    <FloatingBtn
      className='btn--danger btn--round btn--back p-0'
      style={{ right: 'initial', left: '7rem' }}
      onClick={() => navigate(-1)}>
      <SVG id='angle' style={{ '--icon-sz': '4rem' }} />
    </FloatingBtn>
  );
}

export default BackBtn;
