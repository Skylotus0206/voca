import React from 'react';
import './Word.css';

const Word = (): JSX.Element => {
  return (
    <>
      <main className="Word_container">
        <div className="left">
          <div className="addition">
            <form>
              <div className="input_area">
                <label htmlFor="Eng">English</label>
                <input type="text" placeholder="computer" />
              </div>
              <div className="input_area">
                <label htmlFor="Eng">Korean</label>
                <input type="text" placeholder="컴퓨터" />
              </div>
              <button>저장</button>
            </form>
          </div>
        </div>
        <div className="right"></div>
      </main>
    </>
  );
};

export default Word;
