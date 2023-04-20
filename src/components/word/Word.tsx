import React from 'react';
import './Word.css';
import WordList from './WordList';

const Word = (): JSX.Element => {
  return (
    <>
      <main className="word_container">
        <div className="left">
          <form className="word_form">
            <div className="input_area">
              <label htmlFor="Eng">English &nbsp;</label>
              <input type="text" placeholder=" Computer" />
            </div>
            <div className="input_area">
              <label htmlFor="Eng">Korean &nbsp;</label>
              <input type="text" placeholder=" 컴퓨터" />
            </div>
            <button>단어 추가</button>
          </form>
        </div>
        <div className="right">
          <WordList />
        </div>
      </main>
    </>
  );
};

export default Word;
