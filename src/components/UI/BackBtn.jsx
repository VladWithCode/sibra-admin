import React from 'react';
import FloatingBtn from '../Floating/FloatingBtn';
import SVG from './SVG';
import { useNavigate } from 'react-router-dom';

function BackBtn({ onClick }) {
  const navigate = useNavigate();

  const _onClick = e => {
    typeof onClick === 'function' && onClick(e);
    navigate(-1);
  };

  return (
    <FloatingBtn
      className='btn--danger btn--round btn--back p-0'
      style={{ right: 'initial', left: '7rem' }}
      onClick={_onClick}>
      <SVG id='angle' style={{ '--icon-sz': '4rem' }} />
    </FloatingBtn>
  );
}

export default BackBtn;
