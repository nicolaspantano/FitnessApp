import React from 'react'
import ExcerciseForm from '../components/ExcerciseForm'
import Card from '../components/Card'
const ExcerciseNew = ({form, onChange, onSubmit}) => (
                <div className="row">
                <div className="col-sm">
                    <Card
                        {...form}
                    />
                </div>
                <div className="col-sm">
                    <ExcerciseForm
                    onChange={onChange}
                    onSubmit={onSubmit}
                    form={form}
                    />               
                </div>
                

            </div>
)

export default ExcerciseNew