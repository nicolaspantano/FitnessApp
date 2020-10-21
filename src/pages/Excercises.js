import React from 'react'
import ExcerciseList from '../components/ExcerciseList';
import Welcome from '../components/Welcome';
import Button from '../components/button'

const Excercises = ({data}) => (
                <React.Fragment>
                     <Welcome
                        username="Nicolas"
                    />
                    <ExcerciseList
                        excercises={data}
                    />
                    <Button/>
                    
                </React.Fragment>
)

export default Excercises