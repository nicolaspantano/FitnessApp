import React from  'react'
import './styles/Button.css'
import {Link} from 'react-router-dom'

const Button = () => (
    <Link to="excercise/new"> 
                    <img className="Fitness-Add" alt="exercise" src="https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/add.png?alt=media&token=fbe1d973-4b4f-42d8-b76e-2c4354f6ed9d"></img>
        </Link>
)

export default Button