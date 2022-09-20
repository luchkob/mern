 
import {useEffect, useState} from 'react'
  
const Home=()=>{
var [name,setname]=useState('')
    return(
 <form >

 <input type='text' placeholder='type here' onChange={(e)=> setname(e.target.value)} />

<label>your name:{name}</label>


 </form>


    )
}
export default Home;