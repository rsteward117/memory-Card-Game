import React, {useState} from 'react';
import DemonCardsContainer from './demonCardsContainer'
import Header from './header'

function GameLogic(){
    const [score, setScore] = useState(0);
    const [highestScore, setHighestScore] = useState(0);
    const [deamonsArr, addDemon] = useState([]);
    
    //prevScore is just whatever score was previously and when handleScore is called it goes up by one.
    const handleScore = () => {
        setScore((prevScore) => prevScore + 1);
    }
    // handleHighScore is just retuening the last score that's inside the score state
    const handleHighScore = () => {
        setHighestScore(score);
    }
    //when you click on a demon picture you are puting the demon pic in an array so the game can remeber what demonn you clicked on already.
    const handleDemon = (demonName) => {
        addDemon((preArr) => [...preArr, demonName]);
    }
    //resets the game
    const reset = () => {
        setScore(0);
        addDemon([]);        
    }
    // calls all the other fuctions to do there jobs
    const handleGameLogic = (demonName) => {
        if (!deamonsArr.includes(demonName)){
            handleDemon(demonName);
            handleScore();
        }else{
            handleHighScore();
            reset();
        }
    }
    
    return(
        <>
            <Header score={score} highestScore={highestScore} />
            <div className="demon-card-container">
                <DemonCardsContainer
                    handleGameLogic={handleGameLogic}
                    score={score}
                    highestScore={highestScore}
                />
            </div>
        </>
    )
}
export default GameLogic;