import React, { useState } from 'react'
import './Pagination.css'
const Pagination = ({totalPages, onclick, currentPage}) => {
    const [currentSet, setCurrentSet] = useState(0);
    const btnPerSet = 5;
    const handleNextSet = () => {
      if ((currentSet + 1) * btnPerSet < totalPages) {
        setCurrentSet(currentSet + 1);
      }
    };
  
    const handlePrevSet = () => {
      if (currentSet > 0) {
        setCurrentSet(currentSet - 1);
      }
    };
   const startButton = currentSet * btnPerSet + 1;
  const endButton = Math.min(startButton + btnPerSet - 1, totalPages);
  const buttons = [];
  for (let i = startButton; i <= endButton; i++) {
    buttons.push(i);
  }
  return (
    <>
    {<ul className='pagination'>
      {currentSet > 0 && (
        <li>
          <button className='pagination_btn' onClick={handlePrevSet}>
            {'<'}
          </button>
        </li>
      )}
      {buttons.map((button) => (
        <li key={button}>
          <button
            className={parseInt(currentPage) === button ? 'pagination_btn active' : 'pagination_btn'}
            onClick={() => onclick(button)}
          >
            {button}
          </button>
        </li>
      ))}
      {(currentSet + 1) * btnPerSet < totalPages && (
        <li>
          <button className='pagination_btn' onClick={handleNextSet}>
            {'>'}
          </button>
        </li>
      )}
    </ul>}
    </>
  )
}

export default Pagination