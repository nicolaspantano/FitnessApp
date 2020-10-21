import React from 'react'
import useFetch from '../hooks/useFetch'
import Excercises from './Excercises'
import Loading from '../components/Loading'
import FatalError from './500'
import Url from '../config'
const ExcersisesContainer = () => {
 
    
    const {data,loading,error} = useFetch(`${Url}/exercises`);

    if(loading){
        return <Loading/>
    }

    if(error){
        return <FatalError/>
    }

    return (
    <Excercises
        data={data}
        />
    )

    
}
/* 
class ExcersisesContainer extends React.Component{
        state = {
            data: [],
            loading:true,
            error : null
        }

        async componentDidMount(){
            await this.fetchExercises()
        }

        fetchExercises = async () => {

            try{
                let res = await fetch('http://localhost:8000/api/exercises')
                let data = await res.json();
            
                this.setState({
                    data,
                    loading:false
                })    
            }
            catch (error){
                this.setState({                    
                    loading:false,
                    error
                })  
            }
            
        } 

        render(){
            if(this.state.loading)
                return <Loading/>

            if(this.state.error)
                return <FatalError/>
                
            return(
                <Excercises
                data={this.state.data}
                />
            )
        }
    }
    
 */

export default ExcersisesContainer