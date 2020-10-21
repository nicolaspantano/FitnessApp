import React from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import ExcerciseNew from './ExcercisesNew'
import Url from '../config'
class ExcerciseNewContainer extends React.Component {

    state = {
        form: {
            title : '',
            description : '',
            img : '',
            leftColor : '',
            rightColor : '' 
        },
        loading:false,
        error:null
    }

    handleChange = e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name] : e.target.value
            }
            
        })
    }


    handleSubmit = async e =>{

        this.setState({
            loading:true
        })

        e.preventDefault()

        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(this.state.form)
            }

            let res = await fetch(`${Url}/exercises`,config)
            let json = await res.json()

            this.setState({
                loading:false
            })

            this.props.history.push('/excercise')
        } 
        catch (error) {
            this.setState({
                loading:false,
                error
            })
        }
        console.log(this.state)
    }

    render(){
        if(this.state.loading)
            return <Loading/>

        if(this.state.error)
            return <FatalError/>
        return <ExcerciseNew
            form = {this.state.form}
            onChange  = {this.handleChange}
            onSubmit = {this.handleSubmit}
        />
        
    }
}

export default ExcerciseNewContainer