import React from 'react';
import './Word.css';

const WordList = (): JSX.Element => {
  
  return (
    <table>
      <tr>
        <td>
          <input type="checkbox"></input>
        </td>
        <td>English</td>
        <td>Korean</td>
        <td>
          <button>뜻 보기</button>
          <button>삭제</button>
        </td>
      </tr>
    </table>
  );
};

export default WordList;
