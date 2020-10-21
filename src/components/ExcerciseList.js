import React from 'react'
import Card from './Card'


const ExcersieList = ({excercises}) => (
            <>
                {
                    excercises.map((exercise) => {
                        return(
                            <Card
                                key={exercise.id}
                                {...exercise}
                />
                        )
                    })
                }
            </>
)

export default ExcersieList