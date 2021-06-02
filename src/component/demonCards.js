import imp from "../doomImgs/imp.jpg"
import caco from "../doomImgs/caco.jpg"
import hellKinght from '../doomImgs/hellKinght.jpg'
import baron from '../doomImgs/baronOfHell.jpg'
import snek from '../doomImgs/snek.jpg'
import pinky from '../doomImgs/pinky.jpg'
import marauder from '../doomImgs/marauder.jpg'
import prowler from '../doomImgs/prowler.jpg'
import zombie from '../doomImgs/zombieMen.jpg'
import React, {useState, useEffect} from "react";


const DemonCards = () => {
    //array of images
    let demons = [
        {src: snek},
        {src: imp},
        {src: caco},
        {src: pinky},
        {src: zombie},
        {src: marauder},
        {src: baron},
        {src: hellKinght},
        {src: prowler}   
    ]
    
    //fisher yates shuffle algorithm
    function shuffle(array){
        for(let i = array.length - 1; i > 0; i--){
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    
    shuffle(demons)
    
    
    //map is iterating through each element in the deamons array rendering them based on theier index through key line 33
    return(
        <div>
            {demons.map((imgSrc, name, index) => (<img src={imgSrc.src} key={index}/>
            ))}
        </div>
    
    )
    
    
}

export default DemonCards;