import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css';

const Body = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <Link to={'/word'}>
          <button className="body_btn">단어 추가</button>
        </Link>
        <Link to={'/test'}>
          <button className="body_btn">테스트하기</button>
        </Link>
        <Link to={'/recap'}>
          <button className="body_btn">복습 하기</button>
        </Link>
      </div>
    </>
  );
};

export default Body;
