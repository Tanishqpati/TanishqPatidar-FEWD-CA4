import React from 'react'

export default function Result({setScore,score, setCurrentQuestion, setShowResults, length}) {

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="result-box">
    <div className='card'>
      <h1>Final Results</h1>
      <h2>{score} out of {length} correct - (
        {(score / length) * 100}%)</h2>
      <div className="highlight-btns" onClick={() => restartGame()}>Restart game</div>
      
    </div>  
    </div>
    
  )
}
