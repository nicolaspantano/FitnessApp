import {useState, useEffect} from 'react'

const useFetch = url => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        
        const fetchResources = async () => {

            try{
                let res = await fetch(url)
                let datos = await res.json();

                setData(datos)
                setLoading(false)
            }
            catch (error){

                setLoading(false)
                setError(error)
            }
            
        } 
        fetchResources();
    
    }, [url])

    return {data,loading,error}

}

export default useFetch
