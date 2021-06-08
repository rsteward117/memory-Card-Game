import DemonCard from "./demonCard"
import imp from "../doomImgs/imp.jpg"
import caco from "../doomImgs/caco.jpg"
import hellKinght from '../doomImgs/hellKinght.jpg'
import baron from '../doomImgs/baronOfHell.jpg'
import snek from '../doomImgs/snek.jpg'
import pinky from '../doomImgs/pinky.jpg'
import marauder from '../doomImgs/marauder.jpg'
import prowler from '../doomImgs/prowler.jpg'
import zombie from '../doomImgs/zombieMen.jpg'
import React, {useState, useEffect} from "react"


const DemonCardsContainer = (props) => {
    const {handleGameLogic, score, highestScore} = props
    //array of images
    let demons = [
        {src: snek, name: 'Snek'},
        {src: imp, name: 'Imp'},
        {src: caco, name: 'Cacodemon'},
        {src: pinky, name: 'Pinky'},
        {src: zombie, name: 'ZombieMen'},
        {src: marauder, name:'Marauder'},
        {src: baron, name:'Baron Of Hell'},
        {src: hellKinght, name: 'Hellknight'},
        {src: prowler, name:'Prowler'}   
    ]
    const [demonsList, setdemonsList] = useState(demons);
    
    //fisher yates shuffle algorithm
    function shuffle(array){
        for(let i = array.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    
    //use effect is basicly componentdidmount, componentdidupdate, and componentdidunmount altogether line 42 is createing an variable that takes in the whole 'demonList' array or state and line 43 passing the variable into the shuffle function, and line 44 is seting the new state of the demonList array with their new postions in the array
    useEffect(() => {
        const newDemonCards = [...demonsList]
        shuffle(newDemonCards);
        setdemonsList(newDemonCards);
    }, [score, highestScore]);
    

    //map is iterating through each element in the deamons array rendering them based on theier index through key line 33
    return(
        <>
            {demonsList.map((demon) =>(
             <DemonCard demon={demon} key={demon.name} handleGameLogic={handleGameLogic} />
             ))}
        </>
    
    )
    
    
}

export default DemonCardsContainer;