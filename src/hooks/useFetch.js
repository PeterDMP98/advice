import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = (url,change) =>{

    const [state, setState] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
      axios.get(url)
      .then(res => setState(res.data))
      .catch(err => {
        console.log(err)
        setError(true)
      })

    }, [change])
    
    return (state ? state : error)
}

export default useFetch