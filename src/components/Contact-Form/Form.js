import React, { useContext } from 'react';
import './Form.css';
import {myContext} from '../../App'

const Form = () => {


const label = useContext(myContext)

    return (
        <div className='Form'>


            <form className='contact-form'>

                <label> {label} </label>
                <input placeholder='enter your email' />
                <label> {label} </label>
                <input placeholder='enter your name' />
                <label> {label} </label>
                <textarea placeholder='enter your query'> </textarea>

            </form>

        </div>
    )
}

export default Form