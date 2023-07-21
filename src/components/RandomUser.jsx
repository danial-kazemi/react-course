import { useState } from 'react';
import axios from 'axios';

const RandomUser = () => {  
    const [email, setEmail] = useState('')
    async function getUserData() {
         const address = 'https://randomuser.me/api/' ;
            const {data} = await axios.get(`${address}`)            
            return data ;    
        }
        getUserData()
            .then((response)=>{
                console.log(response);         
            })  
      
  return (
    
    <>
    <div>{email}</div>
    </>
    
  )
}

export default RandomUser