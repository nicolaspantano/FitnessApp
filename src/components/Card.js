import React from 'react'
import defaultImg from '../images/exercise.png'
import circlesImg from '../images/circle.png'
import './styles/Card.css'

const Card = ({title, description, img, leftColor, rightColor}) => {


    return (
        <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right,  ${leftColor || '#283c86'}, ${rightColor || '#45a247'})`
            }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || defaultImg} className="float-right"/>
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                             <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}


export default Card