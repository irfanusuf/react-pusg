import React from 'react';
import "./Section.css";

const Section = (props) => {
    return (
        <div className='section'>

            <div className='central'>

                <h1> Welocme {props.user}</h1>

                
                <h2>To the advanced level of gaming </h2> 

            </div>


        </div>
    )
}

export default Section