import React from 'react';

function Bouton (props) {
    
    return (
        <div>
            {props.data.map((elem, index)=>{
                return (
                    <button key={index} onClick={(e)=>{
                     
                     
                    }}>Déces</button>
                )
            })}
            
        </div>
    );
};

export default Bouton;