import React from 'react';
//this component is seting up the properties and variables to be used in the demonCardsContainer, and the demonCardsContainer will use these variables, and send the data back so that demonCard can display them/
function DemonCard(props){
   const{
    demon: {src, name},
    handleGameLogic,
} = props;
    
return (
    <button 
        className="demon"
        onClick={handleGameLogic.bind(this, name)}
    >
        <figure>
            <img src={src} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    </button>
    )
}
export default DemonCard;